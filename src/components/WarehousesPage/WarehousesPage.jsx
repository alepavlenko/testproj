import React from 'react';

import {AppBar, Box, CssBaseline, Typography} from "@mui/material";
import {TextFieldStyled} from "./Warehouses.style";
import Person from "../Common/Icons/Person";
import Settings from "../Common/Icons/Settings";
import Notification from "../Common/Icons/Notification";
import CustomDrawer from "./Drawer/CustomDrawer";

import style from './WarehousesPage.module.css'

const drawerWidth = 240;

const WarehousesPage = () => {

    console.log('lol')

    return (

        <Box sx={{display: 'flex'}}>
            <CssBaseline/>

            {/*NavBar*/}
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 'none',
                    borderBottom: 1,
                    borderColor: "#ECEFF2",
                    height: 112,
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <div className={style.wrapNavBar}>
                    <TextFieldStyled label="Search"/>
                    <div className={style.wrapNavLogo}>
                        <div className={style.styledSvg}><Person/></div>
                        <div className={style.styledSvg}><Settings/></div>
                        <div className={style.styledSvg}><Notification/></div>
                    </div>
                </div>
            </AppBar>

            {/*side bar*/}
            <Box
                component="nav"
                sx={{
                    width: {sm: drawerWidth},
                    flexShrink: {sm: 0},
                    height: "100vh",
                }}
                aria-label="mailbox folders"
            >
                <CustomDrawer/>
            </Box>

            {/* main content*/}
            <div className={style.wrapContent}>
                <Box
                    component="main"
                    sx={{
                        paddingTop: "520px",
                        flexGrow: 1,
                        p: 3,
                        width: {sm: `calc(100% - ${drawerWidth}px)`}
                    }}
                >
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                        posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </Box>
            </div>

        </Box>

    );
};

export default WarehousesPage;