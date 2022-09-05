import React, {useState} from 'react';
import { useFormik} from "formik";
import {useParams} from "react-router-dom";

import {ButtonStyled, FormStyled} from './AddItem.style';
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import {AddItemSchema} from "./AddItemForm";
import ModalStepper from "../../../Common/ModalStepper/ModalStepper";

import {productsActions} from "../../../../redux/actions/productAction";
import {useAppDispatch} from "../../../../redux/store";

interface AddItemProps {
    handleClose: (value: boolean) => void
    openNext: (value: boolean) => void
    value: string
}

export interface MyValuesProduct extends Record<string, string | number>{
    name: string
    manufacturer: string
    number: string
    purchasing: string
    delivery: string
    payment: string
    itemNumber: 0,
    shipment: string
    warehouse: string
    user: string
    _id: string
}

const AddItem = ({handleClose, openNext, value}: AddItemProps) => {

    const {warehouseId} = useParams<{ warehouseId: string }>();
    const dispatch = useAppDispatch()

    const [activeStep, setActiveStep] = useState(0);

    const steps = ['1', '2', '3'];

    const handleNext = () => {
        if (formik.values.name === '') {
            formik.setStatus('error')
            return
        }
        if (!formik.errors.name && !formik.errors.manufacturer && !formik.errors.number) {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const formik = useFormik<MyValuesProduct>({
            initialValues: {
                name: '',
                manufacturer: '',
                number: '',
                purchasing: '',
                delivery: '',
                payment: '',
                itemNumber: 0,
                shipment: '',
                warehouse: '',
                user: '',
                _id: ''
            },
            validationSchema: AddItemSchema,
            onSubmit:  values => {
                        dispatch(productsActions.addProducts({values, warehouseId}))
                        openNextModal()
            }
        }
    );
    function getStepContent(step: number) {
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

    const openNextModal = () => {
        handleClose(false);
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