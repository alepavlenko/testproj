import React, {useState} from 'react';
import {Params, useParams} from "react-router-dom";
import {useFormik} from "formik";
import MoveFirstStep from "./MoveFirstStep/MoveFirstStep";
import MoveSecondStep from "./MoveSecondStep/MoveSecondStep";
import MoveThirdStep from "./MoveThirdStep/MoveThirdStep";
import {ButtonStyled, FormStyled} from "./MoveProduct.style";
import {MoveItemSchema} from "./MoveProductForm";
import ModalStepper from "../../../Common/ModalStepper/ModalStepper";
import {useDispatch} from "react-redux";
import {moveProducts} from "../../../../redux/actions/productAction";

interface MoveProductProps {
    handleClose: (value: boolean) => void
    openNext: (value: boolean) => void
    value: string
    stateSelected: string[]
    setStateSelected: (value: string[]) => void
}

const MoveProduct = ({handleClose, openNext, value, stateSelected, setStateSelected}: MoveProductProps) => {

    const {warehouseId}:  any = useParams();
    const dispatch = useDispatch()

    const [activeStep, setActiveStep] = useState(0);

    const steps = ["1", "2", "3"];


    const handleNext = () => {
        if (formik.values.selectWarehouses === '') {
            formik.setError('selectWarehouses', 'error')
        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const formik: any = useFormik({
        initialValues: {
            baseWarehouses: '',
            selectWarehouses: '',
            delivery: 'AIR',
            payment: 'CASH',
        },
        validationSchema: MoveItemSchema,
        onSubmit: values => {
            values.baseWarehouses = warehouseId;
            dispatch(moveProducts({values, warehouseId, stateSelected, setStateSelected}))
            openNextModal();

        },
    });

    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return <MoveFirstStep
                    nextStep={handleNext}
                    formik={formik}
                    warehouseId={warehouseId}
                />;
            case 1:
                return <MoveSecondStep nextStep={handleNext} formik={formik}/>;
            case 2:
                return <MoveThirdStep formik={formik}/>;
            default:
                return "unknown step";
        }
    }

    const openNextModal = () => {
        openNext(true);
        handleClose(false);
    }

    return (
        <>
            <h1>{value}</h1>
            <FormStyled onSubmit={formik.handleSubmit}>
                <ModalStepper activeStep={activeStep} steps={steps} />
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