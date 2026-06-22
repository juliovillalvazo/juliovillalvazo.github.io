export type NavItem = {
    label: string;
    href: string;
    external?: boolean;
};

export const navItems: NavItem[] = [
    { label: 'Work', href: '#work' },
    { label: 'Contact info', href: '#contact-info' },
    {
        label: 'GitHub',
        href: 'https://github.com/juliovillalvazo',
        external: true,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/juliovillalvazo',
        external: true,
    },
];
