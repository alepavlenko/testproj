import style from './MainPage.module.css'
import React from "react";
import NavBar from "./NavBar/NavBar";
import TypographyBlock from "./TypographyBlock/TypographyBlock";
import track from "../../assets/images/track 1.png";
import regtac from "../../assets/images/Rectangle 1373.png"

export const MainPage = () => {

    return (
        <div className={style.main}>
        <NavBar/>
        <TypographyBlock/>
            <div className={style.regtac}>
                <img src={regtac}></img>
            </div>

            <div className={style.track}>
            <img src={track}></img>
        </div>


            {/*<LeftBlock/>*/}
            {/*<RightBlock/>*/}
        </div>
    );
}