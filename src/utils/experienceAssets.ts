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

export type ExperienceLink = {
    label: string;
    href: string;
    icon?: string;
};

export type ExperienceAssets = {
    logo?: string;
    initials: string;
    accent: string;
    accentSoft: string;
    accentDeep: string;
    preview: 'desktop' | 'mobile';
    screenshot?: string;
    needsDarkLogoMat?: boolean;
    links: ExperienceLink[];
};

export const experienceAssets: Record<string, ExperienceAssets> = {
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
