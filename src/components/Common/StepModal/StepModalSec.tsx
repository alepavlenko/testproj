import React from 'react';

import {ListItemButtonStyled} from "../../WarehousesIdPage/ModalComponent/MoveProduct/MoveProduct.style";
import {ListItemText} from "@mui/material";

import style from "../../WarehousesIdPage/ModalComponent/MoveProduct/MoveThirdStep/MoveThirdStep.module.css";
import {deliveryArray} from "./arrayModal";

interface StepModalSecProps {
    selectedIndex: string
    formik: any
    handleListItemClick: (index: string) => void
}

const StepModalSec = ({selectedIndex, formik, handleListItemClick}: StepModalSecProps) => {

    const arrayItem: {value: string, text: string, logo: JSX.Element}[] = deliveryArray;

    return (
        <>
            {
                arrayItem.map(item =>
                    <ListItemButtonStyled
                        // default

                        selected={selectedIndex === item.value }
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