/// <reference types="react" />
export interface ModalProps {
    children: React.ReactNode;
    title?: string;
}
export interface ModalHeaderProps {
    children?: React.ReactNode;
    close: () => void;
}
export interface ModalBodyProps {
    children: React.ReactNode;
}
export interface ModalFooterProps {
    children: React.ReactNode;
}
export interface ModalElement extends React.HTMLAttributes<HTMLDivElement> {
    open: () => void;
    close: () => void;
}
export declare const classes: {
    modal: string;
    header: string;
    body: string;
    footer: string;
    overlay: string;
};
