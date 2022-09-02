import React from 'react';

import ExitButton from "../Icons/ExitButton";
import {DialogContentStyled, DialogStyled, DialogTitleStyled} from "./MyModal.styled";

import style from './MyModal.module.css'

interface MyModalProps {
    open: boolean
    handleClose: (value: boolean) => void
    children: JSX.Element
        // JSX.Element
}

const MyModal = ({open, handleClose, children}: MyModalProps) => {
    return (
        <DialogStyled open={open} onClose={() => handleClose(false)}>
            <DialogTitleStyled id="alert-dialog-title">
                <div className={style.wrapDivBut}>
                    <button className={style.wrapClose} onClick={() => handleClose(false)}>
                        <ExitButton/>
                    </button>
                </div>
            </DialogTitleStyled>
            <DialogContentStyled>{children}</DialogContentStyled>
        </DialogStyled>
    );
};

export default MyModal;