import React, {useContext} from 'react';
import {ButtonStyled} from "../MoveProduct.style";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Move from "../../../../Common/Icons/Move";
import style from './MoveFirstStep.module.css'
import {Context} from "../../../../../App";

const MoveFirstStep = ({nextStep, formik, warehouseId}) => {
    const {wareHouses} = useContext(Context)

    const basedWarehourses = wareHouses.find((ware) => ware._id === warehouseId)
    const nameBasedWare = basedWarehourses.name;
    const anotherWarehourses = wareHouses.filter((ware) => !warehouseId.includes(ware._id))

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

            <div className={style.wrapChange}>
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
                    {anotherWarehourses.map((warehouses) =>
                        (<MenuItem
                            key={warehouses._id}
                            value={warehouses._id}
                        >
                            {warehouses.name}
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