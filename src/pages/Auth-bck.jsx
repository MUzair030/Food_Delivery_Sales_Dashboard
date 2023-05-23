import {Box, Grid, Typography} from "@mui/material";
import {Navbar, Sidebar} from "../components";
import {Outlet} from "react-router-dom";

const Auth = (props) => {

    return(
            <Box width="100%" height="100%" sx={{
                display: "flex",
                padding: "0px",
                overflow: "hidden",
                margin: "auto",
                alignItems: "center",
                justifyContent: "center",
                // background: "linear-gradient(312deg, rgba(15,23,42,1) 0%, rgba(32,67,124,1) 100%)"
                // background: "linear-gradient(312deg, rgba(30,41,59,1) 0%, rgba(25,183,245,1) 100%)"
                // background: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
                // background: "linear-gradient(to right top, #051937, #003b5e, #006181, #00899c, #27b2b0)"
                background: "linear-gradient(to right top, #051937, #003656, #005671, #097787, #3a9998)"
                // background: `linear-gradient(
                // 95deg,
                // hsl(216deg 83% 12%) 0%,
                // hsl(214deg 82% 13%) 1%,
                // hsl(213deg 79% 15%) 3%,
                // hsl(211deg 78% 16%) 4%,
                // hsl(210deg 75% 17%) 7%,
                // hsl(207deg 75% 19%) 9%,
                // hsl(206deg 73% 20%) 12%,
                // hsl(204deg 71% 22%) 16%,
                // hsl(202deg 69% 23%) 21%,
                // hsl(200deg 66% 25%) 28%,
                // hsl(199deg 65% 26%) 39%,
                // hsl(197deg 63% 27%) 57%,
                // hsl(195deg 62% 29%) 71%,
                // hsl(193deg 59% 30%) 79%,
                // hsl(192deg 58% 32%) 85%,
                // hsl(190deg 56% 33%) 89%,
                // hsl(188deg 54% 34%) 92%,
                // hsl(186deg 53% 36%) 94%,
                // hsl(185deg 51% 37%) 96%,
                // hsl(183deg 49% 38%) 98%,
                // hsl(181deg 47% 40%) 99%,
                // hsl(179deg 45% 41%) 100%
                // )`
            }}>
                <Box
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

                    <Grid container >


                        {/* Right Side */}
                        <Grid
                            sx={{
                                color: "black"
                            }}>
                            <Typography color="white">
                                Login
                            </Typography>
                        </Grid>
                        {/* Right Side End */}

                    </Grid>
                </Box>

            </Box>

    )
}

export default Auth;