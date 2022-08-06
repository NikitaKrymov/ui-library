/// <reference types="react" />
import React$1 from 'react';

declare const SMALL = "sm";
declare const MEDIUM = "md";
declare const LARGE = "lg";
declare type Sizes = typeof SMALL | typeof MEDIUM | typeof LARGE;

declare const blueTheme = "blue";
declare const purpleTheme = "purple";
declare const greenTheme = "green";
declare type Theme = typeof blueTheme | typeof purpleTheme | typeof greenTheme;

declare const SECONDARY = "secondary";
declare const PRIMARY = "primary";
declare type Variants = typeof SECONDARY | typeof PRIMARY;

interface ButtonProps {
    variant?: Variants;
    size?: Sizes;
    onClick?: () => void;
    theme?: Theme;
    children: React.ReactNode;
    inactive?: boolean;
    type?: "button" | "submit";
}

declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const LEFT = "left";
declare const TOP = "top";
declare const RIGHT = "right";
declare const BOTTOM = "bottom";
declare type Positions = typeof LEFT | typeof TOP | typeof RIGHT | typeof BOTTOM;
declare type VerticalPositions = typeof TOP | typeof BOTTOM;

interface ActionMenuProps {
    position: Positions;
    children: React.ReactNode;
}
interface ActionMenuElement extends React.HTMLAttributes<HTMLDivElement> {
    open: () => void;
    close: () => void;
    toggle: () => void;
}

declare const ActionMenu: React$1.ForwardRefExoticComponent<ActionMenuProps & React$1.RefAttributes<ActionMenuElement>>;

interface AccordionProps {
    children: React.ReactNode;
    title?: string;
}

declare const Accordion: React$1.ForwardRefExoticComponent<AccordionProps & React$1.RefAttributes<HTMLButtonElement>>;

interface BadgeProps {
    children?: React.ReactNode;
    variant?: Variants;
    theme?: Theme;
    size?: Sizes;
}

declare const Badge: React$1.ForwardRefExoticComponent<BadgeProps & React$1.RefAttributes<HTMLDivElement>>;

interface BannerProps {
    children: React.ReactNode;
    position?: VerticalPositions;
    theme?: Theme;
    variant?: Variants;
}
interface BannerActionProps {
    children: React.ReactNode;
}

declare const Banner: React$1.ForwardRefExoticComponent<BannerProps & React$1.RefAttributes<HTMLDivElement>>;

declare const BannerAction: React$1.ForwardRefExoticComponent<BannerActionProps & React$1.RefAttributes<HTMLDivElement>>;

declare const START$1 = "start";
declare const CENTER$1 = "center";
declare const END$1 = "end";
declare const SB = "sb";
declare const SE = "se";
declare type Content = typeof START$1 | typeof CENTER$1 | typeof END$1 | typeof SB | typeof SE;

interface BarProps {
    children?: React.ReactNode;
    theme?: Theme;
    position?: VerticalPositions;
    content?: Content;
    fixed?: boolean;
}

declare const Bar: React$1.ForwardRefExoticComponent<BarProps & React$1.RefAttributes<HTMLDivElement>>;

declare const HORIZONTAL = "horizontal";
declare const VERTICAL = "vertical";
declare type Layouts = typeof HORIZONTAL | typeof VERTICAL;

interface CheckboxProps {
    name?: string;
    value?: string;
    id?: string;
    children?: React.ReactNode;
    theme?: Theme;
    size?: Sizes;
    inactive?: boolean;
    checked?: boolean;
}
interface CheckboxGroupProps {
    children: React.ReactNode;
    title?: string;
    theme?: Theme;
    size?: Sizes;
    name?: string;
    layout?: Layouts;
}

declare const Checkbox: React$1.ForwardRefExoticComponent<CheckboxProps & React$1.RefAttributes<HTMLInputElement>>;

interface CalendarProps {
    theme?: Theme;
    yearStart?: 2010;
    yearEnd?: 2030;
}

declare const Calendar: React$1.ForwardRefExoticComponent<CalendarProps & React$1.RefAttributes<HTMLElement>>;

declare const CheckboxGroup: React$1.ForwardRefExoticComponent<CheckboxGroupProps & React$1.RefAttributes<HTMLFieldSetElement>>;

interface ClockProps {
    size?: Sizes;
    variant?: Variants;
    theme?: Theme;
}

declare const Clock: React$1.ForwardRefExoticComponent<ClockProps & React$1.RefAttributes<HTMLDivElement>>;

