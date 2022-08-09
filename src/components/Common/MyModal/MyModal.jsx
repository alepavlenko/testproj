import React from 'react';

import {ButtonStyled, DialogContentStyled, DialogStyled, DialogTitleStyled, FormStyled} from "./MyModal.styled";
import * as Yup from 'yup';
import {useFormik} from 'formik';

import style from './MyModal.module.css'

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),

});

const MyModal = ({open, handleClose, value, checkAuth, openNext, validError, setValidError}) => {

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            if(checkAuth(values)){
                setTimeout(() => {
                    handleClose()
                }, 100)
            } else{
                if(value === "Log in"){
                    setValidError(true)
                }
            }
        },
    });

    const openNextModal = () => {
        handleClose();
        openNext(true);
    }

    return (
        <DialogStyled
            open={open}
            onClose={handleClose}
        >
            <DialogTitleStyled id="alert-dialog-title">
                <div className={style.wrapDivBut}>
                    <button className={style.wrapClose} onClick={handleClose}>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L9.93934 11L0.469671 20.4697C0.176777 20.7626 0.176777 21.2374 0.469671 21.5303C0.762564 21.8232 1.23744 21.8232 1.53033 21.5303L11 12.0607L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L12.0607 11L21.5303 1.53033C21.8232 1.23744 21.8232 0.762563 21.5303 0.46967C21.2374 0.176777 20.7626 0.176777 20.4697 0.46967L11 9.93934L1.53033 0.46967Z"
                                  fill="#3E4C59" fill-opacity="0.4"/>
                        </svg>
                    </button>
                </div>
            </DialogTitleStyled>
            <DialogContentStyled>
                <h1>{value}</h1>
                <FormStyled onSubmit={formik.handleSubmit}>
                    <div className={style.wrapInput}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            placeholder='Enter a email'
                            id="email"
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <div className={style.wrapError}>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className={style.wrapInput}>
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder='Enter password'
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {validError
                            ? <div className={style.wrapError}>Ошибка</div>
                            : null}
                        {formik.errors.password && formik.touched.password
                            ? (<div className={style.wrapError}>{formik.errors.password}</div>)
                            : null}
                    </div>
                    <div>
                        <ButtonStyled type="submit" variant="contained">{value}</ButtonStyled>
                    </div>
                    <div className={style.wrapText}>
                        {value === "Sign up"
                            ?
                            <p>Already have an account? <a className={style.wrapLink} onClick={openNextModal}>Log in</a>
                            </p>
                            : <p> No account? <a className={style.wrapLink} onClick={openNextModal}>Create one</a></p>
                        }

                    </div>
                </FormStyled>
            </DialogContentStyled>
        </DialogStyled>
    );
};

export default MyModal;