import type { WorkWindowExperienceAssetProps } from './types';

type WorkWindowDetailsProps = WorkWindowExperienceAssetProps & {
    isActive: boolean;
    isMinimized: boolean;
};

export function WorkWindowDetails({
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
