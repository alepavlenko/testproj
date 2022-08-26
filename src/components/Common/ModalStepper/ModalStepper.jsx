import React from 'react';

import {Step, StepLabel, Stepper} from "@mui/material";

const ModalStepper = ({activeStep, steps}) => {
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