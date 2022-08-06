import React, { forwardRef, isValidElement, useEffect, useRef, useState } from 'react';
import { CarouselProps as Props, classes } from "./CarouselInterface";
import { buildClass } from '../../utils/utils';
import { themeClasses } from '../../theme';
import { useThemeContext } from '../../../store/ThemeContext';
import { VERTICAL } from '../../interfaces/LayoutInterface';
import Icon from '../icon/Icon';

const Carousel = forwardRef<HTMLDivElement, Props>(({
    layout = VERTICAL,
    ...props
}, ref) => {

    const { getTheme } = useThemeContext();
    const theme = props.theme ? props.theme : getTheme();
    const [activeSlide, setActiveSlide] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const carouselRef = useRef<any>(null);

    useEffect(() => {
        setCarouselWidth(carouselRef.current.clientWidth);
    }, [carouselRef]);

    useEffect(() => {
        console.log(activeSlide)
        const activeElement = carouselRef.current.querySelector(`#NK__CarouselItem-${activeSlide}`);
        console.log(activeElement)
        if (activeElement) {
            activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        }
    }, [activeSlide]);

    const elementClass = buildClass({
        [classes.wrapper]: true,
        [classes.layout[layout]]: true,
        [themeClasses[theme]]: true
    });

    const renderControls = () => {
        return(
            <React.Fragment>
                <span className={classes.previous} onClick={() => activeSlide > 0 && setActiveSlide(activeSlide - 1)} tabIndex={0}>
                    <Icon icon="arrowDown" />
                </span>
                <span className={classes.next} onClick={() => activeSlide < React.Children.count(props.children)-1 && setActiveSlide(activeSlide + 1) } tabIndex={0}>
                    <Icon icon="arrowUp" />
                </span>
            </React.Fragment>
        );
    };

    const renderListControls = () => {
        const list = []; 
        for(let i = 0; i < React.Children.count(props.children); i++) {
            list.push(
                <li tabIndex={0} key={i} className={`${classes.control} ${i === activeSlide && classes.controlActive}`} onClick={() => setActiveSlide(i)}></li>
            )
        }
        return list;
    };

    const childrenWithProps = carouselRef.current && React.Children.map(props.children, (child, i) => {
        if(isValidElement(child)) {
            return React.cloneElement(child, { index: i, id: `NK__CarouselItem-${i}` })
        }
        return child;
    });

    return(
        <div ref={carouselRef} className={elementClass}>
            <div className={classes.carousel}>
                {renderControls()}
                {childrenWithProps}
            </div>
            <ul className={classes.list}>
                {renderListControls()}
            </ul>
        </div>
    );
});

export default Carousel;