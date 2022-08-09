import {styled} from '@mui/material/styles'

import {Button, Dialog, DialogContent, DialogTitle} from '@mui/material'

export const DialogStyled = styled(Dialog)(({theme}) => ({
    '& .MuiDialog-paper': {
        p: 4,
        width: 624,

    }

}))

export const FormStyled = styled('form')(({theme}) => ({
    width: 300
}))

export const DialogContentStyled = styled(DialogContent)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const DialogTitleStyled = styled(DialogTitle)(({theme}) => ({
    padding: 26,
}))

export const ButtonStyled = styled(Button)(({theme}) => ({
    fontFamily: '"Inter-semibold", sans-serif',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "14px",
    color: "#FFFFFF",
    width: 300,
    height: 50,

}))

