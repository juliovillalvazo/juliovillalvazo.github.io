import {
    useState,
    type CSSProperties,
    type Dispatch,
    type SetStateAction,
} from 'react';
import audibleLogo from '../assets/Audible_logo.png';
import audibleHomepage from '../assets/audible-homepage.png';
import cyberpuertaHomescreen from '../assets/cyberpuerta-homescreen.png';
import cyberpuertaLogo from '../assets/cyberpuerta-logo.webp';
import googleHomepage from '../assets/google-homepage.png';
import googleLogo from '../assets/google-logo.png';
import imagineLearningHomepage from '../assets/imaginelearning-homepage.png';
import imagineLearningLogo from '../assets/il-logo.png';
import usaaHomepage from '../assets/usaa-homepage.png';
import usaaLogo from '../assets/usaa-logo.png';
import visaHomepage from '../assets/visaa-homepage.png';
import visaLogo from '../assets/visa-inc-logo.png';
import { experiences } from '../data/content';
import './WorkWindows.css';

const experienceAssets: Record<
    string,
    {
        logo?: string;
        initials: string;
        accent: string;
        accentSoft: string;
        accentDeep: string;
        preview: 'desktop' | 'mobile';
        screenshot?: string;
        needsDarkLogoMat?: boolean;
        links: Array<{
            label: string;
            href: string;
            icon?: string;
        }>;
    }
> = {
    'experience-amazon-audible': {
        logo: audibleLogo,
        screenshot: audibleHomepage,
        initials: 'AA',
        accent: '#22d3ee',
        accentSoft: '#a78bfa',
        accentDeep: '#052a37',
        preview: 'desktop',
        needsDarkLogoMat: true,
        links: [{ label: 'Audible', href: 'https://www.audible.com' }],
    },
    'experience-visa-tcs': {
        logo: visaLogo,
        screenshot: visaHomepage,
        initials: 'VT',
        accent: '#34d399',
        accentSoft: '#f59e0b',
        accentDeep: '#08291f',
        preview: 'desktop',
        links: [{ label: 'Visa', href: 'https://www.visa.com/en-us' }],
    },
    'experience-google-alphabet': {
        logo: googleLogo,
        screenshot: googleHomepage,
        initials: 'GA',
        accent: '#60a5fa',
        accentSoft: '#f472b6',
        accentDeep: '#091f3a',
        preview: 'desktop',
        links: [{ label: 'Google', href: 'https://about.google' }],
    },
    'experience-usaa': {
        logo: usaaLogo,
        screenshot: usaaHomepage,
        initials: 'US',
        accent: '#38bdf8',
        accentSoft: '#818cf8',
        accentDeep: '#08283a',
        preview: 'desktop',
        links: [{ label: 'USAA', href: 'https://www.usaa.com/' }],
    },
    'experience-imagine-learning': {
        logo: imagineLearningLogo,
        screenshot: imagineLearningHomepage,
        initials: 'IL',
        accent: '#facc15',
        accentSoft: '#2dd4bf',
        accentDeep: '#332708',
        preview: 'desktop',
        needsDarkLogoMat: true,
        links: [
            {
                label: 'Imagine Learning',
                href: 'https://www.imaginelearning.com',
            },
        ],
    },
    'experience-cyberpuerta': {
        logo: cyberpuertaLogo,
        screenshot: cyberpuertaHomescreen,
        initials: 'CP',
        accent: '#fb7185',
        accentSoft: '#818cf8',
        accentDeep: '#35101b',
        preview: 'mobile',
        needsDarkLogoMat: true,
        links: [
            {
                label: 'App Store',
                href: 'https://apps.apple.com/mx/app/cyberpuerta/id1636030641',
                icon: '',
            },
            {
                label: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.cyberpuerta&hl=es_MX&pli=1',
                icon: '🤖',
            },
        ],
    },
};

