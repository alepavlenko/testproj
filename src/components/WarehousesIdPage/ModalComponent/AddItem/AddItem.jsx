import React, {useContext} from 'react';

import {useFormik} from "formik";
import {ButtonStyled, FormStyled} from './AddItem.style';
import style from './AddItem.module.css'
import {addWarehouses} from "../../../../utils/logicAddingWarehouses";
import {Context} from "../../../../App";
import {AddWarehousesSchema} from "./AddItemForm";
import {Step, StepLabel, Stepper} from "@mui/material";
import LogInForm from "../../../MainPage/AuthForm/LogInForm/LogInForm";

const AddItem = ({handleClose, openNext, value }) => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const handleNext = () => {
        let newSkipped = skipped;
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    };


    function getSteps() {
        return ["1", "2", "3"];
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <LogInForm/>;
            case 1:
                return "do step 2";
            case 2:
                return "do steo 3";
            default:
                return "unknown step";
        }
    }


    const { setItems } = useContext(Context)

    const handleCloseWrap = () => {
        formik.resetForm()
        handleClose();
    }

    const openNextModal = () => {
        handleCloseWrap();
        formik.resetForm()
        openNext(true);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            manufacturer: '',
            number: '',
        },
        validationSchema: AddWarehousesSchema,
        onSubmit: values => {
            // addWarehouses(values, setItems) своя функция будет
            handleCloseWrap();
            openNextModal()
        },
    });

    const addWarehousesFormInputs = [
        {
            placeholder: 'Enter a name',
            name: 'name',
            label: 'Product name',
        },
        {
            placeholder: 'Enter a name',
            name: 'manufacturer',
            label: 'Manufacturer',
        },
        {
            placeholder: 'Enter the number',
            name: 'number',
            label: 'Item number',
        },
    ]

    return (
        <>
            <h1>{value}</h1>

            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                    return (
                        <Step key={label} >
                            <StepLabel ></StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            <FormStyled onSubmit={formik.handleSubmit}>
                {addWarehousesFormInputs.map(({ label, placeholder, name }) => (
                    <div key={name} className={style.wrapInput}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            className={style.wrapTextInput}
                            placeholder={placeholder}
                            id={name}
                            name={name}
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values[name]}
                        />
                        {formik.errors[name] && formik.touched[name] ? (
                            <div className={style.wrapError}>{formik.errors[name]}</div>
                        ) : null}
                    </div>
                ))}
                <div>
                    <ButtonStyled onClick={handleNext} type="submit" variant="contained">Add a warehouses</ButtonStyled>
                </div>
            </FormStyled>
        </>
    );
};

export default AddItem;