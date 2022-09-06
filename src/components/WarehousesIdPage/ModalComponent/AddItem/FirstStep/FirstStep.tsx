import React from 'react';

import {ButtonStyled} from "../AddItem.style";
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

import style from "../AddItem.module.css";
import {FormikProps} from "formik";
import {MyValuesProduct} from "../AddItem";

interface FirstStepProps {
    nextStep: () => void
    formik: FormikProps<MyValuesProduct>
}

const FirstStep = ({nextStep, formik}: FirstStepProps) => {
    const addWarehousesFormInputs = [
        {
            placeholder: 'Enter a name',
            name: 'name',
            label: 'Product name',
        },
        {
            placeholder: 'Enter a name',
            name: 'manufacturer',
            label: 'Manufacturer',
        },
        {
            placeholder: 'Enter the number',
            name: 'number',
            label: 'Item number',
        },
    ]
    const arrayPursharing = ["A", "S", "D", "F"];

    return (
        <>
            {addWarehousesFormInputs.map(({label, placeholder, name}) => (
                <div key={name} className={style.wrapInput}>
                    <label htmlFor={name}>{label}</label>
                    <input
                        className={style.wrapTextInput}
                        placeholder={placeholder}
                        id={name}
                        name={name}
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values[name]}
                    />
                    {formik.errors[name] && formik.touched[name] ? (
                        <div className={style.wrapError}>{formik.errors[name]}</div>
                    ) : null}
                </div>
            ))}
            <FormLabel id="demo-row-radio-buttons-group-label">Purchasing technology</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="purchasing"
                value={formik.values.purchasing}
                onChange={formik.handleChange}
            >
                {arrayPursharing.map(item => (<FormControlLabel value={item} control={<Radio/>} label={item}/>))}
            </RadioGroup>
            <div>
                <ButtonStyled onClick={nextStep} type="submit" variant="contained">Next step</ButtonStyled>
            </div>
        </>
    );
};

export default FirstStep;