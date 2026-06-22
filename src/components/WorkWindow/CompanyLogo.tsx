import type { WorkWindowAssetProps } from './types';

export function CompanyLogo({ assets }: WorkWindowAssetProps) {
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
