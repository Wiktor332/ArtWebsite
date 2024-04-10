export type NavItem_Men = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    children?: NavItem_Men[];
};

export type MenuItemWithMenuProps = {
    item: NavItem_Men;
    toggleOpen: () => void;
};