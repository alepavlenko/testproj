import React, {useContext} from 'react';
import {Context} from "../../../App";
import style from "./DownItemNavbar.module.css";
import Selected from "../../Common/Icons/Selected";
import Move from "../../Common/Icons/Move";

const DownItemNavbar = ({setOpenMoveProduct, stateSelected, setStateSelected}) => {

    const { items, setItems } = useContext(Context)

    const removeSelected = () => {
        const tempWarehouses = items.filter((item) => !stateSelected.includes(item.id))
        setItems(tempWarehouses)
        setStateSelected([])
    }

    return (
        <div className={style.downBar}>
            <div className={style.innerWrap}>
                <div className={style.wrapSelected}>
                    <Selected/>
                    <div className={style.wrapText}>Selected: {stateSelected.length}</div>
                </div>
                <div className={style.wrapButtonGroup}>
                    <button className={style.wrapButton} onClick={removeSelected} >Delete</button>
                    <button className={style.wrapButtonMove} onClick={setOpenMoveProduct}>
                        Move
                        <Move/>
                    </button>
                </div>
            </div>



        </div>
    );
};

export default DownItemNavbar;