import React, {useContext, useState} from 'react';
import {Context} from "../../../App";
import style from "./DownItemNavbar.module.css";
import Selected from "../../Common/Icons/Selected";
import MyModal from "../../Common/MyModal/MyModal";
import MoveProduct from "../ModalComponent/MoveProduct/MoveProduct";
import Move from "../../Common/Icons/Move";

const DownItemNavbar = ({stateSelected, setStateSelected}) => {

    const [openMoveProduct, setOpenMoveProduct] = useState(false)
    const [openSucksesMove, setOpenSucksesMove] = useState(false)

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

            <MyModal open={openMoveProduct} handleClose={setOpenMoveProduct}>
                <MoveProduct
                    stateSelected={stateSelected}
                    setStateSelected={setStateSelected}
                    handleClose={setOpenMoveProduct}
                    openNext={setOpenSucksesMove}
                    value="Move cargo"
                />
            </MyModal>
            {/*<MyModal open={openSucksesWarehouses} handleClose={setOpenSucksesWarehouses}>*/}
                {/*<SucksesModal handleClose={setOpenSucksesWarehouses}/>*/}
            {/*</MyModal>*/}

        </div>
    );
};

export default DownItemNavbar;