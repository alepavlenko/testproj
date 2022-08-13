import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import style from './Warehouses.module.css'
import MyButton from "../../Common/MyButton/MyButton";
import {useState} from "react";
import MyModal from "../../Common/MyModal/MyModal";
import AddWarehouses from "../AddWarehouses/AddWarehouses";

function createData(name, wirehousesNumber, length, width, height) {
    return {
        name,
        wirehousesNumber,
        length,
        width,
        height,
    };
}

const rows = [
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Donut', 452, 25.0, 51, 4.9),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Honeycomb', 408, 3.2, 87, 6.5),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Jelly Bean', 375, 0.0, 94, 0.0),
    // createData('KitKat', 518, 26.0, 65, 7.0),
    // createData('Lollipop', 392, 0.2, 98, 0.0),
    // createData('Marshmallow', 318, 0, 81, 2.0),
    // createData('Nougat', 360, 19.0, 9, 37.0),
    // createData('Oreo', 437, 18.0, 63, 4.0),
]

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

function EnhancedTableHead({onSelectAllClick}) {

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                    >
                        <TableSortLabel>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const Warehouses = () => {
    const [selected, setSelected] = React.useState([]);
    const [openAddWarehouses, setOpenAddWarehouses] = useState(false)

    const EnhancedTableToolbar = () => {
        return (
            <Toolbar
                sx={{
                    pl: {sm: 2},
                    pr: {xs: 1, sm: 1},
                }}
            >
                <Typography
                    sx={{flex: '1 1 100%'}}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Warehouses
                </Typography>
                {/*FILTER BUTTON*/}
                <MyButton variant="contained" value='Add Warehouses' onClick={setOpenAddWarehouses} />
            </Toolbar>
        );
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    // DDDDDDDDDDDDDDDDDDDDDDDвопросы

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
                <Paper sx={{width: '100%', mb: 2}}>
                    <EnhancedTableToolbar numSelected={selected.length}/>
                    <TableContainer>
                        <Table>
                            <EnhancedTableHead
                                onSelectAllClick={handleSelectAllClick}
                            />
                                <TableBody>
                                    {rows.map((row, index) => {
                                            const isItemSelected = isSelected(row.name);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row.name)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.name}
                                                    selected={isItemSelected}
                                                    className={style.wrapRow}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            color="primary"
                                                            checked={isItemSelected}
                                                            inputProps={{
                                                                'aria-labelledby': labelId,
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                        padding="none"
                                                    >
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="left">{row.wirehousesNumber}</TableCell>
                                                    <TableCell align="left">{row.length}</TableCell>
                                                    <TableCell align="left">{row.width}</TableCell>
                                                    <TableCell align="left">{row.height}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
            <MyModal
                open={openAddWarehouses}
                handleClose={setOpenAddWarehouses}
                content={<AddWarehouses
                    handleClose={setOpenAddWarehouses}
                    // openNext={setOpenLogIn}
                    value="Adding a warehouses"
                />}
            />
        </div>

    );
}
export default Warehouses;