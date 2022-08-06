export interface FormProps {
    children: React.ReactNode
}

export interface FormSectionProps {
    children: React.ReactNode,
    title: string
}

export interface FormRowProps {
    children: React.ReactNode
}

export const classes = {
    form: "nk__form",
    section: "nk__form__section",
    row: "nk__form__row",
    sectionTitle: "nk__form__section__title",
    invalidElement: "nk__form-element--invalid"
}