import React from 'react';

import MyButton from "../../Common/MyButton/MyButton";

import style from './TypographyBlock.module.css'

const TypographyBlock = () => {
    return (
        <div>
            <div>
                <p className={style.bigText} >We will deliver your cargo exactly on time</p>
                <p className={style.smallText}>For us, goods are our most valuable assets.
                    So that with certainty we can provide the best service for your goods
                </p>
                <MyButton variant="contained" value="Get Started" />
            </div>
        </div>
    );
};

export default TypographyBlock;