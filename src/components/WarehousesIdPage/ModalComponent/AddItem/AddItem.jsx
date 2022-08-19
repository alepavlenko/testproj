import React, {useContext, useState} from 'react';

import {useFormik} from "formik";
import {ButtonStyled, FormStyled} from './AddItem.style';
import {Context} from "../../../../App";
import {Step, StepLabel, Stepper} from "@mui/material";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import {AddItemSchema} from "./AddItemForm";
import {useParams} from "react-router-dom";
import {addItems} from "../../../../utils/logicAddingItems";

const AddItem = ({handleClose, openNext, value}) => {
    const {warehouseId} = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const {setItems} = useContext(Context)

    const handleNext = () => {

        if(formik.values.name === ''){
            formik.setError('name','error')
            return
        }
        if(!formik.errors.name && !formik.errors.manufacturer && !formik.errors.number) {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
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
            console.log()
            addItems(setItems, values, warehouseId)
            handleCloseWrap();
            openNextModal()

        },
    });
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