import React from 'react';
import {ButtonStyled} from "../MoveProduct.style";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Move from "../../../../Common/Icons/Move";
import style from './MoveFirstStep.module.css'
import {getWarehouses} from "../../../../../redux/selectors/warehousesSelectors";
import {useAppSelector} from "../../../../../redux/store";
import {MyValues} from "../MoveProduct";
import {FormikProps} from "formik";

interface MoveFirstStep {
    nextStep: () => void
    formik: FormikProps<MyValues>
    warehouseId: string | undefined
}

interface warehousesIterElem {
    name: string
    numberProduct: string
    length: number
    width: number
    height: number
    user: string
    _id: string
}

const MoveFirstStep = ({nextStep, formik, warehouseId}: MoveFirstStep) => {
    const warehouses: any = useAppSelector(getWarehouses)

    const basedWarehourses = warehouses.find((ware: warehousesIterElem) => ware._id === warehouseId)
    const nameBasedWare = basedWarehourses.name;
    const anotherWarehourses = warehouses.filter((ware: warehousesIterElem) => !warehouseId?.includes(ware._id))

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
                    {anotherWarehourses.map((warehouses: warehousesIterElem) =>
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