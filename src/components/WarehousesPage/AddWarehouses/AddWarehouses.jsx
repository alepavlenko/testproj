import React from 'react';
import * as Yup from "yup";
import {useFormik} from "formik";
import {ButtonStyled, FormStyled} from './AddWarehouses.style';
import style from './AddWarehouses.module.css'

const SignupSchema = Yup.object().shape({
    nameWarehouses: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    length: Yup.number()
        // .min(1, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    width: Yup.number()
        // .min(1, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    height: Yup.number()
        // .min(1, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
});

const AddWarehouses = ({handleClose, openNext, value }) => {

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
        validationSchema: SignupSchema,
        onSubmit: values => {
            console.log(values);
            handleCloseWrap();
        },
    });


    return (
        <>
            <h1>{value}</h1>
            <FormStyled onSubmit={formik.handleSubmit}>
                <div className={style.wrapInput}>
                    <label htmlFor="nameWarehouses">Name of the warehouse</label>
                    <input
                        className={style.wrapTextInput}
                        placeholder='Enter a name'
                        id="nameWarehouses"
                        name="nameWarehouses"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.nameWarehouses}
                    />
                    {formik.errors.nameWarehouses && formik.touched.nameWarehouses ? (
                        <div className={style.wrapError}>{formik.errors.nameWarehouses}</div>
                    ) : null}
                </div>

                <div className={style.wrapInput}>
                    <label htmlFor="length">Length, m</label>
                    <input
                        className={style.wrapTextInput}
                        placeholder='Enter the length'
                        id="length"
                        name="length"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.length}
                    />
                    {formik.errors.length && formik.touched.length ? (
                        <div className={style.wrapError}>{formik.errors.length}</div>
                    ) : null}
                </div>

                <div className={style.wrapInput}>
                    <label htmlFor="width">Width, m</label>
                    <input
                        className={style.wrapTextInput}
                        placeholder='Enter the width'
                        id="width"
                        name="width"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.width}
                    />
                    {formik.errors.width && formik.touched.width ? (
                        <div className={style.wrapError}>{formik.errors.width}</div>
                    ) : null}
                </div>

                <div className={style.wrapInput}>
                    <label htmlFor="height">Height, m</label>
                    <input
                        className={style.wrapTextInput}
                        placeholder='Enter the height'
                        id="height"
                        name="height"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.height}
                    />
                    {formik.errors.height && formik.touched.height ? (
                        <div className={style.wrapError}>{formik.errors.height}</div>
                    ) : null}
                </div>
                <div>
                    <ButtonStyled  type="submit" variant="contained">Add a warehouses</ButtonStyled>
                </div>
            </FormStyled>
        </>
    );
};

export default AddWarehouses;