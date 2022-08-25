import React, {useContext} from 'react';
import {Context} from "../../../../App";
import {useFormik} from "formik";

import {ButtonStyled, FormStyled} from './AddWarehouses.style';
import {addWarehouses} from "../../../../utils/logicAddingWarehouses";
import {AddWarehousesSchema} from "./AddWarehousesForm";

import style from './AddWarehouses.module.css'

const AddWarehouses = ({handleClose, openNext, value}) => {
    const {wareHouses, setWareHouses, token} = useContext(Context)

    const handleCloseWrap = () => {
        formik.resetForm()
        handleClose();
    }

    const openNextModal = () => {
        handleCloseWrap();
        formik.resetForm()
        openNext(true);
    }

    const formik = useFormik({
        initialValues: {
            nameWarehouses: '',
            length: '',
            width: '',
            height: '',
        },
        validationSchema: AddWarehousesSchema,
        onSubmit: values => {
            addWarehouses(token, values, wareHouses, setWareHouses)
            handleCloseWrap();
            openNextModal()
        },
    });

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