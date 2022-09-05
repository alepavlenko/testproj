import React, {useState} from 'react';
import {NavigateFunction, useNavigate} from "react-router-dom";

import MyButton from "../../Common/MyButton/MyButton";
import MyModal from "../../Common/MyModal/MyModal";
import LogInForm from "../AuthForm/LogInForm/LogInForm";

import style from './TypographyBlock.module.css'
import {loginAuth, signUpAuth} from "../../../utils";
import {Routes} from '../../../constants/'
import {getAuth} from "../../../redux/selectors/authSelectors";
import {useAppSelector} from "../../../redux/store";

const TypographyBlock = () => {
    const navigate: NavigateFunction = useNavigate();
    const isAuth: boolean = useAppSelector(getAuth)

    const [openSignUp, setOpenSignUp] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false)
    const [validError, setValidError] = useState(false)

    const handleClose1 = () => {
        setValidError(false)
        setOpenSignUp(false);
        setOpenLogIn(false);
    };

    const handleClose = () => {
        setValidError(false)
        setOpenLogIn(false);
    };

    const butGetStart = () => {
        if (isAuth) {
            navigate(Routes.WAREHOUSES, {replace: true})
        } else {
            setOpenLogIn(true)
        }
    }

    return (
        <div>
            <div className={style.wrapText}>
                <p className={style.bigText}>We will deliver your cargo exactly on time</p>
                <p className={style.smallText}>For us, goods are our most valuable assets.
                    So that with certainty we can provide the best service for your goods
                </p>
                <MyButton variant="contained" value="Get Started" onClick={butGetStart}/>
                <MyModal open={openSignUp} handleClose={handleClose1}>
                    <LogInForm
                        checkAuth={signUpAuth}
                        handleClose={handleClose1}
                        validError={validError}
                        setValidError={setValidError}
                        openNext={setOpenLogIn}
                        value="Sign up"
                    />
                </MyModal>
                <MyModal open={openLogIn} handleClose={handleClose}>
                    <LogInForm
                        checkAuth={loginAuth}
                        handleClose={handleClose}
                        validError={validError}
                        setValidError={setValidError}
                        openNext={setOpenSignUp}
                        value="Log in"
                    />
                </MyModal>
            </div>
        </div>
    );
};

export default TypographyBlock;