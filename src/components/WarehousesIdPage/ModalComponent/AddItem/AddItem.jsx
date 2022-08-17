import React, {useContext} from 'react';

import {useFormik} from "formik";
import {ButtonStyled, FormStyled} from './AddItem.style';
import style from './AddItem.module.css'
import {addWarehouses} from "../../../../utils/logicAddingWarehouses";
import {Context} from "../../../../App";
import {Step, StepLabel, Stepper} from "@mui/material";
import LogInForm from "../../../MainPage/AuthForm/LogInForm/LogInForm";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import {AddItemSchema} from "./AddItemForm";
import {useParams} from "react-router-dom";

const AddItem = ({handleClose, openNext, value}) => {
    const {warehouseId} = useParams();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const handleNext = () => {
        let newSkipped = skipped;
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    };


    const formik = useFormik({
        initialValues: {
            name: '',
            manufacturer: '',
            number: '',
            purchasing: '',
            delivery: '',
            payment: '',
        },
        validationSchema: AddItemSchema,
        onSubmit: values => {
            console.log(3333)

            const newProduct = {
                ...values,
                warehouseId,
                id: Date.now()
            }
            // addWarehouses(values, setItems) своя функция будет
            handleCloseWrap();
            console.log(newProduct)
            // openNextModal()

        },
    });
    console.log(formik.values)

    function getSteps() {
        return ["1", "2", "3"];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <FirstStep nextStep={handleNext} formik={formik}/>;
            case 1:
                return <SecondStep nextStep={handleNext} formik={formik}/>;
            case 2:
                return <ThirdStep formik={formik}/>;
            default:
                return "unknown step";
        }
    }


    const {setItems} = useContext(Context)

    const handleCloseWrap = () => {
        // formik.resetForm()
        handleClose();
    }

    const openNextModal = () => {
        handleCloseWrap();
        // formik.resetForm()
        openNext(true);
    }


    return (
        <>
            <h1>{value}</h1>
            <FormStyled onSubmit={formik.handleSubmit}>

                <Stepper activeStep={activeStep}>
                    {steps.map((label) => {
                        return (
                            <Step key={label}>
                                <StepLabel></StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {getStepContent(activeStep)}
                {activeStep === 2
                    ? <ButtonStyled type="submit" variant="contained">Choose</ButtonStyled>
                    : <></>
                }
            </FormStyled>
        </>
    );
};

export default AddItem;