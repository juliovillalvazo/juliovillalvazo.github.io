import { useState, type Dispatch, type SetStateAction } from 'react';
import { experiences } from '../data/content';
import './WorkWindows.css';

const visualClassNames = [
    'work-window__visual--audio',
    'work-window__visual--signals',
    'work-window__visual--cloud',
    'work-window__visual--platform',
    'work-window__visual--education',
    'work-window__visual--mobile',
];

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

    return (
        <section id='work' className='work-section'>
            <div className='work-section__container'>
                <div className='work-section__intro'>
                    <p className='work-section__eyebrow'>Work</p>
                </div>

                <div className='work-section__grid'>
                    {experiences.map((experience, index) => {
                        const isActive = activeId === experience.id;
                        const isGlitching = glitchingIds.has(experience.id);
                        const isMinimized = minimizedIds.has(experience.id);
                        const isExpanded = expandedIds.has(experience.id);

                        return (
                            <article
                                key={experience.id}
                                id={experience.id}
                                className={`work-window ${isActive ? 'work-window--active' : ''} ${isGlitching ? 'work-window--glitch' : ''} ${isMinimized ? 'work-window--minimized' : ''} ${isExpanded ? 'work-window--expanded' : ''}`}
                            >
                                <div className='work-window__bar'>
                                    <div className='work-window__dots'>
                                        <button
                                            className='work-window__dot work-window__dot--red'
                                            type='button'
                                            onClick={() =>
                                                handleClose(experience.id)
                                            }
                                            aria-label={`Close ${experience.company} window`}
                                        >
                                            <span className='work-window__dot-tooltip'>
                                                Close
                                            </span>
                                        </button>
                                        <button
                                            className='work-window__dot work-window__dot--yellow'
                                            type='button'
                                            onClick={() =>
                                                toggleId(
                                                    experience.id,
                                                    setMinimizedIds,
                                                )
                                            }
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
                                            onClick={() =>
                                                toggleId(
                                                    experience.id,
                                                    setExpandedIds,
                                                )
                                            }
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
                                        {experience.company.toLowerCase()}.work
                                    </div>
                                </div>

                                <button
                                    className='work-window__summary'
                                    type='button'
                                    aria-expanded={isActive}
                                    aria-controls={`${experience.id}-details`}
                                    disabled={isMinimized}
                                    onClick={() =>
                                        setActiveId(
                                            isActive ? null : experience.id,
                                        )
                                    }
                                >
                                    <span className='work-window__body'>
                                        <span className='work-window__title'>
                                            {experience.company}
                                        </span>
                                        <span
                                            className={`work-window__visual ${visualClassNames[index % visualClassNames.length]}`}
                                            aria-label={`${experience.company} work preview`}
                                            role='img'
                                        >
                                            <span className='work-window__visual-grid' />
                                            <span className='work-window__visual-orbit' />
                                            <span className='work-window__visual-panel' />
                                            <span className='work-window__visual-line work-window__visual-line--one' />
                                            <span className='work-window__visual-line work-window__visual-line--two' />
                                            <span className='work-window__visual-label'>
                                                {experience.visualLabels[0]}
                                            </span>
                                        </span>
                                    </span>
                                </button>

                                <div
                                    id={`${experience.id}-details`}
                                    className='work-window__details'
                                    hidden={!isActive || isMinimized}
                                >
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

                                    <a
                                        href={experience.website}
                                        className='work-window__link'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Visit company site
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
