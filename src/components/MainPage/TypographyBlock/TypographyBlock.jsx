import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import MyButton from "../../Common/MyButton/MyButton";
import MyModal from "../../Common/MyModal/MyModal";
import LogInForm from "../AuthForm/LogInForm/LogInForm";

import {Context} from "../../../App";
import style from './TypographyBlock.module.css'
import {loginAuth, signUpAuth} from "../../../utils";
import {Routes} from '../../../constants/'

const TypographyBlock = () => {
    const navigate = useNavigate();

    const {isAuth} = useContext(Context)

    const [openSignUp, setOpenSignUp] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false)
    const [validError, setValidError] = useState(null)

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
        if(isAuth){
            navigate(Routes.WAREHOUSES, {replace: true})
        } else{
            setOpenLogIn(true)
        }
    }

    return (
        <div>
            <div>
                <p className={style.bigText} >We will deliver your cargo exactly on time</p>
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