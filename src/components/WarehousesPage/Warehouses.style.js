import {styled} from '@mui/material/styles'
import {Toolbar, ListItem} from "@mui/material";

export const ToolbarStyled = styled(Toolbar)(({theme}) => ({

    height: 300,
    // padding: 0,
}))

export const ListItemStyled = styled(ListItem)(({theme}) => ({

    color: "red",
}))