import React, {useContext} from 'react';

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
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const {setItems} = useContext(Context)

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
            console.log('1111111')
            addItems(setItems, values, warehouseId)
            handleCloseWrap();
            // openNextModal()

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