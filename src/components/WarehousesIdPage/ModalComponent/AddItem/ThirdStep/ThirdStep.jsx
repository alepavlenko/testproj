import React, {useState} from 'react';
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import style from "../SecondStep/SecondStep.module.css";
import Typography from "@mui/material/Typography";
import Visa from "../../../../Common/Icons/Visa";
import PayPal from "../../../../Common/Icons/PayPal";
import Cash from "../../../../Common/Icons/Cash";
import {ListItemButtonStyled} from "../AddItem.style";

const ThirdStep = ({formik}) => {

    const [selectedIndex, setSelectedIndex] = useState('');
    const handleListItemClick = (index) => {

        setSelectedIndex(index);
        formik.values.payment = index;
    };

    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <List component="nav" aria-label="main mailbox folders">
                <div className={style.wrapText}>
                    <Typography variant="h6" component="h2" >Choose a payment method</Typography>
                </div>
                <ListItemButtonStyled
                    selected={selectedIndex === 'VISA'}
                    onChange={formik.handleChange}
                    onClick={() => handleListItemClick('VISA')}
                >
                    <div className={selectedIndex === 'VISA' ? style.activeSelected : style.passivSelected } >
                        <Visa/>
                        <ListItemText primary="Visa, Mastercard"/>
                    </div>

                </ListItemButtonStyled>

                <ListItemButtonStyled
                    onChange={formik.handleChange}
                    selected={selectedIndex === 'PAYPAL'}
                    onClick={() => handleListItemClick('PAYPAL')}
                >
                    <div className={selectedIndex === 'PAYPAL' ? style.activeSelected : style.passivSelected } >
                        <PayPal/>
                        <ListItemText primary="PayPal"/>
                    </div>
                </ListItemButtonStyled>

                <ListItemButtonStyled
                    onChange={formik.handleChange}
                    selected={selectedIndex === 'CASH'}
                    onClick={() => handleListItemClick('CASH')}
                >
                    <div className={selectedIndex === 'CASH' ? style.activeSelected : style.passivSelected } >
                        <Cash/>
                        <ListItemText primary="Cash"/>
                    </div>
                </ListItemButtonStyled>
            </List>
        </Box>
    );
};

export default ThirdStep;