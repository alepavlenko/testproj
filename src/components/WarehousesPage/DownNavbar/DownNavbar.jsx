import React, {useContext} from 'react';

import style from './DownNavbar.module.css'
import {Context} from "../../../App";

const DownNavbar = ({stateSelected, setStateSelected}) => {

    const { wareHouses, setWareHouses } = useContext(Context)

    const removeSelected = () => {
        const tempWarehouses = wareHouses.filter((warehouse) => !stateSelected.includes(warehouse.warehousesid))
        setWareHouses(tempWarehouses)
        setStateSelected([])
    }

    return (
        <div className={style.downBar}>
            <div>
            Selected
            </div>
            <button onClick={removeSelected} >CLICK</button>
        </div>
    );
};

export default DownNavbar;