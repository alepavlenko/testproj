import React from 'react';
import {ButtonStyled} from "../MoveProduct.style";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Move from "../../../../Common/Icons/Move";
import style from './MoveFirstStep.module.css'

const MoveFirstStep = ({nextStep, formik, warehouseId}) => {

    const selectWarehouses = JSON.parse(localStorage.getItem('warehouses'))
    const basedWarehourses = selectWarehouses.filter((ware) => ware.warehousesid === warehouseId)
    const nameBasedWare = basedWarehourses[0].nameWarehouses;

    return (
            <div className={style.wrapForm}>
                <p>From</p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{nameBasedWare}</InputLabel>
                    <Select
                        disabled
                        value={formik.values.baseWarehouses}
                        label={nameBasedWare}
                        onChange={formik.handleChange}
                        id={warehouseId}
                        name='baseWarehouses'
                    />
                </FormControl>

                <div className={style.wrapChange} >
                    <Move/>
                </div>

                <p>In</p>
                <FormControl fullWidth>
                    <InputLabel id="demo-label">Select a warehouse</InputLabel>
                    <Select
                        value={formik.values.selectWarehouses}
                        label="Warehouses"
                        onChange={formik.handleChange}
                        id={warehouseId}
                        name='selectWarehouses'
                    >
                        {selectWarehouses.map((warehouses) =>
                            (<MenuItem
                                key={warehouses.warehousesid}
                                value={warehouses.warehousesid}
                            >
                                {warehouses.nameWarehouses}
                            </MenuItem>)
                        )}

                    </Select>
                </FormControl>

                <div className={style.wrapButton}>
                    <ButtonStyled onClick={nextStep} type="submit" variant="contained">Next step</ButtonStyled>
                </div>
            </div>
    );
};

export default MoveFirstStep;