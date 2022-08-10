import React, {useContext} from 'react';
import * as Yup from 'yup';

import {useFormik} from 'formik';
import ExitButton from "../../icons/ExitButton";


import {Context} from "../../../App";
import {ButtonStyled, DialogContentStyled, DialogStyled, DialogTitleStyled, FormStyled} from "./MyModal.styled";
import style from './MyModal.module.css'
import {useNavigate} from "react-router-dom";


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

    const [isAuth, setIsAuth] = useContext(Context)
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            if (checkAuth(values, setValidError)) {
                handleCloseWrap()
                if ((value === "Sign up")) {
                    openNext(true)
                }
                else if (value === "Log in"){
                    navigate('/warehouses', {replace: true})
                    setIsAuth(true)
                }
            } else {
                if (value === "Log in") {
                    setValidError(true)
                }
            }
        },
    });

    const handleCloseWrap = () => {
        formik.resetForm()
        handleClose();
    }
    const openNextModal = () => {
        handleCloseWrap();
        formik.resetForm()
        openNext(true);
    }

    return (
        <DialogStyled
            open={open}
            onClose={handleCloseWrap}
        >
            <DialogTitleStyled id="alert-dialog-title">
                <div className={style.wrapDivBut}>
                    <button className={style.wrapClose} onClick={handleCloseWrap}>
                        <ExitButton/>
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