import React, {useState} from 'react';
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import style from './MoveThirdStep.module.css'
import Typography from "@mui/material/Typography";
import Visa from "../../../../Common/Icons/Visa";
import PayPal from "../../../../Common/Icons/PayPal";
import Cash from "../../../../Common/Icons/Cash";

const MoveThirdStep = ({formik}) => {

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
                <ListItemButton
                    className={selectedIndex === 'VISA' ? style.activeSelected : style.passivSelected }
                    selected={selectedIndex === 'VISA'}
                    onChange={formik.handleChange}
                    onClick={() => handleListItemClick('VISA')}
                >
                    <Visa/>
                    <ListItemText primary="Visa, Mastercard"/>
                </ListItemButton>

                <ListItemButton
                    onChange={formik.handleChange}
                    className={selectedIndex === 'PAYPAL' ? style.activeSelected : style.passivSelected }
                    selected={selectedIndex === 'PAYPAL'}
                    onClick={() => handleListItemClick('PAYPAL')}
                >
                    <PayPal/>
                    <ListItemText primary="PayPal"/>
                </ListItemButton>

                <ListItemButton
                    onChange={formik.handleChange}
                    className={selectedIndex === 'CASH' ? style.activeSelected : style.passivSelected }
                    selected={selectedIndex === 'CASH'}
                    onClick={() => handleListItemClick('CASH')}
                >
                    <Cash/>
                    <ListItemText primary="Cash"/>
                </ListItemButton>
            </List>
        </Box>
    );
};

export default MoveThirdStep;