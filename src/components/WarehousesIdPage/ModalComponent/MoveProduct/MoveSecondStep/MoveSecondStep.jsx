import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {ButtonStyled} from "../MoveProduct.style";
import style from './MoveSecondStep.module.css'
import Checkbox from "@mui/material/Checkbox";


const MoveSecondStep = ({formik, nextStep}) => {
    return (
        <div className={style.wrapForm}>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Select delivery method</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="delivery"
                    value={formik.values.delivery}
                    onChange={formik.handleChange}
                >
                    <FormControlLabel value="Air" control={<Checkbox />} label="Air" />
                    <FormControlLabel value="Sea" control={<Radio />} label="Sea" />
                    <FormControlLabel value="Car" control={<Radio />} label="Car" />
                </RadioGroup>

                <div className={style.wrapButton}>
                    <ButtonStyled onClick={nextStep} type="submit" variant="contained">Next step</ButtonStyled>
                </div>
            </FormControl>
        </div>
    );
};

export default MoveSecondStep;