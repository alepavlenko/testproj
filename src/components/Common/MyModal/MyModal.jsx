import React from 'react';

import ExitButton from "../Icons/ExitButton";
import {DialogContentStyled, DialogStyled, DialogTitleStyled} from "./MyModal.styled";

import style from './MyModal.module.css'

const MyModal = ({open, handleClose, children}) => {

    const handleCloseWrap = () => {
        handleClose(false);
    }

    return (
        <DialogStyled open={open} onClose={handleCloseWrap}>
            <DialogTitleStyled id="alert-dialog-title">
                <div className={style.wrapDivBut}>
                    <button className={style.wrapClose} onClick={handleCloseWrap}>
                        <ExitButton/>
                    </button>
                </div>
            </DialogTitleStyled>
            <DialogContentStyled>{children}</DialogContentStyled>
        </DialogStyled>
    );
};

export default MyModal;