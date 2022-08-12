import {styled} from '@mui/material/styles'

import {Button, Dialog, DialogContent, DialogTitle} from '@mui/material'

export const DialogStyled = styled(Dialog)(({theme}) => ({
    '& .MuiDialog-paper': {
        p: 4,
        width: 624,

    }

}))


export const DialogContentStyled = styled(DialogContent)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const DialogTitleStyled = styled(DialogTitle)(({theme}) => ({
    padding: 26,
}))
