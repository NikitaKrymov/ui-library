export interface ModalProps {
    children: React.ReactNode,
    title?: string
}

export interface ModalHeaderProps {
    children?: React.ReactNode,
    close: () => void
}

export interface ModalBodyProps {
    children: React.ReactNode
}

export interface ModalFooterProps {
    children: React.ReactNode
}

export interface ModalElement extends React.HTMLAttributes<HTMLDivElement> {
    open: () => void,
    close: () => void
}

export const classes = {
    modal: "nk__modal",
    header: "nk__modal__header",
    body: "nk__modal__body",
    footer: "nk__modal__footer",
    overlay: "nk__modal__overlay"
}