interface DividerProps {
    layout: Layouts;
}

declare const Divider: React$1.FC<DividerProps>;

interface CardProps {
    children?: React.ReactNode;
    layout?: Layouts;
    theme?: Theme;
    variant?: Variants;
}
interface CardTitleProps {
    children: React.ReactNode;
}
interface FlipCardProps {
    children: React.ReactNode;
}
interface CardFrontProps {
    children: React.ReactNode;
}

declare const Card: React$1.ForwardRefExoticComponent<CardProps & React$1.RefAttributes<HTMLDivElement>>;

declare const FlipCard: React$1.ForwardRefExoticComponent<FlipCardProps & React$1.RefAttributes<HTMLDivElement>>;

declare const BackCard: React$1.ForwardRefExoticComponent<CardFrontProps & React$1.RefAttributes<HTMLDivElement>>;

declare const FrontCard: React$1.ForwardRefExoticComponent<CardFrontProps & React$1.RefAttributes<HTMLDivElement>>;

declare const CardTitle: React$1.ForwardRefExoticComponent<CardTitleProps & React$1.RefAttributes<HTMLHeadingElement>>;

declare const CardText: React$1.ForwardRefExoticComponent<CardTitleProps & React$1.RefAttributes<HTMLHeadingElement>>;

interface CarouselProps {
    children: React.ReactNode;
    layout?: Layouts;
    theme?: Theme;
}
interface CarouselItemProps {
    children: React.ReactNode;
    id?: string;
}

declare const Carousel: React$1.ForwardRefExoticComponent<CarouselProps & React$1.RefAttributes<HTMLDivElement>>;

declare const CarouselItem: React$1.ForwardRefExoticComponent<CarouselItemProps & React$1.RefAttributes<HTMLDivElement>>;

interface DropdownProps {
    label: string;
    children: React.ReactNode;
    size?: Sizes;
    theme?: Theme;
    variant?: Variants;
}
interface DropdownItemProps {
    onClick?: any;
    children: React.ReactNode;
}

declare const Dropdown: React$1.ForwardRefExoticComponent<DropdownProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const DropdownItem: React$1.ForwardRefExoticComponent<DropdownItemProps & React$1.RefAttributes<HTMLButtonElement>>;

interface FormProps {
    children: React.ReactNode;
}
interface FormSectionProps {
    children: React.ReactNode;
    title: string;
}
interface FormRowProps {
    children: React.ReactNode;
}

declare const Form: React$1.ForwardRefExoticComponent<FormProps & React$1.RefAttributes<HTMLFormElement>>;

declare const FormRow: React$1.FC<FormRowProps>;

declare const FormSection: React$1.FC<FormSectionProps>;

interface InputProps {
    type?: "text" | "number";
    label?: string;
    helperText?: string;
    errorText?: string;
    size?: Sizes;
    inactive?: boolean;
    placeholder?: string;
    value?: string;
    theme?: Theme;
    name?: string;
    id?: string;
    mask?: string;
    maskCharacter?: string;
    required?: boolean;
}

declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

declare const SETTINGS_BOLD = "settingsBold";
declare const SETTINGS_THIN = "settingsThin";
declare const COMPONENT = "component";
declare const PLUS = "plus";
declare const MINUS = "minus";
declare const ARROW_DOWN = "arrowDown";
declare const ARROW_UP = "arrowUp";
declare const CLOSE = "close";
declare const SHOW = "show";
declare const HIDE = "hide";
declare const DESKTOP = "desktop";
declare const TABLET = "tablet";
declare const MOBILE = "mobile";
declare const CLOCK = "clock";
declare const CALENDAR = "calendar";
declare const DONE = "done";
declare type Icons = typeof SETTINGS_BOLD | typeof SETTINGS_THIN | typeof COMPONENT | typeof PLUS | typeof MINUS | typeof ARROW_DOWN | typeof ARROW_UP | typeof CLOSE | typeof SHOW | typeof HIDE | typeof MOBILE | typeof DESKTOP | typeof TABLET | typeof CLOCK | typeof CALENDAR | typeof DONE;

interface IconProps {
    theme?: Theme;
    icon: Icons;
    onClick?: any;
    tabIndex?: number;
}

declare const Icon: React$1.ForwardRefExoticComponent<IconProps & React$1.RefAttributes<HTMLElement>>;

interface ListProps {
    variant?: "ol" | "ul";
    children: React.ReactNode;
    title?: string;
}

declare const List: React$1.FC<ListProps>;

