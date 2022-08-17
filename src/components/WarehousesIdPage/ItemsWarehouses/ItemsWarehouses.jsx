import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../App";
import style from "./ItemsWarehouses.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import MyModal from "../../Common/MyModal/MyModal";
import DownNavbar from "../../WarehousesPage/DownNavbar/DownNavbar";
import {getItems} from "../../../utils/gettingItems";
import EnhancedTableToolbar from "../../WarehousesPage/EnhancedTableToolbar/EnhancedTableToolbar";
import WarehousesTable from "../../WarehousesPage/WarehousesTable/WarehousesTable";
import ItemsTable from "../ItemsTable/ItemsTable";
import AddItem from "../ModalComponent/AddItem/AddItem";





const headCells = ['All products', 'Manufacturer', 'Item number', 'Purchasing technology', 'Shipment method'];


const ItemsWarehouses = () => {
    const {items} = useContext(Context)

    const [selected, setSelected] = useState([]);
    const [openAddProduct, setOpenAddProduct] = useState(false)
    const [openSucksesWarehouses, setOpenSucksesWarehouses] = useState(false)

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = getItems(items).map((n) => n.id);
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

    return (
        <div className={style.wrapTable}>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2, boxShadow: 'none'}}>
                    <EnhancedTableToolbar
                        numSelected={selected.length}
                        setOpenAddWarehouses={setOpenAddProduct}
                    />
                    {/*//getItems(items).length*/}
                    {getItems(items).length === 0
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
                {/*<SucksesModal handleClose={setOpenSucksesWarehouses}/>*/}
            </MyModal>
            {selected.length >= 1
                ? <DownNavbar stateSelected={selected} setStateSelected={setSelected}/>
                : <div></div>
            }
        </div>
    );
};

export default ItemsWarehouses;