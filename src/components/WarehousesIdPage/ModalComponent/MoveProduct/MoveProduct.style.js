import {styled} from '@mui/material/styles'
import {Button, ListItemButton} from "@mui/material";


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
    // paddingTop: 30,
    width: 300
}))

export const ListItemButtonStyled = styled(ListItemButton)(({theme}) => ({
    marginTop:20,
    marginBottom:20,
    backgroundColor: '#F8F9F9',

}))