interface LoadingIndicatorProps {
    theme?: Theme;
}

declare const LoadingIndicator: React$1.FC<LoadingIndicatorProps>;

interface ModalProps {
    children: React.ReactNode;
    title?: string;
}
interface ModalHeaderProps {
    children?: React.ReactNode;
    close: () => void;
}
interface ModalBodyProps {
    children: React.ReactNode;
}
interface ModalFooterProps {
    children: React.ReactNode;
}
interface ModalElement extends React.HTMLAttributes<HTMLDivElement> {
    open: () => void;
    close: () => void;
}

declare const Modal: React$1.ForwardRefExoticComponent<ModalProps & React$1.RefAttributes<ModalElement>>;

declare const ModalHeader: React$1.ForwardRefExoticComponent<ModalHeaderProps & React$1.RefAttributes<HTMLDivElement>>;

declare const ModalFooter: React$1.ForwardRefExoticComponent<ModalFooterProps & React$1.RefAttributes<HTMLDivElement>>;

declare const ModalBody: React$1.ForwardRefExoticComponent<ModalBodyProps & React$1.RefAttributes<HTMLDivElement>>;

interface NotificationProps {
    children: React.ReactNode;
    title?: string;
}
interface NotificationElement extends React.HTMLAttributes<HTMLDivElement> {
    open: () => void;
    close: () => void;
}

declare const Notification: React$1.ForwardRefExoticComponent<NotificationProps & React$1.RefAttributes<NotificationElement>>;

interface InputPasswordProps {
    inactive?: boolean;
    label?: string;
    helperText?: string;
    errorText?: string;
    size?: Sizes;
    placeholder?: string;
    theme?: Theme;
    name?: string;
    id?: string;
    buttonTitle?: string;
    srShowTitle?: string;
    srHideTitle?: string;
}

declare const InputPassword: React$1.ForwardRefExoticComponent<InputPasswordProps & React$1.RefAttributes<HTMLInputElement>>;

declare const START = "start";
declare const CENTER = "center";
declare const END = "end";
declare type Aligns = typeof START | typeof CENTER | typeof END;

interface ProgressTrackerProps {
    children: React.ReactNode;
    layout?: Layouts;
    align?: Aligns;
    theme?: Theme;
}
interface ProgressStepProps {
    children?: React.ReactNode;
    onClick?: () => void;
    index?: number;
    activateStep?: (index: number) => void;
    currentStep?: number;
    status?: ProgressStepStatus;
    title?: string;
}
declare const REST = "rest";
declare const CURRENT = "current";
declare const COMPLETED = "completed";
declare const INACTIVE = "inactive";
declare const INVALID = "invalid";
declare type ProgressStepStatus = typeof REST | typeof CURRENT | typeof COMPLETED | typeof INACTIVE | typeof INVALID;

declare const ProgressTracker: React$1.ForwardRefExoticComponent<ProgressTrackerProps & React$1.RefAttributes<any>>;

declare const ProgressStep: React$1.ForwardRefExoticComponent<ProgressStepProps & React$1.RefAttributes<HTMLLIElement>>;

interface RadioButtonFieldsetProps {
    children: React.ReactNode;
    size?: Sizes;
    title?: string;
    layout?: Layouts;
    theme?: Theme;
}
interface RadioButtonProps {
    children?: React.ReactNode;
    name: string;
    id: string;
    value: string;
    inactive?: boolean;
}

declare const RadioButton: React$1.ForwardRefExoticComponent<RadioButtonProps & React$1.RefAttributes<HTMLInputElement>>;

declare const RadioButtonFieldset: React$1.ForwardRefExoticComponent<RadioButtonFieldsetProps & React$1.RefAttributes<HTMLFieldSetElement>>;

interface SectionSelectorInterface {
    theme?: Theme;
    children?: React.ReactNode;
}
interface SectionInterface {
    children?: React.ReactNode;
    title: string;
}

declare const SectionSelector: React$1.ForwardRefExoticComponent<SectionSelectorInterface & React$1.RefAttributes<HTMLDivElement>>;

declare const Section: React$1.FC<SectionInterface>;

interface SelectProps {
    children?: React.ReactNode;
    size?: Sizes;
    variant?: Variants;
    theme?: Theme;
    onChange?: any;
    label?: string;
    id?: string;
    name?: string;
    helperText?: string;
    errorText?: string;
}
interface SelectOptionProps {
    children?: React.ReactNode;
}
interface SelectOptionGroupProps {
    children?: React.ReactNode;
}

