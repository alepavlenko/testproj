import {styled} from '@mui/material/styles'
import {Button} from "@mui/material";


export const ButtonStyled = styled(Button)(({theme}) => ({
    fontFamily: '"Inter-semibold", sans-serif',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "14px",
    color: "#FFFFFF",
    width: 300,
    height: 50,
    marginTop: 10,
    marginBottom: 50

}))

export const FormStyled = styled('form')(({theme}) => ({
    marginTop:40,
    width: 300
}))
