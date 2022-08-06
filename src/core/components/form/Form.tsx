import React, { forwardRef, useEffect, useRef, useState } from "react";
import { FormProps as Props, classes } from "./FormInterface";

const Form = forwardRef<HTMLFormElement, Props>((props, ref) => {
    const formRef = useRef<any>(null);
    const [formFields, setFormFields] = useState<any>([]);
    // const [errors, setErrors] = useState<any>([]);

    useEffect(() => {
        const fields: any = [];
        Array.from(formRef.current.querySelectorAll(".nk__input, .nk__select, .nk__textarea, .nk__checkbox")).forEach((item: any, i: number) => {
            fields.push({ element: item, input: item.querySelector("input, select, textarea, checkbox") });
        });
        setFormFields(fields)
    }, [formRef])

    // const renderErrors = () => {
    //     return errors.map((error: any) => {
    //         return(
    //             <div>
    //                 Errors!!!
    //             </div>
    //         );
    //     });
    // };

    const validateField = (e: any) => {
        if (e.currentTarget.querySelector("input, textarea, checkbox, select").value) {
            e.currentTarget.classList.remove(classes.invalidElement);
        } else {
            e.currentTarget.classList.add(classes.invalidElement);
        }
    };

    const validateForm = () => {
        formFields.forEach((field: any)=> {
            field.element.addEventListener("change", validateField);
            if (field.input.getAttribute("aria-required") && !field.input.value) {
                field.element.classList.add(classes.invalidElement);
            } else {
                field.element.classList.remove(classes.invalidElement);
            }
        });
    }

    const onFormSubmit = (e: any) => {
        validateForm();
        e.preventDefault();
    };

    return(
        <form onSubmit={(e) => onFormSubmit(e)} ref={formRef} className={classes.form}>
            {/* {errors.length > 0 && <div>{renderErrors()}</div>} */}
            {props.children}
        </form>
    );
});

export default Form;