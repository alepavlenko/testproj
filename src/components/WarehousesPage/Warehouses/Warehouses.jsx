import React, {useContext, useState} from 'react';

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
import {getRows} from "../../../Logic/Warehouses/logicAddingWarehouses";
import EnhancedTableToolbar from "../EnhancedTableToolbar/EnhancedTableToolbar";

const headCells = [
    {
        id: '1',
        label: 'All stores',
    },
    {
        id: '2',
        label: 'Number of products',
    },
    {
        id: '3',
        label: 'Length, m',
    },
    {
        id: '4',
        label: 'Width, m',
    },
    {
        id: '5',
        label: 'Height, m',
    },
];

const Warehouses = () => {
    const [selected, setSelected] = React.useState([]);
    const [openAddWarehouses, setOpenAddWarehouses] = useState(false)
    const [openSucksesWarehouses, setOpenSucksesWarehouses] = useState(false)

    const { wareHouses } = useContext(Context)

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

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <div className={style.wrapTable}>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2, boxShadow: 'none'}}>
                    <EnhancedTableToolbar
                        numSelected={selected.length}
                        setOpenAddWarehouses = {setOpenAddWarehouses}
                    />

                    {getRows(wareHouses).length === 0
                        ?<div className={style.wrapWarehouses}> Warehouses dosnt have </div>
                        :<TableContainer className={style.wrapBody} >
                            <WarehousesTable
                                headCells={headCells}
                                handleSelectAllClick = {handleSelectAllClick}
                                getRows = {getRows}
                                isSelected = {isSelected}
                                handleClick = {handleClick}
                                wareHouses={wareHouses}
                            />
                        </TableContainer>
                    }

                </Paper>
            </Box>
            <MyModal
                open={openAddWarehouses}
                handleClose={setOpenAddWarehouses}
                content={<AddWarehouses
                    handleClose={setOpenAddWarehouses}
                    openNext={setOpenSucksesWarehouses}
                    value="Adding a warehouses"
                />}
            />
            <MyModal
                open={openSucksesWarehouses}
                handleClose={setOpenSucksesWarehouses}
                content={<SucksesModal
                    handleClose={setOpenSucksesWarehouses}
                />}
            />
            {selected.length >= 1
                ?  <DownNavbar stateSelected={selected} setStateSelected={setSelected}  />
                :   <div></div>
            }
        </div>

    );
}
export default Warehouses;