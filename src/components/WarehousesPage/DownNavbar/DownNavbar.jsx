import React from 'react';
import {useDispatch} from "react-redux";

import Selected from "../../Common/Icons/Selected";
import style from './DownNavbar.module.css'
import {deleteWarehouses} from "../../../redux/actions/warehousesAction";

const DownNavbar = ({stateSelected, setStateSelected}) => {

    const dispatch = useDispatch()

    const removeSelected = () => {
        const categoy = 'warehouses'
        dispatch(deleteWarehouses({categoy, stateSelected, setStateSelected}))
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