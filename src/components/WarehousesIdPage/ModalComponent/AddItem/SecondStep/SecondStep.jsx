import React, {useState} from 'react';
import {
    Box,
    List, ListItemButton,
    ListItemText,
} from "@mui/material";
import {ButtonStyled} from "../AddItem.style";
import AirPlane from "../../../../Common/Icons/AirPlane";
import Typography from "@mui/material/Typography";
import Ship from "../../../../Common/Icons/Ship";
import Car from "../../../../Common/Icons/Car";
import style from './SecondStep.module.css'

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
                    <ListItemButton
                        className={selectedIndex === 'AIR' ? style.activeSelected : style.passivSelected }
                        selected={selectedIndex === 'AIR'}
                        onChange={formik.handleChange}
                        onClick={() => handleListItemClick('AIR')}
                    >
                        <AirPlane/>
                        <ListItemText primary="By air transport"/>
                    </ListItemButton>

                    <ListItemButton
                        onChange={formik.handleChange}
                        className={selectedIndex === 'SEA' ? style.activeSelected : style.passivSelected }
                        selected={selectedIndex === 'SEA'}
                        onClick={() => handleListItemClick('SEA')}
                    >
                        <Ship/>
                        <ListItemText primary="By sea"/>
                    </ListItemButton>

                    <ListItemButton
                        onChange={formik.handleChange}
                        className={selectedIndex === 'CAR' ? style.activeSelected : style.passivSelected }
                        selected={selectedIndex === 'CAR'}
                        onClick={() => handleListItemClick('CAR')}
                    >
                        <Car/>
                        <ListItemText primary="By Car"/>
                    </ListItemButton>
                </List>
            </Box>

            <div>
                <ButtonStyled onClick={nextStep} type="submit" variant="contained">Next step</ButtonStyled>
            </div>
        </>
    );
};

export default SecondStep;
