import React from 'react';

import Selected from "../../Common/Icons/Selected";
import Move from "../../Common/Icons/Move";

import style from "./DownItemNavbar.module.css";
import {productsActions} from "../../../redux/actions/productAction";
import {useAppDispatch} from "../../../redux/store";

interface DownItemNavbarProps {
    setOpenMoveProduct: (value: boolean) => void
    stateSelected: Array<string>
    setStateSelected: (value: string[]) => void
}

const DownItemNavbar = ({setOpenMoveProduct, stateSelected, setStateSelected}: DownItemNavbarProps) => {

    const dispatch = useAppDispatch()

    const removeSelected = () => {
        const category = 'products'
        dispatch(productsActions.deleteProducts({category, stateSelected, setStateSelected}))
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