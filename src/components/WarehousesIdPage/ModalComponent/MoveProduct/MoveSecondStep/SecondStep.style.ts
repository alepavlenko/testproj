import {styled} from '@mui/material/styles'
import {Button, FormControlLabel} from "@mui/material";


export const FormControlLabelStyled = styled(FormControlLabel)(({theme}) => ({
    'MuiFormControlLabel-root':{
        fontFamily: '"Inter-semibold", sans-serif',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: "14px",
        width: 300,
        height: 50,
        border: '1px solid #EE950F'
    }
}))

