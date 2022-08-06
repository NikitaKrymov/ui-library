/// <reference types="react" />
export interface NotificationProps {
    children: React.ReactNode;
    title?: string;
}
export interface NotificationElement extends React.HTMLAttributes<HTMLDivElement> {
    open: () => void;
    close: () => void;
}
export declare const classes: {
    notification: string;
    header: string;
    content: string;
};
