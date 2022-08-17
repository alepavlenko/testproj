import React from 'react';
import {useFormik} from "formik";
import {AddWarehousesSchema} from "../AddItemForm";
import {ButtonStyled, FormStyled} from "../AddItem.style";
import style from "../AddItem.module.css";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const FirstStep = ({nextStep, formik}) => {


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
    console.log(formik.errors)

    return (
        <>
            {addWarehousesFormInputs.map(({ label, placeholder, name }) => (
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
                    <FormControlLabel value="A" control={<Radio />} label="A" />
                    <FormControlLabel value="S" control={<Radio />} label="S" />
                    <FormControlLabel value="D" control={<Radio />} label="D" />
                    <FormControlLabel value="F" control={<Radio />} label="F" />

                </RadioGroup>

            <div>
                <ButtonStyled onClick={nextStep} type="submit" variant="contained">Add a warehouses</ButtonStyled>
            </div>
        </>
    );
};

export default FirstStep;