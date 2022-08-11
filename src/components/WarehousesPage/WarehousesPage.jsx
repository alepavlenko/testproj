import React from 'react';
import {
    AppBar, Box,
    CssBaseline,
    Divider, Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
     Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import Logo from "../Common/Logo/Logo";
import {TextFieldStyled} from "./Warehouses.style";
import style from './WarehousesPage.module.css'
import Person from "../Common/Icons/Person";
import Settings from "../Common/Icons/Settings";
import Notification from "../Common/Icons/Notification";
import Home from "../Common/Icons/Home";
import Warehouses from "../Common/Icons/Warehouses";
import Accounts from "../Common/Icons/Accounts";
import Cards from "../Common/Icons/Cards";
import Contacts from "../Common/Icons/Contacts";
import Chat from "../Common/Icons/Chat";


const listArray = [
    {
        id: 1,
        label: 'Home',
        icon: <Home/>
    },
    {
        id: 2,
        label: 'Warehouses',
        icon: <Warehouses/>
    },
    {
        id: 3,
        label: 'Accounts',
        icon: <Accounts/>
    },
    {
        id: 4,
        label: 'Cards',
        icon: <Cards/>
    },
    {
        id: 5,
        label: 'Contacts',
        icon: <Contacts/>
    },
    {
        id: 6,
        label: 'Chat',
        icon: <Chat/>
    },
]

const drawerWidth = 240;

const WarehousesPage = (props) => {
    const {window} = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div className={style.wrapSideBar}>
            <div className={style.wrapLogo}>
                <Logo/>
            </div>
            <Divider/>
            <List className={style.wrapList}>
                {listArray.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <Link to={`/${item.label}`} className={style.wrapLink}>
                            <ListItemButton>
                                <ListItemIcon className={style.wrapListItem}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        </Link>

                    </ListItem>
                ))}
            </List>
            <Divider/>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
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
            <Box
                component="nav"
                sx={{
                    width: {sm: drawerWidth},
                    flexShrink: {sm: 0},
                    height: "100vh",
                }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                            height: "100vh"
                        },
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
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
                    {/*<Toolbar />*/}
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