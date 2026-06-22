import { PlaceholderPreview } from './PlaceholderPreview';
import type { WorkWindowExperienceAssetProps } from './types';

export function WorkWindowPreview({
    experience,
    assets,
}: WorkWindowExperienceAssetProps) {
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
