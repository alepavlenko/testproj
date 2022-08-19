import React, {useContext, useState} from 'react';
import {useParams} from "react-router-dom";
import {Context} from "../../../../App";
import {useFormik} from "formik";
import {Step, StepLabel, Stepper} from "@mui/material";
import MoveFirstStep from "./MoveFirstStep/MoveFirstStep";
import MoveSecondStep from "./MoveSecondStep/MoveSecondStep";
import MoveThirdStep from "./MoveThirdStep/MoveThirdStep";
import {ButtonStyled, FormStyled} from "./MoveProduct.style";
import {MoveItemSchema} from "./MoveProductForm";
import {moveProduct} from "../../../../utils/movingProducts";

const MoveProduct = ({ handleClose, openNext, value, stateSelected, setStateSelected}) => {
    const {warehouseId} = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const {items ,setItems} = useContext(Context)

    const handleNext = () => {
        if(formik.values.selectWarehouses === ''){
            formik.setError('selectWarehouses','error')
            // return
        }
        else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const formik = useFormik({
        initialValues: {
            baseWarehouses:'',
            selectWarehouses:'',
            delivery: '',
            payment: '',
        },
        validationSchema: MoveItemSchema,
        onSubmit: values => {
            openNext(true);
            values.baseWarehouses = warehouseId;
            moveProduct(items, setItems, values, warehouseId, stateSelected, setStateSelected)
            openNextModal();

        },
    });
    function getSteps() {
        return ["1", "2", "3"];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <MoveFirstStep stateSelected={stateSelected} nextStep={handleNext} formik={formik} warehouseId={warehouseId}/>;
            case 1:
                return <MoveSecondStep nextStep={handleNext} formik={formik}/>;
            case 2:
                return <MoveThirdStep formik={formik}/>;
            default:
                return "unknown step";
        }
    }



    const openNextModal = () => {
        console.log(11)
        // openNext(true);
        handleClose(false);
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


export default MoveProduct;