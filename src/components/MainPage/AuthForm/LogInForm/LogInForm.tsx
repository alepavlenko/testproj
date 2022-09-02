import React from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useFormik} from "formik";

import {ButtonStyled, FormStyled} from "./LogInForm.style";
import {LoginSchema} from "./LoginFormValidation";

import style from "./LogInForm.module.css";
import {Routes} from '../../../../constants'
import {useDispatch} from "react-redux";
import {setAuth} from "../../../../redux/actions/authActions";

interface LogInFormProps {
    checkAuth: (
        values: {password: string, email: string},
        setValidError: (value: boolean) => void
    ) => Promise<boolean>
    setValidError: (value: boolean) => void
    handleClose: () => void
    validError: boolean
    openNext: (value: boolean) => void
    value: string
}



const LogInForm = ({checkAuth, setValidError, handleClose, validError, openNext, value}: LogInFormProps) => {
    let navigate: NavigateFunction = useNavigate();
    const dispatch = useDispatch()

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
            password: '',
            email: '',
        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            if (await checkAuth(values, setValidError)) {
                handleCloseWrap()
                if ((value === "Sign up")) {
                    openNext(true)
                } else if (value === "Log in") {
                    navigate(Routes.WAREHOUSES, {replace: true})
                    dispatch(setAuth(true))
                }
            } else {
                if (value === "Log in") {
                    setValidError(true)
                }
            }
        },
    });

    return (
        <>
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
                        <p>Already have an account? <a className={style.wrapLink} onClick={openNextModal}>Log in</a></p>
                        : <p> No account? <a className={style.wrapLink} onClick={openNextModal}>Create one</a></p>
                    }
                </div>
            </FormStyled>
        </>
    );
};

export default LogInForm;