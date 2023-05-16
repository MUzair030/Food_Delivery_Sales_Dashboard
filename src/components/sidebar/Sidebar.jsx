import {
    Box, Stack, Divider, Drawer, List,
    ListItem, ListItemButton, ListItemIcon,
    ListItemText, Typography, useTheme, IconButton
} from "@mui/material";
import { NavigateBefore} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "./menuItems";

const Sidebar = (params) => {
    const { drawerWidth, isNonMobile, sidebarOpen, setSidebarOpen, user } = params;
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();


    useEffect(()=>{
        setActive(pathname.substring(1));
        console.log(sidebarOpen)
    }, [pathname, sidebarOpen]);

    const handleButtonClick = (item) => {
        navigate(`/${item.toLowerCase()}`)
        setActive(item.toLowerCase());
    }

    const handleSideBar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    const expandedSidebar = () => {
        return(
            <Box sx={{
                zIndex: "9999",
                boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
            }}>
                <Drawer
                    open={sidebarOpen}
                    onClose={()=> setSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >

                    <Box width="100%">

                        {/*     logo    */}
                        <Box width="100%" sx={{
                            display: "block",
                            p:"1rem 0.1rem",
                            textAlign: "center",
                        }}>
                            <Stack direction="row" sx={{
                                justifyContent: "center"
                            }}>
                                <Typography sx={{fontSize: theme.typography.h3.fontSize}}>
                                    Logo Here
                                </Typography>
                                {
                                    !isNonMobile &&
                                    <Stack sx={{
                                        justifyContent: "right"
                                    }}>
                                        <IconButton
                                            onClick={handleSideBar}>
                                            <NavigateBefore/>
                                        </IconButton>
                                    </Stack>
                                }
                            </Stack>
                        </Box>

                        {/*    menu items   */}
                        <Stack m="0rem 1.5rem" >
                            {
                                menuItems.map(({name, icon}) => (
                                    <List sx={{
                                        padding: "0px"
                                    }}>
                                        <Stack direction="row" sx={{
                                            background: active === name.toLowerCase()? theme.palette.selectedItem.default : "none",
                                            borderRadius: "0.5rem",
                                            justifyContent: "left",
                                            alignItems: "center",
                                            "& :hover": {
                                                borderRadius: "0.5rem"
                                            }
                                        }}>
                                            {
                                                icon ?
                                                    <ListItemButton
                                                        onClick={()=>handleButtonClick(name)}>
                                                        <ListItemIcon sx={{minWidth: "35px"}}>
                                                            {icon}
                                                        </ListItemIcon>
                                                        <ListItemText sx={{
                                                            color: theme.palette.text.primary
                                                        }}primary={name} />
                                                    </ListItemButton>
                                                    :
                                                    <Typography sx={{
                                                        fontSize: theme.typography.fontSize,
                                                        marginTop: "1.5rem"
                                                    }}>
                                                        {name}
                                                    </Typography>
                                            }

                                        </Stack>
                                    </List>
                                ))
                            }
                        </Stack>

                        {/*    User Image  Section */}
                        <Box sx={{
                            position: "fixed",
                            width: drawerWidth,
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            bottom: "10px !important",
                            "& :hover": {
                                cursor: "pointer"
                            }
                        }}>
                            <Divider color="white" width="100%"/>
                            <Box sx={{
                                width: "80%",
                                margin: "auto"

                            }}>
                                <Stack direction="row" width="100%">
                                    <Box
                                        component="img"
                                        width="50px"
                                        height="50px"
                                        sx={{
                                            borderRadius: "50%",
                                        }}
                                        src={user?.img?.img}
                                    >

                                    </Box>
                                    <Box sx={{
                                        padding: "0 5% 0 5%",
                                        width: "70%",
                                        textAlign: "left"
                                    }}>
                                        <p>
                                            {user.name}
                                        </p>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                        {/*    User Image Section End */}

                    </Box>

                </Drawer>
            </Box>
        )
    }


    const miniSidebar = () => {
        return(
            //main container
            <Box sx={{
                zIndex: "0",
                marginTop: "10vh",
                boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
            }}>
                {/*     drawer    */}
                <Drawer
                    open={!sidebarOpen}
                    onClose={()=> setSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        marginTop: "10vh",
                        width: "70px",
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile? 0 : "2px",
                            width: "70px"
                        }
                    }}
                >

                    <Box width="80%" sx={{
                        margin: "auto",
                        marginTop: "10vh",
                        padding: "auto"
                    }}>
                        {/*    menu items   */}
                        <Box m="0rem 0rem" width="100%">
                            {
                                menuItems.map(({name, icon}) => (
                                    <List sx={{
                                        padding: "0px"
                                    }}>
                                        <Box direction="row" sx={{
                                            background: active === name.toLowerCase()? theme.palette.selectedItem.default : "none",
                                            borderRadius: "0.5rem",
                                            justifyContent: "center",
                                            padding: "2px 0px 2px 0px",
                                            margin: "2px 0px 2px 0px",
                                            alignItems: "center",
                                            "& :hover": {
                                                borderRadius: "0.5rem"
                                            }
                                        }}>
                                            {
                                                icon ?
                                                    <ListItemButton
                                                        onClick={()=>handleButtonClick(name)}>
                                                        <ListItemIcon sx={{minWidth: "10px !important",
                                                        ".css-havevq-MuiSvgIcon-root": {
                                                            fontSize: "1.5rem"
                                                        }
                                                        }}>
                                                            {icon}
                                                        </ListItemIcon>
                                                    </ListItemButton> : null
                                            }

                                        </Box>
                                    </List>
                                ))
                            }
                        </Box>

                        {/*    User Image   */}
                        <Box sx={{
                            position: "fixed",
                            bottom: "10px !important",
                            "& :hover": {
                                cursor: "pointer"
                            }
                        }}>
                            <Divider/>
                            <Box
                                component="img"
                                width="50px"
                                height="50px"
                                sx={{
                                    // border: "1px solid white",
                                    borderRadius: "50%",
                                }}
                                src={user.img.img}
                            >

                            </Box>
                        </Box>
                    {/*    User Image End */}
                    </Box>

                </Drawer>
            </Box>
        )
    }

    // Component Return / Render

    return(
        sidebarOpen? expandedSidebar() : miniSidebar()
    )
}

export default Sidebar;
