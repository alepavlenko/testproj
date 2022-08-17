import React from 'react';

import ExitButton from "../Icons/ExitButton";

import style from './MyModal.module.css'
import {DialogContentStyled, DialogStyled, DialogTitleStyled} from "./MyModal.styled";

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