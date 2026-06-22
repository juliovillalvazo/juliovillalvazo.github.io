import type { KeyboardEvent } from 'react';
import type { ExperienceItem } from '../../data/content';
import type { ExperienceAssets } from '../../utils/experienceAssets';
import {
    getWorkWindowClassName,
    getWorkWindowStyle,
} from '../../utils/workWindow';
import { CompanyLogo } from './CompanyLogo';
import { HeadphonesTabIcon } from './HeadphonesTabIcon';
import { WindowActionButton } from './WindowActionButton';
import { WorkWindowDetails } from './WorkWindowDetails';
import { WorkWindowPreview } from './WorkWindowPreview';

type WorkWindowProps = {
    experience: ExperienceItem;
    assets: ExperienceAssets;
    isActive: boolean;
    isGlitching: boolean;
    isMinimized: boolean;
    isExpanded: boolean;
    onClose: () => void;
    onMinimize: () => void;
    onExpand: () => void;
    onRestore: () => void;
    onToggleDetails: () => void;
};

export function WorkWindow({
    experience,
    assets,
    isActive,
    isGlitching,
    isMinimized,
    isExpanded,
    onClose,
    onMinimize,
    onExpand,
    onRestore,
    onToggleDetails,
}: WorkWindowProps) {
    const handleRestoreKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (!isMinimized || (event.key !== 'Enter' && event.key !== ' ')) {
            return;
        }

        event.preventDefault();
        onRestore();
    };

    return (
        <article
            id={experience.id}
            className={getWorkWindowClassName(
                {
                    isActive,
                    isGlitching,
                    isMinimized,
                    isExpanded,
                },
                assets,
            )}
            style={getWorkWindowStyle(assets)}
            role={isMinimized ? 'button' : undefined}
            tabIndex={isMinimized ? 0 : undefined}
            aria-label={
                isMinimized
                    ? `Restore ${experience.company} window`
                    : undefined
            }
            onClick={() => {
                if (isMinimized) {
                    onRestore();
                }
            }}
            onKeyDown={handleRestoreKeyDown}
        >
            <div className='work-window__bar'>
                <div className='work-window__dots'>
                    <WindowActionButton
                        tone='red'
                        label={`Close ${experience.company} window`}
                        tooltip='Close'
                        onClick={onClose}
                    />
                    <WindowActionButton
                        tone='yellow'
                        label={`${isMinimized ? 'Restore' : 'Minimize'} ${experience.company} window`}
                        tooltip={isMinimized ? 'Restore' : 'Minimize'}
                        onClick={onMinimize}
                    />
                    <WindowActionButton
                        tone='green'
                        label={`${isExpanded ? 'Shrink' : 'Expand'} ${experience.company} window`}
                        tooltip={isExpanded ? 'Shrink' : 'Expand'}
                        onClick={onExpand}
                    />
                </div>
                <div className='work-window__path'>
                    <HeadphonesTabIcon />
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
                    onToggleDetails();
                }}
            >
                <div className='work-window__heading-row'>
                    <div className='work-window__meta'>
                        <span className='work-window__date'>
                            {experience.dateRange}
                        </span>
                        <span className='work-window__open-cue'>
                            {isActive ? 'Details open' : 'Open details'}
                        </span>
                    </div>
                    <div className='work-window__title'>
                        <CompanyLogo assets={assets} />
                        {experience.company}
                    </div>
                </div>

                <WorkWindowPreview experience={experience} assets={assets} />
            </button>

            <WorkWindowDetails
                experience={experience}
                assets={assets}
                isActive={isActive}
                isMinimized={isMinimized}
            />
        </article>
    );
}
