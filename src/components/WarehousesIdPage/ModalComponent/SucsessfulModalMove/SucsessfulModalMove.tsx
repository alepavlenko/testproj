import React from 'react';
import {ButtonStyled, FormStyled} from "../../../WarehousesPage/ModalComponent/SucksesModal/SucksesModal.style";
import CargoMoving from "../../../Common/Icons/CargoMoving";
import style from "./SucsessfulModalMove.module.css";

interface SucsessfulModalMoveProps {
    handleClose: (value: boolean) => void

}

const SucsessfulModalMove = ({handleClose}: SucsessfulModalMoveProps) => {
    const handleSubmit = (event: any) => {
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