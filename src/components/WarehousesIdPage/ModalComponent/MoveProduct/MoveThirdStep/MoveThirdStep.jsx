import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import style from './MoveThirdStep.module.css'

const MoveThirdStep = ({formik}) => {
    return (
        <div className={style.wrapForm}>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Choose a payment method</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="payment"
                    value={formik.values.payment}
                    onChange={formik.handleChange}
                >
                    <FormControlLabel value="Visa, Mastercard" control={<Radio />} label="Visa, Mastercard" />
                    <FormControlLabel value="Palypal" control={<Radio />} label="Palypal" />
                    <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default MoveThirdStep;