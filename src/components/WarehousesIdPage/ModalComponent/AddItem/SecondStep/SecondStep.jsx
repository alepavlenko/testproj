import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {ButtonStyled} from "../AddItem.style";
import style from './SecondStep.module.css'
import AirPlane from "../../../../Common/Icons/AirPlane";
import {RadioStyled} from "./SecondStep.style";

const SecondStep = ({formik, nextStep}) => {
    return (

        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Select delivery method</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="delivery"
                value={formik.values.delivery}
                onChange={formik.handleChange}
            >
                <div className={style.wrapSelected}>
                        <div className={style.wrapLeftSide} onClick={formik.handleChange} value="Air" >
                            <AirPlane/>
                            <p>By air transport</p>
                            <FormControlLabel value="Air"   control={<Radio />} />
                        </div>
                </div>
                <FormControlLabel value="Sea" control={<Radio />} label="Sea" />
                <FormControlLabel value="Car" control={<Radio />} label="Car" />
            </RadioGroup>

            <div>
                <ButtonStyled onClick={nextStep} type="submit" variant="contained">Next step</ButtonStyled>
            </div>
        </FormControl>
    );
};

export default SecondStep;


// https://codesandbox.io/s/pk7682?file=/demo.js
//
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
//
// export default function SelectedListItem() {
//     const [selectedIndex, setSelectedIndex] = React.useState(1);
//     const handleListItemClick = (index) => {
//         setSelectedIndex(index);
//     };
//     console.log(selectedIndex)
//     return (
//         <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             <List component="nav" aria-label="main mailbox folders">
//                 <ListItemButton
//                     selected={selectedIndex === 'air'}
//                     onClick={() => handleListItemClick('air')}
//                 >
//                     <ListItemIcon>
//                         <InboxIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Inbox" />
//                 </ListItemButton>
//                 <ListItemButton
//                     selected={selectedIndex === 'car'}
//                     onClick={() => handleListItemClick('car')}
//                 >
//                     <ListItemIcon>
//                         <DraftsIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Drafts" />
//                 </ListItemButton>
//             </List>
//             <Divider />
//             <List component="nav" aria-label="secondary mailbox folder">
//                 <ListItemButton
//                     selected={selectedIndex === 2}
//                     onClick={(event) => handleListItemClick(event, 2)}
//                 >
//                     <ListItemText primary="Trash" />
//                 </ListItemButton>
//                 <ListItemButton
//                     selected={selectedIndex === 3}
//                     onClick={(event) => handleListItemClick(event, 3)}
//                 >
//                     <ListItemText primary="Spam" />
//                 </ListItemButton>
//             </List>
//         </Box>
//     );
// }