export function WorkWindows() {
    const [activeId, setActiveId] = useState<string | null>(
        experiences[0]?.id ?? null,
    );
    const [glitchingIds, setGlitchingIds] = useState<Set<string>>(new Set());
    const [minimizedIds, setMinimizedIds] = useState<Set<string>>(new Set());
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

    const toggleId = (
        id: string,
        setIds: Dispatch<SetStateAction<Set<string>>>,
    ) => {
        setIds((currentIds) => {
            const nextIds = new Set(currentIds);

            if (nextIds.has(id)) {
                nextIds.delete(id);
            } else {
                nextIds.add(id);
            }

            return nextIds;
        });
    };

    const handleClose = (id: string) => {
        setGlitchingIds((currentIds) => new Set(currentIds).add(id));
        window.setTimeout(() => {
            setGlitchingIds((currentIds) => {
                const nextIds = new Set(currentIds);
                nextIds.delete(id);
                return nextIds;
            });
        }, 400);
    };

    const restoreMinimizedWindow = (id: string) => {
        setMinimizedIds((currentIds) => {
            const nextIds = new Set(currentIds);
            nextIds.delete(id);
            return nextIds;
        });
        setActiveId(id);
    };

    return (
        <section id='work' className='work-section'>
            <div className='work-section__container'>
                <div className='work-section__intro'>
                    <p className='work-section__eyebrow'>Work</p>
                </div>

                <div className='work-section__grid'>
                    {experiences.map((experience) => {
                        const isActive = activeId === experience.id;
                        const isGlitching = glitchingIds.has(experience.id);
                        const isMinimized = minimizedIds.has(experience.id);
                        const isExpanded = expandedIds.has(experience.id);
                        const assets = experienceAssets[experience.id];
                        const windowStyle = {
                            '--window-accent': assets.accent,
                            '--window-accent-soft': assets.accentSoft,
                            '--window-accent-deep': assets.accentDeep,
                        } as CSSProperties;

                        return (
                            <article
                                key={experience.id}
                                id={experience.id}
                                className={`work-window ${isActive ? 'work-window--active' : ''} ${isGlitching ? 'work-window--glitch' : ''} ${isMinimized ? 'work-window--minimized' : ''} ${isExpanded ? 'work-window--expanded' : ''} ${assets.needsDarkLogoMat ? 'work-window--dark-logo-mat' : ''}`}
                                style={windowStyle}
                                role={isMinimized ? 'button' : undefined}
                                tabIndex={isMinimized ? 0 : undefined}
                                aria-label={
                                    isMinimized
                                        ? `Restore ${experience.company} window`
                                        : undefined
                                }
                                onClick={() => {
                                    if (isMinimized) {
                                        restoreMinimizedWindow(experience.id);
                                    }
                                }}
                                onKeyDown={(event) => {
                                    if (
                                        isMinimized &&
                                        (event.key === 'Enter' ||
                                            event.key === ' ')
                                    ) {
                                        event.preventDefault();
                                        restoreMinimizedWindow(experience.id);
                                    }
                                }}
                            >
                                <div className='work-window__bar'>
                                    <div className='work-window__dots'>
                                        <button
                                            className='work-window__dot work-window__dot--red'
                                            type='button'
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                handleClose(experience.id);
                                            }}
                                            aria-label={`Close ${experience.company} window`}
                                        >
                                            <span className='work-window__dot-tooltip'>
                                                Close
                                            </span>
                                        </button>
                                        <button
                                            className='work-window__dot work-window__dot--yellow'
                                            type='button'
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                toggleId(
                                                    experience.id,
                                                    setMinimizedIds,
                                                );
                                            }}
                                            aria-label={`${isMinimized ? 'Restore' : 'Minimize'} ${experience.company} window`}
                                        >
                                            <span className='work-window__dot-tooltip'>
                                                {isMinimized
                                                    ? 'Restore'
                                                    : 'Minimize'}
                                            </span>
                                        </button>
                                        <button
                                            className='work-window__dot work-window__dot--green'
                                            type='button'
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                toggleId(
                                                    experience.id,
                                                    setExpandedIds,
                                                );
                                            }}
                                            aria-label={`${isExpanded ? 'Shrink' : 'Expand'} ${experience.company} window`}
                                        >
                                            <span className='work-window__dot-tooltip'>
                                                {isExpanded
                                                    ? 'Shrink'
                                                    : 'Expand'}
                                            </span>
                                        </button>
                                    </div>
                                    <div className='work-window__path'>
                                        {experience.company.toLowerCase()}
                                    </div>
                                </div>

                                <button
                                    className='work-window__body work-window__summary'
                                    type='button'
                                    aria-expanded={isActive}
                                    aria-controls={`${experience.id}-details`}
                                    disabled={isMinimized}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        setActiveId(
                                            isActive ? null : experience.id,
                                        );
                                    }}
                                >
                                    <div className='work-window__heading-row'>
                                        <div className='work-window__meta'>
                                            <span className='work-window__date'>
                                                {experience.dateRange}
                                            </span>
                                            <span className='work-window__open-cue'>
                                                {isActive
                                                    ? 'Details open'
                                                    : 'Open details'}
                                            </span>
                                        </div>
                                        <div className='work-window__title'>
                                            <span className='work-window__title-logo-frame'>
                                                {assets.logo ? (
                                                    <img
                                                        className='work-window__title-logo'
                                                        src={assets.logo}
                                                        alt=''
                                                        aria-hidden='true'
                                                    />
                                                ) : (
                                                    <span
                                                        className='work-window__title-logo-fallback'
                                                        aria-hidden='true'
                                                    >
                                                        {assets.initials}
                                                    </span>
                                                )}
                                            </span>
                                            {experience.company}
                                        </div>
                                    </div>
                                    <span className='work-window__visual'>
                                        <span
                                            className='work-window__visual-scan'
                                            aria-hidden='true'
                                        />
                                        <span
                                            className={`work-window__preview work-window__preview--${assets.preview}`}
                                            aria-label={`${experience.company} ${assets.preview} product preview`}
                                        >
                                            {assets.screenshot ? (
                                                <img
                                                    className='work-window__preview-image'
                                                    src={assets.screenshot}
                                                    alt={`${experience.company} ${assets.preview === 'mobile' ? 'mobile app' : 'website'} preview`}
                                                />
                                            ) : (
                                                <>
                                                    <span className='work-window__preview-bar'>
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </span>
                                                    <span className='work-window__preview-content'>
                                                        <span className='work-window__preview-row work-window__preview-row--wide' />
                                                        <span className='work-window__preview-row' />
                                                        <span className='work-window__preview-grid'>
                                                            <span />
                                                            <span />
                                                            <span />
                                                            <span />
                                                        </span>
                                                        <span className='work-window__preview-cta' />
                                                    </span>
                                                </>
                                            )}
                                        </span>
                                    </span>
                                </button>

                                <div
                                    id={`${experience.id}-details`}
                                    className='work-window__details'
                                    hidden={!isActive || isMinimized}
                                >
                                    <p className='work-window__date-detail'>
                                        {experience.dateRange}
                                    </p>
                                    <p className='work-window__context'>
                                        {experience.context}
                                    </p>
                                    <p className='work-window__summary-text'>
                                        {experience.roleSummary}
                                    </p>

                                    <ul className='work-window__highlights'>
                                        {experience.highlights.map(
                                            (highlight) => (
                                                <li key={highlight}>
                                                    {highlight}
                                                </li>
                                            ),
                                        )}
                                    </ul>

                                    <div className='work-window__stack'>
                                        {experience.stack.map((item) => (
                                            <span
                                                key={item}
                                                className='work-window__stack-item'
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <div className='work-window__links'>
                                        {assets.links.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                className='work-window__link'
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                {link.icon ? (
                                                    <span
                                                        className='work-window__link-icon'
                                                        aria-hidden='true'
                                                    >
                                                        {link.icon}
                                                    </span>
                                                ) : null}
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>

                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
