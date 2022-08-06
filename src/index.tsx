import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import Button from "./core/components/button/Button";
import ActionMenu from "./core/components/actionMenu/ActionMenu";
import Accordion from "./core/components/accordion/Accordion";
import Badge from "./core/components/badge/Badge";
import Banner from "./core/components/banner/Banner";
import BannerActions from "./core/components/banner/BannerActions";
import Bar from "./core/components/bar/Bar";
import Checkbox from "./core/components/checkbox/Checkbox";
import Calendar from "./core/components/calendar/Calendar";
import CheckboxGroup from "./core/components/checkbox/CheckboxGroup";
import Clock from "./core/components/clock/Clock";
import Divider from "./core/components/divider/Divider";
import Card from "./core/components/card/Card";
import FlipCard from "./core/components/card/FlipCard";
import CardBack from "./core/components/card/CardBack";
import CardFront from "./core/components/card/CardFront";
import CardTitle from "./core/components/card/CardTitle";
import CardText from "./core/components/card/CardText";
import Carousel from "./core/components/carousel/Carousel";
import CarouselItem from "./core/components/carousel/CarouselItem";
import Dropdown from "./core/components/dropdown/Dropdown";
import DropdownItem from "./core/components/dropdown/DropdownItem";
import Form from "./core/components/form/Form";
import FormRow from "./core/components/form/FormRow";
import FormSection from "./core/components/form/FormSection";
import Input from "./core/components/input/Input";
import Icon from "./core/components/icon/Icon";
import List from "./core/components/list/List";
import LoadingIndicator from "./core/components/loading-indicator/LoadingIndicator";
import Modal from "./core/components/modal/Modal";
import ModalHeader from "./core/components/modal/ModalHeader";
import ModalFooter from "./core/components/modal/ModalFooter";
import ModalBody from "./core/components/modal/ModalBody";
import Notification from "./core/components/notification/Notification";
import InputPassword from "./core/components/password/InputPassword";
import ProgressTracker from "./core/components/progress-tracker/ProgressTracker";
import ProgressTrackerStep from "./core/components/progress-tracker/ProgressStep";
import RadioButton from "./core/components/radio-button/RadioButton";
import RadioButtonFieldset from "./core/components/radio-button/RadioButtonFieldset";
import SectionSelector from "./core/components/section-selector/SectionSelector";
import Section from "./core/components/section-selector/Section";
import Select from "./core/components/select/Select";
import SelectOption from "./core/components/select/SelectOption";
import SelectOptionGroup from "./core/components/select/SelectOptionGroup";
import Spinner from "./core/components/spinner/Spinner";
import SideNav from "./core/components/sidenav/SideNav";
import SideNavElement from "./core/components/sidenav/SideNavElement";
import SideNavGroup from "./core/components/sidenav/SideNavGroup";
import Switch from "./core/components/switch/Switch";
import Tag from "./core/components/tag/Tag";
import Tabs from "./core/components/tabs/Tabs";
import Tab from "./core/components/tabs/Tab";
import TextArea from "./core/components/text-area/TextArea";
import TimePicker from "./core/components/time-picker/TimePicker";
import "./core/scss/components.scss";
import { ThemeProvider, useThemeContext } from "./store/ThemeContext";

export { 
  ActionMenu, 
  Accordion, 
  Button, 
  Badge, 
  Banner, 
  BannerActions, 
  Bar, 
  Clock, 
  Calendar, 
  Checkbox, 
  CheckboxGroup, 
  Divider,
  Card,
  FlipCard,
  CardBack,
  CardFront,
  CardTitle,
  CardText,
  Carousel,
  CarouselItem,
  Dropdown,
  DropdownItem,
  Form,
  FormRow,
  FormSection,
  Input,
  Icon,
  List,
  LoadingIndicator,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Notification,
  InputPassword,
  ProgressTracker,
  ProgressTrackerStep,
  RadioButton,
  RadioButtonFieldset,
  SectionSelector,
  Section,
  Select,
  SelectOption,
  SelectOptionGroup,
  Spinner,
  SideNav,
  SideNavElement,
  SideNavGroup,
  Switch,
  Tag,
  Tabs,
  Tab,
  TextArea,
  TimePicker,
  ThemeProvider,
  useThemeContext
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);