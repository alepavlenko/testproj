import React, {useState} from 'react';

import {Box, List,} from "@mui/material";
import {ButtonStyled} from "../AddItem.style";
import Typography from "@mui/material/Typography";
import StepModalSec from "../../../../Common/StepModal/StepModalSec";

import style from './SecondStep.module.css'

interface SecondStepProps {
    nextStep: () => void
    formik: any
}

const SecondStep = ({formik, nextStep}: SecondStepProps) => {

    const [selectedIndex, setSelectedIndex] = useState('');
    const handleListItemClick = (index: string) => {
        setSelectedIndex(index);
        formik.values.delivery = index;
    };

    return (
        <>
            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <List component="nav" aria-label="main mailbox folders">
                    <div className={style.wrapText}>
                        <Typography variant="h6" component="h2">Select delivery method</Typography>
                    </div>
                    <StepModalSec
                        selectedIndex={selectedIndex}
                        formik={formik}
                        handleListItemClick={handleListItemClick}
                    />
                </List>
            </Box>
            <div>
                <ButtonStyled onClick={nextStep} type="submit" variant="contained">Next step</ButtonStyled>
            </div>
        </>
    );
};

export default SecondStep;
