export type AppLink = {
    href: string;
    name: string;
    image?: string;
    active: boolean;
};
export type NavLink = {
    label: string;
    onClick: () => void;
    active: boolean;
};
export type AppsBarProps = {
    apps: AppLink[];
    navLinks?: NavLink[];
};
export declare const AppsBar: (props: AppsBarProps) => import("react/jsx-runtime").JSX.Element;
