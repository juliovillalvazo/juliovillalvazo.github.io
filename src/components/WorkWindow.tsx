import type { KeyboardEvent } from 'react';
import type { ExperienceItem } from '../data/content';
import type { ExperienceAssets } from '../utils/experienceAssets';
import { getWorkWindowClassName, getWorkWindowStyle } from '../utils/workWindow';

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

type WindowActionButtonProps = {
    tone: 'red' | 'yellow' | 'green';
    label: string;
    tooltip: string;
    onClick: () => void;
};

function WindowActionButton({
    tone,
    label,
    tooltip,
    onClick,
}: WindowActionButtonProps) {
    return (
        <button
            className={`work-window__dot work-window__dot--${tone}`}
            type='button'
            onClick={(event) => {
                event.stopPropagation();
                onClick();
            }}
            aria-label={label}
        >
            <span className='work-window__dot-tooltip'>{tooltip}</span>
        </button>
    );
}

type AssetProps = {
    assets: ExperienceAssets;
};

function CompanyLogo({ assets }: AssetProps) {
    return (
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
    );
}

type ExperienceAssetProps = {
    experience: ExperienceItem;
    assets: ExperienceAssets;
};

function WorkWindowPreview({ experience, assets }: ExperienceAssetProps) {
    return (
        <span className='work-window__visual'>
            <span className='work-window__visual-scan' aria-hidden='true' />
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
                    <PlaceholderPreview />
                )}
            </span>
        </span>
    );
}

function PlaceholderPreview() {
    return (
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
    );
}

type WorkWindowDetailsProps = ExperienceAssetProps & {
    isActive: boolean;
    isMinimized: boolean;
};

function WorkWindowDetails({
    experience,
    assets,
    isActive,
    isMinimized,
}: WorkWindowDetailsProps) {
    return (
        <div
            id={`${experience.id}-details`}
            className='work-window__details'
            hidden={!isActive || isMinimized}
        >
            <p className='work-window__date-detail'>{experience.dateRange}</p>
            <p className='work-window__context'>{experience.context}</p>
            <p className='work-window__summary-text'>
                {experience.roleSummary}
            </p>

            <ul className='work-window__highlights'>
                {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>

            <div className='work-window__stack'>
                {experience.stack.map((item) => (
                    <span key={item} className='work-window__stack-item'>
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
    );
}
