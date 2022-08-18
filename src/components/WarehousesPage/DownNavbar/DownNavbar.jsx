import React, {useContext} from 'react';

import style from './DownNavbar.module.css'
import {Context} from "../../../App";
import Selected from "../../Common/Icons/Selected";

const DownNavbar = ({stateSelected, setStateSelected}) => {

    const { wareHouses, setWareHouses } = useContext(Context)

    const removeSelected = () => {
        const tempWarehouses = wareHouses.filter((warehouse) => !stateSelected.includes(warehouse.warehousesid))
        setWareHouses(tempWarehouses)
        setStateSelected([])
    }

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