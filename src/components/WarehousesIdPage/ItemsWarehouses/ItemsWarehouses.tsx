import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import MyModal from "../../Common/MyModal/MyModal";
import ItemsTable from "../ItemsTable/ItemsTable";
import AddItem from "../ModalComponent/AddItem/AddItem";
import DownItemNavbar from "../DownItemNavbar/DownItemNavbar";
import EnhancedTableToolbarItem from "../EnhancedTableToolbarItem/EnhancedTableToolbarItem";
import SucksesModalAdding from "../ModalComponent/SucksesModalAdding/SucksesModalAdding";
import MoveProduct from "../ModalComponent/MoveProduct/MoveProduct";
import SucsessfulModalMove from "../ModalComponent/SucsessfulModalMove/SucsessfulModalMove";

import style from "./ItemsWarehouses.module.css";
import Loader from "../../Common/Loader/Loader";
import {productsActions} from "../../../redux/actions/productAction";
import {getItems, getLoadingProducts} from "../../../redux/selectors/productSelectors";
import {warehousesActions} from "../../../redux/actions/warehousesAction";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {warehousesItem} from "../../../types/warehouse";

const headCells = ['All products', 'Manufacturer', 'Item number', 'Purchasing technology', 'Shipment method'];

const ItemsWarehouses = () => {

    const dispatch = useAppDispatch()
    const {warehouseId} = useParams<{ warehouseId: string }>();

    const items: any = useAppSelector(getItems)
    const loading = useAppSelector(getLoadingProducts)

    const [selected, setSelected] = useState<string[]>([]);
    const [openAddProduct, setOpenAddProduct] = useState<boolean>(false)
    const [openSucksesWarehouses, setOpenSucksesWarehouses] = useState<boolean>(false)
    const [openMoveProduct, setOpenMoveProduct] = useState<boolean>(false)
    const [suckModal, setSuckModal] = useState<boolean>(false)

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = items.map((n: warehousesItem) => n._id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];

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

    useEffect(() => {
        dispatch(productsActions.fetchProducts({warehouseId}))
        dispatch(warehousesActions.fetchWarehouses({}))
    }, [])

    return (
        <div className={style.wrapTable}>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2, boxShadow: 'none'}}>
                    <EnhancedTableToolbarItem
                        warehouseId={warehouseId}
                        setOpenAddWarehouses={setOpenAddProduct}
                    />
                    {loading
                        ? <div className={style.wrapLoader}> <Loader/> </div>
                        :<>{items.length === 0
                            ? <div className={style.wrapWarehouses}> Items dosnt have </div>
                            : <TableContainer className={(selected.length >= 1) ? style.wrapBodyUltra : style.wrapBody}>
                                <ItemsTable
                                    selected={selected}
                                    headCells={headCells}
                                    handleSelectAllClick={handleSelectAllClick}
                                    isSelected={isSelected}
                                    handleClick={handleClick}
                                    items={items}
                                />
                            </TableContainer>
                        }</>
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
            <MyModal open={suckModal} handleClose={setSuckModal}>
                <SucsessfulModalMove handleClose={setSuckModal}/>
            </MyModal>
            {selected.length >= 1
                ? <DownItemNavbar setOpenMoveProduct={setOpenMoveProduct} stateSelected={selected}
                                  setStateSelected={setSelected}/>
                : <div></div>
            }
        </div>
    );
};

export default ItemsWarehouses;