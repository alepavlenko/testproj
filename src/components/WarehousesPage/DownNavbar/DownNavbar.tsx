import React from 'react';

import Selected from "../../Common/Icons/Selected";
import style from './DownNavbar.module.css'
import {warehousesActions} from "../../../redux/actions/warehousesAction";
import {useAppDispatch} from "../../../redux/store";

interface DownNavbarProps{
    stateSelected: string[]
    setStateSelected: (value: string[]) => void
}

const DownNavbar = ({stateSelected, setStateSelected}: DownNavbarProps) => {

    const dispatch = useAppDispatch()

    const removeSelected = () => {
        const category = 'warehouses'
        dispatch(warehousesActions.deleteWarehouses({category, stateSelected, setStateSelected}))
    }
    return (
        <div className={style.downBar}>
            <div className={style.innerWrap}>
                <div className={style.wrapSelected}>
                    <Selected/>
                    <div className={style.wrapText}>Selected: {stateSelected.length}</div>
                </div>
                <button className={style.wrapButton} onClick={removeSelected}>Delete</button>
            </div>
        </div>
    );
};

export default DownNavbar;