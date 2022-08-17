import {styled} from '@mui/material/styles'
import {AppBar, TextField} from "@mui/material";

export const TextFieldStyled = styled(TextField)(({theme}) => ({

    width: 281,
    height: 48,
}))
export const AppBarStyled = styled(AppBar)(({theme}) => ({
    boxShadow: 'none',
    borderBottom: 1,
    borderColor: "#ECEFF2",
    height: 112,
    width: `calc(100% - 240px)`,
    ml: `240px`,
}))