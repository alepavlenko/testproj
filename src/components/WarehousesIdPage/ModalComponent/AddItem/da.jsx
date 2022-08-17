






export default function App() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const isStepOptional = step => {
        return step === 1;
    };
    const isStepSkipped = step => {
        return skipped.has(step);
    };
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };
    const handleReset = () => {
        setActiveStep(0);
    };

    function getSteps() {
        return ["step 1", "step 2", "step 3"];
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                //components
                return "do step 1";
            case 1:
                return "do step 2";
            case 2:
                return "do steo 3";
            default:
                return "unknown step";
        }
    }

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = "optional";
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        All steps completed
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                >
                                    Skip
                                </Button>
                            )}
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}














import React, {useContext} from 'react';

import {useFormik} from "formik";
import {ButtonStyled, FormStyled} from './AddItem.style';
import style from './AddItem.module.css'
import {addWarehouses} from "../../../../utils/logicAddingWarehouses";
import {Context} from "../../../../App";
import {AddWarehousesSchema} from "./AddItemForm";
import {Step, Stepper} from "@mui/material";

const AddItem = ({handleClose, openNext, value }) => {
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

            <Stepper >
                <Step>1</Step>

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
                    <ButtonStyled  type="submit" variant="contained">Add a warehouses</ButtonStyled>
                </div>
            </FormStyled>
        </>
    );
};

export default AddItem;