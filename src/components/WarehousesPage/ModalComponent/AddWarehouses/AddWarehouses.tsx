import React from 'react';
import {useFormik} from "formik";

import {ButtonStyled, FormStyled} from './AddWarehouses.style';

import {AddWarehousesSchema} from "./AddWarehousesForm";
import style from './AddWarehouses.module.css'
import {warehousesActions} from "../../../../redux/actions/warehousesAction";
import {useAppDispatch} from "../../../../redux/store";
interface AddWarehousesProps {
    handleClose: (value: boolean) => void
    openNext: (value: boolean) => void
    value: string
}

export interface MyValuesWarehouse extends Record<string, string | number>{
    nameWarehouses: string
    length: string
    width: string
    height: string
    name: string
    numberProduct: 0,
    user: string
    _id: string
}

const AddWarehouses = ({handleClose, openNext, value}: AddWarehousesProps) => {

    const dispatch = useAppDispatch()

    const handleCloseWrap = () => {
        formik.resetForm()
        handleClose(false);
    }

    const openNextModal = () => {
        handleCloseWrap();
        formik.resetForm()
        openNext(true);
    }

    const formik = useFormik<MyValuesWarehouse>({
            initialValues: {
                nameWarehouses: '',
                length: '',
                width: '',
                height: '',
                name: '',
                numberProduct: 0,
                user: '',
                _id: '',
            },
            validationSchema: AddWarehousesSchema,
            onSubmit: values => {
                dispatch(warehousesActions.addWarehouses({values}))
                handleCloseWrap();
                openNextModal()
            }
        }
    );

    const addWarehousesFormInputs = [
        {
            placeholder: 'Enter a name',
            name: 'nameWarehouses',
            label: 'Name of the warehouse',
        },
        {
            placeholder: 'Enter the length',
            name: 'length',
            label: 'Length, m',
        },
        {
            placeholder: 'Enter the width',
            name: 'width',
            label: 'Width, m',
        },
        {
            placeholder: 'Enter the height',
            name: 'height',
            label: 'Height, m',
        },
    ]

    return (
        <>
            <h1>{value}</h1>
            <FormStyled onSubmit={formik.handleSubmit}>
                {addWarehousesFormInputs.map(({label, placeholder, name}) => (
                    <div key={name} className={style.wrapInput}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            className={style.wrapTextInput}
                            placeholder={placeholder}
                            id={name}
                            name={name}
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values[name]}
                        />
                        {formik.errors[name] && formik.touched[name] ? (
                            <div className={style.wrapError}>{formik.errors[name]}</div>
                        ) : null}
                    </div>
                ))}
                <div>
                    <ButtonStyled type="submit" variant="contained">Add a warehouses</ButtonStyled>
                </div>
            </FormStyled>
        </>
    );
};

export default AddWarehouses;