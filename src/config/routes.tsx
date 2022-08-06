import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Introduction from "../modules/introduction/Introduction.stories";
import ButtonStory from "../modules/button/Button.stories";
import ActionMenuStory from "../modules/action-menu/ActionMenu.stories";
import AccordionStory from "../modules/accordion/Accordion.stories";
import TextAreaStory from "../modules/text-area/TextArea.stories";
import ProgressTrakerStory from "../modules/progress-tracker/ProgressTracker.stories";
import InputStory from "../modules/input/Input.stories";
import NotificationStory from "../modules/notification/Notification.stories";
import TabsStory from "../modules/tabs/Tabs.stories";
import SwitchStory from "../modules/switch/Switch.stories";
import DropdownStory from "../modules/dropdown/Dropdown.stories";
import SelectStory from '../modules/select/Select.stories';
import TagStory from "../modules/tag/Tag.stories";
import DonutStory from "../modules/charts/donut/Donut.stories";
import RadioButtonStory from "../modules/radio-button/RadioButton.stories";
import ModalStory from "../modules/modal/Modal.stories";
import BadgeStory from "../modules/badge/Badge.stories";
import PieStory from "../modules/charts/pie/Pie.stories";
import BarChartStory from "../modules/charts/bar/BarChart.stories";
import LineChartStory from "../modules/charts/line/LineChart.stories";
import CardStory from "../modules/card/Card.stories";
import CheckboxStory from "../modules/checkbox/Checkbox.stories";
import CarouselStory from "../modules/carousel/Carousel.stories";
import ListStory from "../modules/list/List.stories";
import PasswordStory from "../modules/password/InputPassword.stories";
import BarStory from "../modules/bar/Bar.stories";
import BannerStory from "../modules/banner/Banner.stories";
import SpinnerStory from "../modules/spinner/Spinner.stories";
import LoadingIndicatorStory from "../modules/loading-indicator/LoadingIndicator.stories";
import ClockStory from "../modules/clock/Clock.stories";
import TimePickerStory from "../modules/time-picker/TimePicker.stories";
import CalendarStory from "../modules/calendar/Calendar.stories";
import FormStory from "../modules/form/Form.stories";
import SectionSelectorStory from "../modules/section-selector/SectionSelector.stories";

export const history = createBrowserHistory();


export const Paths = {
    tournamentRegForm: "/createTournament",
    leagueRegForm: "/createLeague",

}

export const createRoutes = () => (
    <Router history={history}>
        <Route path='/' exact component={Introduction} />
        <Route path="/button" exact component={ButtonStory} />
        <Route path="/accordion" exact component={AccordionStory} />
        <Route path="/actionMenu" exact component={ActionMenuStory} />
        <Route path="/textarea" exact component={TextAreaStory} />
        <Route path="/progressTracker" exact component={ProgressTrakerStory} />
        <Route path="/input" exact component={InputStory} />
        <Route path="/notification" exact component={NotificationStory} />
        <Route path="/tabs" exact component={TabsStory} />
        <Route path="/switch" exact component={SwitchStory} />
        <Route path="/dropdown" exact component={DropdownStory} />
        <Route path="/select" exact component={SelectStory} />
        <Route path="/tag" exact component={TagStory} />
        <Route path="/donut" exact component={DonutStory} />
        <Route path="/radioButton" exact component={RadioButtonStory} />
        <Route path="/modal" exact component={ModalStory} />
        <Route path="/badge" exact component={BadgeStory} />
        <Route path="/pie" exact component={PieStory} />
        <Route path="/barChart" exact component={BarChartStory} />
        <Route path="/gettingStarted" exact component={Introduction} />
        <Route path="/lineChart" exact component={LineChartStory} />
        <Route path="/card" exact component={CardStory} />
        <Route path="/checkbox" exact component={CheckboxStory} />
        <Route path="/carousel" exact component={CarouselStory} />
        <Route path="/list" exact component={ListStory} />
        <Route path="/password" exact component={PasswordStory} />
        <Route path="/bar" exact component={BarStory} />
        <Route path="/banner" exact component={BannerStory} />
        <Route path="/spinner" exact component={SpinnerStory} />
        <Route path="/loadingIndicator" exact component={LoadingIndicatorStory} />
        <Route path="/clock" exact component={ClockStory} />
        <Route path="/timePicker" exact component={TimePickerStory} />
        <Route path="/calendar" exact component={CalendarStory} />
        <Route path="/form" exact component={FormStory} />
        <Route path="/sectionSelector" exact component={SectionSelectorStory} />
        {/* <Route path="/:id" exact component={App} /> */}
    </Router>
);