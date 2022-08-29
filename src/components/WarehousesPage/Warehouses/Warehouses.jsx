import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../../App";

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
import {getRows} from "../../../utils/gettingRowsWarehouses";
import {useDispatch, useSelector} from "react-redux";
import {fetchWarehouses} from "../../../redux/store/warehousesReducer";

const headCells = ['All stores', 'Number of products', 'Length, m', 'Width, m', 'Height, m'];

const Warehouses = () => {

    const {wareHouses, setWareHouses, token, setIsAuth} = useContext(Context)

    const [selected, setSelected] = useState([]);
    const [openAddWarehouses, setOpenAddWarehouses] = useState(false)
    const [openSucksesWarehouses, setOpenSucksesWarehouses] = useState(false)

    const warehouses = useSelector(state => state.warehousesReducer.warehouses)
    const dispatch = useDispatch()

    console.log('after', warehouses)

    useEffect(() => {
        dispatch(fetchWarehouses('qweqweqwe'))
    }, [])

    console.log('before', warehouses)

    // useEffect(() => {
    //     getRows(token, setIsAuth).then((result) => {
    //         setWareHouses(result)
    //     })
    // }, [])

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = warehouses.map((n) => n._id);
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
                        setOpenAddWarehouses={setOpenAddWarehouses}
                    />
                    {warehouses.length === 0
                        ? <div className={style.wrapWarehouses}> Warehouses doesn't have </div>
                        : <TableContainer className={(selected.length >= 1) ? style.wrapBodyUltra : style.wrapBody}>
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