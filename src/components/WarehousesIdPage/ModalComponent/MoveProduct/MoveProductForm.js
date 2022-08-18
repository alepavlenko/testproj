import * as Yup from "yup";

import {Validation} from "../../../../constants";


export const MoveItemSchema = Yup.object().shape({
    delivery: Yup.string()
        .required(Validation.REQUIRED_VALUE),
    payment: Yup.string()
        .required(Validation.REQUIRED_VALUE),
    selectWarehouses: Yup.string()
        .required(Validation.REQUIRED_VALUE),
});
