import React from 'react';

import {Step, StepLabel, Stepper} from "@mui/material";

interface ModalStepperProps {
    activeStep: number
    steps: Array<string>
}

const ModalStepper = ({activeStep, steps}: ModalStepperProps) => {
    return (
        <Stepper activeStep={activeStep}>
            {steps.map((label) => {
                return (
                    <Step key={label}>
                        <StepLabel></StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    );
};

export default ModalStepper;