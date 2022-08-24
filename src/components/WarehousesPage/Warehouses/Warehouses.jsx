import React, {useContext, useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import MyModal from "../../Common/MyModal/MyModal";
import AddWarehouses from "../ModalComponent/AddWarehouses/AddWarehouses";
import SucksesModal from "../ModalComponent/SucksesModal/SucksesModal";
import DownNavbar from "../DownNavbar/DownNavbar";
import WarehousesTable from "../WarehousesTable/WarehousesTable";

import {Context} from "../../../App";
import style from './Warehouses.module.css'
import EnhancedTableToolbar from "../EnhancedTableToolbar/EnhancedTableToolbar";
import {getRows} from "../../../utils/gettingRowsWarehouses";

const headCells = ['All stores', 'Number of products', 'Length, m', 'Width, m', 'Height, m'];

const Warehouses = () => {

    const {wareHouses} = useContext(Context)

    const [selected, setSelected] = useState([]);
    const [rows, setRows] = useState([]);
    const [openAddWarehouses, setOpenAddWarehouses] = useState(false)
    const [openSucksesWarehouses, setOpenSucksesWarehouses] = useState(false)

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = getRows(wareHouses).map((n) => n.id);
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

    useEffect(() => {
        getRows(wareHouses).then((result) => {
            setRows(result)
        })
    }, [])

    return (
        <div className={style.wrapTable}>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2, boxShadow: 'none'}}>
                    <EnhancedTableToolbar
                        // numSelected={selected.length}
                        setOpenAddWarehouses={setOpenAddWarehouses}
                    />
                    {getRows(wareHouses).length === 0
                        ? <div className={style.wrapWarehouses}> Warehouses dosnt have </div>
                        : <TableContainer className={(selected.length >= 1) ? style.wrapBodyUltra : style.wrapBody}>
                            <WarehousesTable
                                selected={selected}
                                headCells={headCells}
                                handleSelectAllClick={handleSelectAllClick}
                                getRows={getRows}
                                isSelected={isSelected}
                                handleClick={handleClick}
                                wareHouses={wareHouses}
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