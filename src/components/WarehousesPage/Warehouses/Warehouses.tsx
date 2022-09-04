import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import MyModal from "../../Common/MyModal/MyModal";
import AddWarehouses from "../ModalComponent/AddWarehouses/AddWarehouses";
import SucksesModal from "../ModalComponent/SucksesModal/SucksesModal";
import DownNavbar from "../DownNavbar/DownNavbar";
import EnhancedTableToolbar from "../EnhancedTableToolbar/EnhancedTableToolbar";
import WarehousesTable from "../WarehousesTable/WarehousesTable";

import style from './Warehouses.module.css'
import Loader from "../../Common/Loader/Loader";
import {fetchWarehouses} from "../../../redux/actions/warehousesAction";
import {getLoadingWarehouses, getWarehouses} from "../../../redux/selectors/warehousesSelectors";

const headCells = ['All stores', 'Number of products', 'Length, m', 'Width, m', 'Height, m'];

interface warehousesIterElem {
    name: string
    numberProduct: string
    length: number
    width: number
    height: number
    user: string
    _id?: string
}

const Warehouses = () => {

    const dispatch = useDispatch()

    const warehouses: any = useSelector(getWarehouses)
    const loading: any = useSelector(getLoadingWarehouses)

    const [selected, setSelected] = useState<string[]>([]);
    const [openAddWarehouses, setOpenAddWarehouses] = useState<boolean>(false)
    const [openSucksesWarehouses, setOpenSucksesWarehouses] = useState<boolean>(false)

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const handleSelectAllClick = (event: any) => {
        if (event.target.checked) {
            const newSelected = warehouses.map((n: warehousesIterElem) => n._id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (name: string) => {
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
        dispatch(fetchWarehouses({}))

    }, [])

    return (
        <div className={style.wrapTable}>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2, boxShadow: 'none'}}>
                    <EnhancedTableToolbar
                        setOpenAddWarehouses={setOpenAddWarehouses}
                    />

                    {loading
                        ? <div className={style.wrapLoader}><Loader/></div>
                        :
                        <>
                            {warehouses.length === 0
                                ? <div className={style.wrapWarehouses}> Warehouses doesn't have </div>
                                : <TableContainer
                                    className={(selected.length >= 1) ? style.wrapBodyUltra : style.wrapBody}>
                                    <WarehousesTable
                                        selected={selected}
                                        headCells={headCells}
                                        handleSelectAllClick={handleSelectAllClick}
                                        wareHouses={warehouses}
                                        isSelected={isSelected}
                                        handleClick={handleClick}
                                    />
                                </TableContainer>
                            }
                        </>
                    }

                </Paper>
            </Box>
            <MyModal open={openAddWarehouses} handleClose={setOpenAddWarehouses}>
                <AddWarehouses
                    handleClose={setOpenAddWarehouses}
                    openNext={setOpenSucksesWarehouses}
                    value="Adding a warehouses"
                />
            </MyModal>
            <MyModal open={openSucksesWarehouses} handleClose={setOpenSucksesWarehouses}>
                <SucksesModal handleClose={setOpenSucksesWarehouses}/>
            </MyModal>
            {selected.length >= 1
                ? <DownNavbar stateSelected={selected} setStateSelected={setSelected}/>
                : <div></div>
            }
        </div>

    );
}
export default Warehouses;