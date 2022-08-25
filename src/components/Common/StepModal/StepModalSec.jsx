import React from 'react';
import {ListItemButtonStyled} from "../../WarehousesIdPage/ModalComponent/MoveProduct/MoveProduct.style";
import style from "../../WarehousesIdPage/ModalComponent/MoveProduct/MoveThirdStep/MoveThirdStep.module.css";
import {ListItemText} from "@mui/material";
import {deliveryArray, paymentArray} from "./arrayModal";

const StepModalSec = ({selectedIndex, formik, handleListItemClick}) => {

    const arrayItem = deliveryArray;

    return (
        <>
            {
                arrayItem.map(item =>
                    <ListItemButtonStyled
                        selected={selectedIndex === item.value}
                        onChange={formik.handleChange}
                        onClick={() => handleListItemClick(item.value)}
                        key={item.value}
                    >
                        <div className={selectedIndex === item.value ? style.activeSelected : style.passivSelected}>
                            {item.logo}
                            <ListItemText primary={item.text}/>
                        </div>
                    </ListItemButtonStyled>
                )
            }
        </>
    );
};

export default StepModalSec;