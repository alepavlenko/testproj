import * as Yup from "yup";
import {Validation} from "../../../../constants";

export const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, Validation.SHORT_VALUE)
        .max(50, Validation.LONG_VALUE)
        .required(Validation.REQUIRED_VALUE),
    email: Yup.string()
        .email(Validation.INVALID_EMAIL)
        .required(Validation.REQUIRED_VALUE),
});