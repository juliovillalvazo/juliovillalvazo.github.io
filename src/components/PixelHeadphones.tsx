import { useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PixelHeadphones.css';

gsap.registerPlugin(ScrollTrigger);

const HEADPHONE_PATTERN = [
    '................................',
    '................................',
    '.............AAAAAA.............',
    '..........AAAAAAAAAAAA..........',
    '........AAAAAAAAAAAAAAAA........',
    '.......AAAA........AAAA.......',
    '......AAA............AAA......',
    '.....AAA..............AAA.....',
    '....AAA................AAA....',
    '....AA..................AA....',
    '...AAA..................AAA...',
    '...AA....................AA...',
    '...AA....................AA...',
    '...AA....................AA...',
    '...AA....................AA...',
    '..BBB....................BBB..',
    '..BBB....................BBB..',
    '..BBB....................BBB..',
    '..BBB....................BBB..',
    '..BBBB..................BBBB..',
    '..BBBB..................BBBB..',
    '..BBBB..................BBBB..',
    '..BBBBB................BBBBB..',
    '...BBBB................BBBB...',
    '....BBB................BBB....',
    '.....BB................BB.....',
    '................................',
    '..............CCCC..............',
    '.............CCCCCC.............',
    '.............CCCCCC.............',
    '..............CCCC..............',
    '................................',
];

type PixelType = 'band' | 'cup' | 'core';

const getPixelType = (cell: string): PixelType => {
    if (cell === 'A') return 'band';
    if (cell === 'B') return 'cup';
    return 'core';
};

const seededScatter = (row: number, column: number) => {
    const seed = Math.sin(row * 91.7 + column * 37.3) * 10000;
    const normalized = seed - Math.floor(seed);

    const direction = normalized > 0.5 ? 1 : -1;
    const x = direction * (120 + normalized * 360);
    const y = (normalized - 0.5) * 420;
    const rotate = (normalized - 0.5) * 90;

    return { x, y, rotate };
};

export function PixelHeadphones() {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const columns = HEADPHONE_PATTERN[0].length;

    const pixels = useMemo(() => {
        return HEADPHONE_PATTERN.flatMap((row, rowIndex) =>
            row.split('').map((cell, columnIndex) => {
                if (cell === '.') return null;

                const scatter = seededScatter(rowIndex, columnIndex);

                return {
                    id: `${rowIndex}-${columnIndex}`,
                    row: rowIndex + 1,
                    column: columnIndex + 1,
                    type: getPixelType(cell),
                    depth: 0.68 + ((rowIndex + columnIndex) % 4) * 0.08,
                    scatter,
                };
            }),
        ).filter(Boolean) as Array<{
            id: string;
            row: number;
            column: number;
            type: PixelType;
            depth: number;
            scatter: {
                x: number;
                y: number;
                rotate: number;
            };
        }>;
    }, []);

    useLayoutEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        const pixelElements = gsap.utils.toArray<HTMLElement>(
            '.pixel-headphones__pixel',
            root,
        );

        if (prefersReducedMotion) {
            gsap.set(pixelElements, {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                filter: 'blur(0px)',
            });

            return;
        }

        gsap.set(pixelElements, {
            opacity: 0,
            x: (_, element) => Number(element.dataset.scatterX),
            y: (_, element) => Number(element.dataset.scatterY),
            rotate: (_, element) => Number(element.dataset.scatterRotate),
            scale: 0.55,
            filter: 'blur(6px)',
        });

        const ctx = gsap.context(() => {
            gsap.to(pixelElements, {
                opacity: (_, element) => Number(element.dataset.depth),
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                filter: 'blur(0px)',
                ease: 'none',
                stagger: {
                    amount: 0.22,
                    from: 'center',
                },
                scrollTrigger: {
                    trigger: root.closest('.pixel-headphones-section') ?? root,
                    start: 'top 65%',
                    end: 'bottom 58%',
                    scrub: 1.1,
                },
            });

            gsap.to(root, {
                '--headphones-glow': 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: root,
                    start: 'top 70%',
                    end: 'center 36%',
                    scrub: true,
                },
            });
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={rootRef}
            className='pixel-headphones'
            style={
                {
                    '--columns': columns,
                    '--rows': HEADPHONE_PATTERN.length,
                } as React.CSSProperties
            }
            aria-hidden='true'
        >
            <div className='pixel-headphones__stage'>
                {pixels.map((pixel) => (
                    <span
                        key={pixel.id}
                        className={`pixel-headphones__pixel pixel-headphones__pixel--${pixel.type}`}
                        data-depth={pixel.depth}
                        data-scatter-x={pixel.scatter.x}
                        data-scatter-y={pixel.scatter.y}
                        data-scatter-rotate={pixel.scatter.rotate}
                        style={
                            {
                                gridColumn: pixel.column,
                                gridRow: pixel.row,
                                '--depth': pixel.depth,
                            } as React.CSSProperties
                        }
                    />
                ))}
            </div>
        </div>
    );
}
