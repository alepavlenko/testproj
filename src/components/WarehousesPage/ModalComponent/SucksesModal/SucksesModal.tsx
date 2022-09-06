import React from 'react';

import SucksesWarehouses from "../../../Common/Icons/SucksesWarehouses";
import {ButtonStyled, FormStyled} from './SucksesModal.style';

import style from './SucksesModal.module.css'

interface SucksesModalProps{
    handleClose: (valuse: boolean) => void
}

const SucksesModal = ({handleClose}: SucksesModalProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleClose(false)
    }

    return (
        <>
            <FormStyled onSubmit={handleSubmit}>
                <SucksesWarehouses/>
                <div className={style.wrapText}>
                    <h1>Warehouse successfully added</h1>
                </div>
                <div>
                    <ButtonStyled type="submit" variant="contained">Continue</ButtonStyled>
                </div>
            </FormStyled>
        </>
    );
};

export default SucksesModal;