/// <reference types="react" />
export interface FormProps {
    children: React.ReactNode;
}
export interface FormSectionProps {
    children: React.ReactNode;
    title: string;
}
export interface FormRowProps {
    children: React.ReactNode;
}
export declare const classes: {
    form: string;
    section: string;
    row: string;
    sectionTitle: string;
    invalidElement: string;
};
