import React, {useContext, useState} from 'react';
import {useFormik} from "formik";
import {Context} from "../../../../App";
import {useParams} from "react-router-dom";

import {ButtonStyled, FormStyled} from './AddItem.style';
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import {AddItemSchema} from "./AddItemForm";
import ModalStepper from "../../../Common/ModalStepper/ModalStepper";

import {addItems} from "../../../../utils/logicAddingItems";

const AddItem = ({handleClose, openNext, value}) => {
    const {warehouseId} = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['1', '2', '3'];

    const {setItems, items, token} = useContext(Context)

    const handleNext = () => {
        if (formik.values.name === '') {
            formik.setError('name', 'error')
            return
        }
        if (!formik.errors.name && !formik.errors.manufacturer && !formik.errors.number) {
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
            addItems(token, values, items, setItems, warehouseId)
            handleCloseWrap();
            openNextModal()
        },
    });

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
        handleClose();
    }

    const openNextModal = () => {
        handleCloseWrap();
        openNext(true);
    }

    return (
        <>
            <h1>{value}</h1>
            <FormStyled onSubmit={formik.handleSubmit}>
                <ModalStepper activeStep={activeStep} steps={steps}/>
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