declare const Select: React$1.ForwardRefExoticComponent<SelectProps & React$1.RefAttributes<HTMLSelectElement>>;

declare const SelectOption: React$1.ForwardRefExoticComponent<SelectOptionProps & React$1.RefAttributes<HTMLOptionElement>>;

declare const SelectOptionGroup: React$1.ForwardRefExoticComponent<SelectOptionGroupProps & React$1.RefAttributes<HTMLOptionElement>>;

interface SpinnerProps {
    size?: Sizes;
    theme?: Theme;
}

declare const Spinner: React$1.FC<SpinnerProps>;

interface SideNavProps {
    children?: React.ReactNode;
    theme?: Theme;
}
interface SideNavElementProps {
    to: string;
    label: string;
    children?: React.ReactNode;
}
interface SideNavGroupProps {
    children?: React.ReactNode;
    label: string;
}

declare const SideNav: React$1.ForwardRefExoticComponent<SideNavProps & React$1.RefAttributes<HTMLDivElement>>;

declare const SideNavElement: React$1.ForwardRefExoticComponent<SideNavElementProps & React$1.RefAttributes<HTMLLIElement>>;

declare const SideNavGroup: React$1.ForwardRefExoticComponent<SideNavGroupProps & React$1.RefAttributes<HTMLElement>>;

interface SwitchProps {
    label?: string;
    checked?: boolean;
    size?: Sizes;
    theme?: Theme;
    inactive?: boolean;
    value?: boolean;
}

declare const Switch: React$1.ForwardRefExoticComponent<SwitchProps & React$1.RefAttributes<HTMLLabelElement>>;

interface TagProps {
    label: string;
    children?: React.ReactNode;
    theme?: Theme;
    size?: Sizes;
}

declare const Tag: React$1.ForwardRefExoticComponent<TagProps & React$1.RefAttributes<HTMLDivElement>>;

interface TabsProps {
    theme?: Theme;
    children: React.ReactNode[];
    onChange?: any;
    layout?: Layouts;
}
interface TabProps {
    children: React.ReactNode;
    activeTab?: number;
    index?: number;
    onTabChange?: (index: number, value: React.ReactNode) => void;
}
interface TabElement extends React.HTMLAttributes<HTMLDivElement> {
    getActiveTabIndex: () => number;
}

declare const Tabs: React$1.ForwardRefExoticComponent<TabsProps & React$1.RefAttributes<TabElement>>;

declare const Tab: React$1.ForwardRefExoticComponent<TabProps & React$1.RefAttributes<HTMLButtonElement>>;

interface TextAreaProps {
    label?: string;
    helperText?: string;
    errorText?: string;
    size?: Sizes;
    inactive?: boolean;
    placeholder?: string;
    value?: string;
    theme?: Theme;
    required?: boolean;
}

declare const TextArea: React$1.ForwardRefExoticComponent<TextAreaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

interface TimePickerProps {
    type?: "text" | "number";
    label?: string;
    helperText?: string;
    errorText?: string;
    size?: Sizes;
    inactive?: boolean;
    placeholder?: string;
    value?: string;
    theme?: Theme;
    name?: string;
    id?: string;
}

declare const TimePicker: React$1.ForwardRefExoticComponent<TimePickerProps & React$1.RefAttributes<HTMLInputElement>>;

declare type GetTheme = () => Theme;
declare type SetTheme = (newTheme: Theme) => void;
interface Props {
    theme: Theme;
    children?: React$1.ReactNode;
}
interface ThemeContext {
    getTheme: GetTheme;
    setTheme: SetTheme;
}
declare const ThemeProvider: React$1.FC<Props>;
declare const useThemeContext: () => ThemeContext;

export { Accordion, ActionMenu, Badge, Banner, BannerAction as BannerActions, Bar, Button, Calendar, Card, BackCard as CardBack, FrontCard as CardFront, CardText, CardTitle, Carousel, CarouselItem, Checkbox, CheckboxGroup, Clock, Divider, Dropdown, DropdownItem, FlipCard, Form, FormRow, FormSection, Icon, Input, InputPassword, List, LoadingIndicator, Modal, ModalBody, ModalFooter, ModalHeader, Notification, ProgressTracker, ProgressStep as ProgressTrackerStep, RadioButton, RadioButtonFieldset, Section, SectionSelector, Select, SelectOption, SelectOptionGroup, SideNav, SideNavElement, SideNavGroup, Spinner, Switch, Tab, Tabs, Tag, TextArea, ThemeProvider, TimePicker, useThemeContext };
