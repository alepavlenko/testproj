import React from 'react';

import Selected from "../../Common/Icons/Selected";
import Move from "../../Common/Icons/Move";

import style from "./DownItemNavbar.module.css";
import {useDispatch} from "react-redux";
import {deleteProducts} from "../../../redux/actions/productAction";

interface DownItemNavbarProps {
    setOpenMoveProduct: (value: boolean) => void
    stateSelected: Array<string>
    setStateSelected: any
    // (Array<string>) => Array<string>
}

const DownItemNavbar = ({setOpenMoveProduct, stateSelected, setStateSelected}: DownItemNavbarProps) => {

    const dispatch = useDispatch()

    const removeSelected = () => {
        const categoy = 'products'
        dispatch(deleteProducts({categoy, stateSelected, setStateSelected}))
    }

    return (
        <div className={style.downBar}>
            <div className={style.innerWrap}>
                <div className={style.wrapSelected}>
                    <Selected/>
                    <div className={style.wrapText}>Selected: {stateSelected.length}</div>
                </div>
                <div className={style.wrapButtonGroup}>
                    <button className={style.wrapButton} onClick={removeSelected}>Delete</button>
                    <button className={style.wrapButtonMove} onClick={() => setOpenMoveProduct(true)}>
                        Move
                        <Move/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DownItemNavbar;