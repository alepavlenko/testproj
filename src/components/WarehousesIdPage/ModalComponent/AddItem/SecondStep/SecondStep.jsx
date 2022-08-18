import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {ButtonStyled} from "../AddItem.style";

const SecondStep = ({formik, nextStep}) => {
    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Select delivery method</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="delivery"
                value={formik.values.delivery}
                onChange={formik.handleChange}
            >
                <FormControlLabel value="Air" control={<Radio />} label="Air" />
                <FormControlLabel value="Sea" control={<Radio />} label="Sea" />
                <FormControlLabel value="Car" control={<Radio />} label="Car" />
            </RadioGroup>

            <div>
                <ButtonStyled onClick={nextStep} type="submit" variant="contained">Next step</ButtonStyled>
            </div>
        </FormControl>
    );
};

export default SecondStep;