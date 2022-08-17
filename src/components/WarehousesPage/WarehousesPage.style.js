import {styled} from '@mui/material/styles'
import {Toolbar, ListItem, Box} from "@mui/material";

export const ToolbarStyled = styled(Toolbar)(({theme}) => ({

    height: 300,
    // padding: 0,
}))

export const ListItemStyled = styled(ListItem)(({theme}) => ({

    color: "red",
}))

export const BoxStyledInner = styled(Box)(({theme}) => ({
    width: 240,
    flexShrink: 0,
    height: "100vh",
}))
export const BoxItemWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    outline: "none"
}))