import React, {useState} from 'react';
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import {ButtonStyled, ListItemButtonStyled} from "../MoveProduct.style";
import style from './MoveSecondStep.module.css'
import Typography from "@mui/material/Typography";
import AirPlane from "../../../../Common/Icons/AirPlane";
import Ship from "../../../../Common/Icons/Ship";
import Car from "../../../../Common/Icons/Car";


const MoveSecondStep = ({formik, nextStep}) => {

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
                    <ListItemButtonStyled
                        selected={selectedIndex === 'AIR'}
                        onChange={formik.handleChange}
                        onClick={() => handleListItemClick('AIR')}
                    >
                        <div className={selectedIndex === 'AIR' ? style.activeSelected : style.passivSelected } >
                            <AirPlane/>
                            <ListItemText primary="By air transport"/>
                        </div>
                    </ListItemButtonStyled>

                    <ListItemButtonStyled
                        onChange={formik.handleChange}
                        selected={selectedIndex === 'SEA'}
                        onClick={() => handleListItemClick('SEA')}
                    >
                        <div className={selectedIndex === 'SEA' ? style.activeSelected : style.passivSelected } >
                            <Ship/>
                            <ListItemText primary="By sea"/>
                        </div>
                    </ListItemButtonStyled>

                    <ListItemButtonStyled
                        onChange={formik.handleChange}
                        selected={selectedIndex === 'CAR'}
                        onClick={() => handleListItemClick('CAR')}
                    >
                        <div className={selectedIndex === 'CAR' ? style.activeSelected : style.passivSelected } >
                            <Car/>
                            <ListItemText primary="By Car"/>
                        </div>
                    </ListItemButtonStyled>
                </List>
            </Box>

            <div>
                <ButtonStyled onClick={nextStep} type="submit" variant="contained">Next step</ButtonStyled>
            </div>
        </>
    );
};
export default MoveSecondStep;