import type { CSSProperties } from 'react';
import { classNames } from './classNames';
import type { ExperienceAssets } from './experienceAssets';

type WorkWindowState = {
    isActive: boolean;
    isGlitching: boolean;
    isMinimized: boolean;
    isExpanded: boolean;
};

export function getWorkWindowClassName(
    state: WorkWindowState,
    assets: ExperienceAssets,
) {
    return classNames(
        'work-window',
        state.isActive && 'work-window--active',
        state.isGlitching && 'work-window--glitch',
        state.isMinimized && 'work-window--minimized',
        state.isExpanded && 'work-window--expanded',
        assets.needsDarkLogoMat && 'work-window--dark-logo-mat',
    );
}

export function getWorkWindowStyle(assets: ExperienceAssets) {
    return {
        '--window-accent': assets.accent,
        '--window-accent-soft': assets.accentSoft,
        '--window-accent-deep': assets.accentDeep,
    } as CSSProperties;
}
