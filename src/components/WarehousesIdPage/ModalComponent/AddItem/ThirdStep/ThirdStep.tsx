import React, {useState} from 'react';

import {Box, List} from "@mui/material";
import Typography from "@mui/material/Typography";
import StepModalThird from "../../../../Common/StepModal/StepModalThird";

import style from "../SecondStep/SecondStep.module.css";
import {FormikProps} from "formik";
import {MyValuesProduct} from "../AddItem";

interface ThirdStepProps {
    formik: FormikProps<MyValuesProduct>
}

const ThirdStep = ({formik}: ThirdStepProps) => {

    const [selectedIndex, setSelectedIndex] = useState('');

    const handleListItemClick = (index: string) => {
        setSelectedIndex(index);
        formik.values.payment = index;
    };

    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <List component="nav" aria-label="main mailbox folders">
                <div className={style.wrapText}>
                    <Typography variant="h6" component="h2">Choose a payment method</Typography>
                </div>
                <StepModalThird
                    selectedIndex={selectedIndex}
                    formik={formik}
                    handleListItemClick={handleListItemClick}
                />
            </List>
        </Box>
    );
};

export default ThirdStep;