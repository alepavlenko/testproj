import React from 'react';
import {ButtonStyled, FormStyled} from "../../../WarehousesPage/ModalComponent/SucksesModal/SucksesModal.style";
import style from "./SucksesModalAdding.module.css";
import CargoAdding from "../../../Common/Icons/CargoAdding";

const SucksesModalAdding = ({handleClose}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        handleClose(false)
    }

    return (
        <>
            <FormStyled onSubmit={handleSubmit}>
                <CargoAdding/>
                <div className={style.wrapText}>
                    <h1>The cargo was successfully created</h1>
                </div>
                <div>
                    <ButtonStyled  type="submit" variant="contained">Continue</ButtonStyled>
                </div>
            </FormStyled>
        </>
    );
};
export default SucksesModalAdding;