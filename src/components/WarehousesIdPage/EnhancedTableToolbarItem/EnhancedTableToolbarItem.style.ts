import {styled} from '@mui/material/styles'
import {Button} from "@mui/material";

export const ButtonStyled = styled(Button)(({theme}) => ({

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "14px",
    width: "178px",
    height: "44px",
    fontSize: "12px",
    lineHeight: "12px",
    fontFamily: "Inter, sans-serif",
    textTransform: "none"
}))
