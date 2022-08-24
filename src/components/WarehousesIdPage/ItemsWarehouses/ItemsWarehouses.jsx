import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../App";
import style from "./ItemsWarehouses.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import MyModal from "../../Common/MyModal/MyModal";
import {getItems} from "../../../utils/gettingItems";
import ItemsTable from "../ItemsTable/ItemsTable";
import AddItem from "../ModalComponent/AddItem/AddItem";
import {useParams} from "react-router-dom";
import DownItemNavbar from "../DownItemNavbar/DownItemNavbar";
import EnhancedTableToolbarItem from "../EnhancedTableToolbarItem/EnhancedTableToolbarItem";
import SucksesModalAdding from "../ModalComponent/SucksesModalAdding/SucksesModalAdding";
import MoveProduct from "../ModalComponent/MoveProduct/MoveProduct";
import SucsessfulModalMove from "../ModalComponent/SucsessfulModalMove/SucsessfulModalMove";

const headCells = ['All products', 'Manufacturer', 'Item number', 'Purchasing technology', 'Shipment method'];

const ItemsWarehouses = () => {

    const {warehouseId} = useParams();
    const {items} = useContext(Context)

    const [selected, setSelected] = useState([]);
    const [openAddProduct, setOpenAddProduct] = useState(false)
    const [openSucksesWarehouses, setOpenSucksesWarehouses] = useState(false)

    const [openMoveProduct, setOpenMoveProduct] = useState(false)
    const [suckModal, setSuckModal] = useState(false)

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = getItems(items, warehouseId).map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    console.log('id ',warehouseId)

    return (
        <div className={style.wrapTable}>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2, boxShadow: 'none'}}>
                    <EnhancedTableToolbarItem
                        warehouseId={warehouseId}
                        setOpenAddWarehouses={setOpenAddProduct}
                    />
                    {getItems(items, warehouseId).length === 0
                        ? <div className={style.wrapWarehouses}> Items dosnt have </div>
                        : <TableContainer className={(selected.length >= 1) ? style.wrapBodyUltra : style.wrapBody}>
                            <ItemsTable
                                selected={selected}
                                headCells={headCells}
                                handleSelectAllClick={handleSelectAllClick}
                                getItems={getItems}
                                isSelected={isSelected}
                                handleClick={handleClick}
                                items={items}
                                warehouseId={warehouseId}
                            />
                        </TableContainer>
                    }
                </Paper>
            </Box>
            <MyModal open={openAddProduct} handleClose={setOpenAddProduct}>
                <AddItem
                    handleClose={setOpenAddProduct}
                    openNext={setOpenSucksesWarehouses}
                    value="Adding a product"
                />
            </MyModal>
            <MyModal open={openSucksesWarehouses} handleClose={setOpenSucksesWarehouses}>
                <SucksesModalAdding handleClose={setOpenSucksesWarehouses}/>
            </MyModal>

            <MyModal open={openMoveProduct} handleClose={setOpenMoveProduct}>
                <MoveProduct
                    handleClose={setOpenMoveProduct}
                    openNext={setSuckModal}
                    value="Move cargo"
                    stateSelected={selected}
                    setStateSelected={setSelected}
                />
            </MyModal>
            <MyModal open={suckModal} handleClose={setSuckModal} >
                <SucsessfulModalMove handleClose={setSuckModal} />
            </MyModal>
            {selected.length >= 1
                ? <DownItemNavbar setOpenMoveProduct={setOpenMoveProduct} stateSelected={selected} setStateSelected={setSelected}/>
                : <div></div>
            }
        </div>
    );
};

export default ItemsWarehouses;