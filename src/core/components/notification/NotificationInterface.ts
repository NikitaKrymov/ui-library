export interface NotificationProps {
    children: React.ReactNode,
    title?: string
};

export interface NotificationElement extends React.HTMLAttributes<HTMLDivElement>{
    open: () => void,
    close: () => void
}
export const classes = {
    notification: "nk__notification",
    header: "nk__notification__header",
    content: "nk__notification__content",
};