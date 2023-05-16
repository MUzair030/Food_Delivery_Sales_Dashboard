import {useEffect, useState} from "react";
import {Box, useMediaQuery} from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navbar, Sidebar } from "./index";
import { useGetUserByIdQuery } from "../store/api/userApi";
import { setUser } from "../store/state/userInfo";

const Layout = () => {

    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const dispatch = useDispatch();
    let user = useGetUserByIdQuery("63701cc1f03239c72c000180");
    const [userData, setUserData] = useState({});
    let storedUserData = useSelector(state => state.userInfo);
    //
    // useEffect(()=>{
    //     if(!userData?.userId){
    //         let data =  user.data;
    //         dispatch(setUser(data));
    //         if(storedUserData){
    //             let img = {img: storedUserData.img}
    //             data = {...data, img}
    //         }
    //         setUserData(data);
    //         console.log("storedUserData 111 :: ", data, storedUserData?.img)
    //     }
    // }, [user])


    useEffect(()=>{
        if(!userData?.userId && user){
            let data =  user.data;
            dispatch(setUser(data));
            if(storedUserData){
                let img = {img: storedUserData.img}
                data = {...data, img}
            }
            setUserData(data);
            console.log("storedUserData 111 :: ", data, storedUserData?.img)
        }
    }, [user])






    return(
        <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
            {/*left side*/}
            <Box>
                <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                user={userData}
                />
            </Box>

            {/*right side*/}
            <Box sx={{width:"100% "}}>
                <Navbar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <Outlet/>
            </Box>
        </Box>
    )
}

export default Layout;