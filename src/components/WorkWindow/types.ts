import type { ExperienceItem } from '../../data/content';
import type { ExperienceAssets } from '../../utils/experienceAssets';

export type WorkWindowAssetProps = {
    assets: ExperienceAssets;
};

export type WorkWindowExperienceAssetProps = WorkWindowAssetProps & {
    experience: ExperienceItem;
};
