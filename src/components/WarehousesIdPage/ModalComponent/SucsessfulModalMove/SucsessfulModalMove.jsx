import React from 'react';
import {ButtonStyled, FormStyled} from "../../../WarehousesPage/ModalComponent/SucksesModal/SucksesModal.style";
import CargoMoving from "../../../Common/Icons/CargoMoving";
import style from "../SucksesModalMove/SucksesModalMove.module.css";

const SucsessfulModalMove = ({handleClose}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        handleClose(false)
    }
    return (
        <>
            <FormStyled onSubmit={handleSubmit}>
                <CargoMoving/>
                <div className={style.wrapText}>
                    <h1>Cargo was successfully moved</h1>
                </div>
                <div>
                    <ButtonStyled  type="submit" variant="contained">Continue</ButtonStyled>
                </div>
            </FormStyled>
        </>
    );
};


export default SucsessfulModalMove;