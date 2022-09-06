import React from 'react';

import {ListItemText} from "@mui/material";
import {paymentArray} from "./arrayModal";
import {ListItemButtonStyled} from "../../WarehousesIdPage/ModalComponent/MoveProduct/MoveProduct.style";
import style from "../../WarehousesIdPage/ModalComponent/MoveProduct/MoveThirdStep/MoveThirdStep.module.css";
import {FormikProps} from "formik";
import {MyValuesProduct} from "../../WarehousesIdPage/ModalComponent/AddItem";

interface StepModalThirdProps {
    selectedIndex: string
    formik: FormikProps<MyValuesProduct>
    handleListItemClick: (index: string) => void
}

const StepModalThird = ({ selectedIndex, formik, handleListItemClick}: StepModalThirdProps) => {
    const arrayItem = paymentArray;
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

export default StepModalThird;