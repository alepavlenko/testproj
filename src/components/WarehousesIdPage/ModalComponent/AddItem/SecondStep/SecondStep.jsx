import React, {useState} from 'react';
import {
    Box,
    List,
    ListItemText,
} from "@mui/material";
import {ButtonStyled, ListItemButtonStyled} from "../AddItem.style";
import AirPlane from "../../../../Common/Icons/AirPlane";
import Typography from "@mui/material/Typography";
import Ship from "../../../../Common/Icons/Ship";
import Car from "../../../../Common/Icons/Car";
import style from './SecondStep.module.css'
import StepModalSec from "../../../../Common/StepModal/StepModalSec";

const SecondStep = ({formik, nextStep}) => {

    const [selectedIndex, setSelectedIndex] = useState('');
    const handleListItemClick = (index) => {

        setSelectedIndex(index);
        formik.values.delivery = index;
    };

    return (
        <>
            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <List component="nav" aria-label="main mailbox folders">
                    <div className={style.wrapText}>
                        <Typography variant="h6" component="h2" >Select delivery method</Typography>
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
