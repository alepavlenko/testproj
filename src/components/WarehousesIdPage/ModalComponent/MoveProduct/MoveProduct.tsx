import React, {useState} from 'react';
import { useParams} from "react-router-dom";
import { useFormik} from "formik";
import MoveFirstStep from "./MoveFirstStep/MoveFirstStep";
import MoveSecondStep from "./MoveSecondStep/MoveSecondStep";
import MoveThirdStep from "./MoveThirdStep/MoveThirdStep";
import {ButtonStyled, FormStyled} from "./MoveProduct.style";
import {MoveItemSchema} from "./MoveProductForm";
import ModalStepper from "../../../Common/ModalStepper/ModalStepper";
import {productsActions} from "../../../../redux/actions/productAction";
import {useAppDispatch} from "../../../../redux/store";

interface MoveProductProps {
    handleClose: (value: boolean) => void
    openNext: (value: boolean) => void
    value: string
    stateSelected: string[]
    setStateSelected: (value: string[]) => void
}

export interface MyValues {
    baseWarehouses: string
    selectWarehouses: string
    delivery: string
    payment: string
}

const MoveProduct = ({handleClose, openNext, value, stateSelected, setStateSelected}: MoveProductProps) => {

    const {warehouseId}: any = useParams<{ warehouseId: string }>();
    const dispatch = useAppDispatch()

    const [activeStep, setActiveStep] = useState(0);

    const steps = ["1", "2", "3"];


    const handleNext = () => {
        if (formik.values.selectWarehouses === '') {
            formik.setStatus( 'error')

        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };
    const formik = useFormik<MyValues>({
            initialValues: {
                baseWarehouses: '',
                selectWarehouses: '',
                delivery: 'AIR',
                payment: 'CASH',
            },
            validationSchema: MoveItemSchema,
            onSubmit: values => {
                values.baseWarehouses = warehouseId;
                dispatch(productsActions.moveProducts({values, warehouseId, stateSelected, setStateSelected}))
                openNextModal();
            }
        }
    );
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


export default MoveProduct;