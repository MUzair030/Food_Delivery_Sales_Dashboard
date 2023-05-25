import {Box, Grid, Typography} from "@mui/material";
import {Navbar, Sidebar} from "../components";
import {Outlet} from "react-router-dom";
import { LoginForm, SignupForm } from "../components";
import { useParams } from "react-router-dom";

const Auth = (props) => {

    const { authType } = useParams();
    console.log({authType})

    return(
            <Box width="100%" height="100%" sx={{
                display: "flex",
                padding: "0px",
                overflow: "hidden",
                margin: "auto",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(to right top, #051937, #003656, #005671, #097787, #3a9998)"

            }}>
                <Box container
                    sx={{
                        // maxWidth: "30%",
                        width: {
                            xs: "90vw",
                            sm: "60vw",
                            md: "40vw",
                            lg: "30vw",
                            xl: "30vw"
                        },
                        margin: "auto",
                        border: "1px solid grey",
                        borderRadius: "20px",
                        background: "white",
                        opacity: "0.35",
                        justifyContent: "center",
                        height: "80vh",
                        color: "white"
                    }}>

                        {
                            authType === "register" ?
                                <SignupForm/>
                                :
                                <LoginForm/>
                        }




                    </Box>


            </Box>

    )
}

export default Auth;