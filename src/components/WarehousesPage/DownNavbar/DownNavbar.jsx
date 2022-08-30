import React, {useContext} from 'react';
import {Context} from "../../../App";

import Selected from "../../Common/Icons/Selected";

import style from './DownNavbar.module.css'
import {useDispatch} from "react-redux";
import {deleteWarehouses} from "../../../redux/store/warehousesReducer";

const DownNavbar = ({stateSelected, setStateSelected}) => {

    const {token} = useContext(Context)
    const dispatch = useDispatch()

    const removeSelected = () => {
        const categoy = 'warehouses'
        dispatch(deleteWarehouses({categoy, stateSelected, setStateSelected, token}))
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