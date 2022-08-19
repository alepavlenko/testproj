import * as Yup from "yup";

import {Validation} from "../../../../constants";


export const AddItemSchema = Yup.object().shape({
    name: Yup.string()
        // .min(2, Validation.SHORT_VALUE)
        // .max(50, Validation.LONG_VALUE)
        .required(Validation.REQUIRED_VALUE),
    manufacturer: Yup.string()
        // .min(2, Validation.SHORT_VALUE)
        .max(50, Validation.LONG_VALUE)
        .required(Validation.REQUIRED_VALUE),
    number: Yup.number()
        // .max(50, Validation.LONG_VALUE)
        .required(Validation.REQUIRED_VALUE),
    purchasing: Yup.string()
        .required(Validation.REQUIRED_VALUE),
    delivery: Yup.string()
        .required(Validation.REQUIRED_VALUE),
    payment: Yup.string()
        .required(Validation.REQUIRED_VALUE),
});
