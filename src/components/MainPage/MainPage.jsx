import React from "react";

import NavBar from "./NavBar/NavBar";
import TypographyBlock from "./TypographyBlock/TypographyBlock";

import track from "../../assets/images/track 1.png";
import regtac from "../../assets/images/Rectangle 1373.png"
import style from './MainPage.module.css'

export const MainPage = () => {

    return (
        <div className={style.main}>
            <NavBar/>
            <TypographyBlock/>
            <div className={style.regtac}>
                <img src={regtac} alt="background track"/>
            </div>

            <div className={style.track}>
                <img src={track} alt="track"/>
            </div>
        </div>
    );
}