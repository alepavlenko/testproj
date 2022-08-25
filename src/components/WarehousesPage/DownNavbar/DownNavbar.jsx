import React, {useContext} from 'react';

import style from './DownNavbar.module.css'
import {Context} from "../../../App";
import Selected from "../../Common/Icons/Selected";
import {removeSelectedRow} from "../../../utils/deletedSelectedWarehouses";

const DownNavbar = ({stateSelected, setStateSelected}) => {

    const { wareHouses, setWareHouses, token } = useContext(Context)


    const removeSelected = () => {
        const categoy = 'warehouses'
        removeSelectedRow(categoy, stateSelected, setStateSelected, wareHouses, setWareHouses, token)
    }
    console.log('selected ',stateSelected)

    return (
        <div className={style.downBar}>
            <div className={style.innerWrap}>
                <div className={style.wrapSelected}>
                    <Selected/>
                    <div className={style.wrapText}>Selected: {stateSelected.length}</div>
                </div>
                <button className={style.wrapButton} onClick={removeSelected} >Delete</button>
            </div>
        </div>
    );
};

export default DownNavbar;