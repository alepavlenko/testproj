import * as Yup from "yup";

import {Validation} from "../../../../constants";


export const AddWarehousesSchema = Yup.object().shape({
    nameWarehouses: Yup.string()
        .min(2, Validation.SHORT_VALUE)
        .max(50, Validation.LONG_VALUE)
        .required(Validation.REQUIRED_VALUE),
    length: Yup.number()
        .min(1, Validation.SHORT_VALUE)
        .required(Validation.REQUIRED_VALUE),
    width: Yup.number()
        .min(1, Validation.SHORT_VALUE)
        .required(Validation.REQUIRED_VALUE),
    height: Yup.number()
        .min(1, Validation.SHORT_VALUE)
        .required(Validation.REQUIRED_VALUE),
});
