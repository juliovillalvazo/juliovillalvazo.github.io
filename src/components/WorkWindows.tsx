import { useState, type Dispatch, type SetStateAction } from 'react';
import { experiences } from '../data/content';
import { experienceAssets } from '../utils/experienceAssets';
import { WorkWindow } from './WorkWindow';
import './WorkWindows.css';

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
                    {experiences.map((experience) => (
                        <WorkWindow
                            key={experience.id}
                            experience={experience}
                            assets={experienceAssets[experience.id]}
                            isActive={activeId === experience.id}
                            isGlitching={glitchingIds.has(experience.id)}
                            isMinimized={minimizedIds.has(experience.id)}
                            isExpanded={expandedIds.has(experience.id)}
                            onClose={() => handleClose(experience.id)}
                            onMinimize={() =>
                                toggleId(experience.id, setMinimizedIds)
                            }
                            onExpand={() =>
                                toggleId(experience.id, setExpandedIds)
                            }
                            onRestore={() =>
                                restoreMinimizedWindow(experience.id)
                            }
                            onToggleDetails={() =>
                                setActiveId((currentId) =>
                                    currentId === experience.id
                                        ? null
                                        : experience.id,
                                )
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
