import {Grid, Typography, TextField, Button, Box, Divider} from "@mui/material";
import { useNavigate } from "react-router-dom"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const LoginForm = () => {

    const navigate = useNavigate();

    const handleLoginButton = (e) => {
        e.preventDefault();
        const data = {
            email: e.target['email'].value,
            password: e.target['password'].value,
        }
        console.log("handleLoginButton", data)
        navigate("/dashboard")
    }

    const handleSignupButton = () => {
        navigate("/auth/register")
    }

    return(
        <Box component="form" onSubmit={handleLoginButton} width="100%">
            <Grid container
            sx={{
                textAlign: "center",
                justifyContent: "center",
                width: "100%",
                padding: "0px",
                margin: "0px"
            }}>


                {/* Logo */}
                <Grid xs={12} sm={12} md={12} lg={12} xl={12}
                      sx={{
                          padding: "0px",
                          margin: "0px"
                      }}>
                    <Typography sx={{
                        color: "#042241",
                        fontSize: "25px",
                    }}>
                        <br/>
                        Logo Here
                        <br/>
                        <br/>
                    </Typography>
                </Grid>
                {/* Logo ends */}


                {/* /!*    Login Heading  *!/*/}
                {/* <Grid xs={12} sm={12} md={12} lg={12} xl={12}>*/}
                {/*    <Typography sx={{*/}
                {/*        fontSize: "20px",*/}
                {/*        color: "#042241"*/}
                {/*    }}>*/}
                {/*        Login*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*    </Typography>*/}
                {/* </Grid>*/}
                {/*/!*    Login Heading  End *!/*/}


                {/*    Login Form Start */}

                <Grid xs={10} sm={10} md={8} lg={8} xl={8}>
                    <TextField
                        error
                        id="email"
                        label="Email"
                        helperText="Incorrect entry."
                        variant="standard"
                        variant="filled"
                        sx={{
                            width:"100%",
                            ".css-1ascq1m-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                                color: "black"
                            },
                            ".css-134sb7c-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                                color: "black"
                            },
                            input: {
                                color: "black"
                            }
                        }}
                    />
                </Grid>

                <Grid xs={10} sm={10} md={8} lg={8} xl={8}>
                    <TextField
                        error
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        helperText="Incorrect entry."
                        variant="standard"
                        variant="filled"
                        sx={{

                            ".css-1ascq1m-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                                color: "black"
                            },
                            ".css-134sb7c-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
                                color: "black"
                            },
                            width:"100%",
                            input: {
                                color: "black"
                            }
                        }}
                    />
                </Grid>


                {/* Buttons Container / Grid */}
                <Grid container
                sx={{
                    paddingTop: "40px",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {/* login button */}
                    <Grid xs={10} sm={10} md={10} lg={4} xl={3}
                          sx={{
                              color: "black",
                          }}>
                        <Button sx={{
                            background: "#042241",
                            color: "white",
                            width: "100%",
                            '&:hover': {
                                backgroundColor: '#349596',
                                color: '#041E3C',
                            },
                        }}
                            type="submit">
                            <Typography>
                                Login
                            </Typography>
                        </Button>
                    </Grid>

                    <Grid xs={12} sm={12} md={12} xl={1}>
                        <Typography>or</Typography>
                    </Grid>

                    {/* singup button */}
                    <Grid xs={10} sm={10} md={10} lg={4} xl={3}
                          sx={{
                              color: "black",
                          }}>
                        <Button sx={{
                            background: "#041E3C",
                            // background: "#042241",
                            color: "white",
                            width: "100%",
                            '&:hover': {
                                backgroundColor: '#349596',
                                color: '#041E3C',
                            },
                        }}
                        onClick={handleSignupButton}>
                            <Typography>
                                Signup
                            </Typography>
                        </Button>
                    </Grid>

                    {/* Forgot pass text */}
                    <Grid xs={12} sm={12} md={12} lg={12} xl={6}
                          sx={{
                              color: "black",
                              paddingTop: "20px"
                          }}>
                        <a href="#">
                            <Typography sx={{
                                textDecoration:"none !important"
                            }}>
                                Forgot Password?
                            </Typography>
                        </a>

                    </Grid>


                    {/* Google / FB Buttons */}
                    <Grid container
                    sx={{
                        justifyContent: "center"
                    }}>

                        {/* dvider */}
                        <Grid xs={10} sm={10} md={10} lg={10} xl={10}
                        sx={{
                            ".css-rr7dug-MuiDivider-root": {
                                background: "black"
                            },
                            paddingTop: "20px",
                            paddingBottom: "20px",
                        }}>
                            <Divider />
                        </Grid>

                        {/* google */}
                        <Grid xs={10} sm={10} md={10} lg={5} xl={5}>
                            <Button sx={{
                                width: {
                                    xs: "100%",
                                    sm: "100%",
                                    md: "100%",
                                    lg: "90%",
                                    xl: "90%"
                                },
                                alignItems: "center",
                                background: "#041E3C",
                                color: "white",
                                padding: "10px 20px 10px 20px",
                                '&:hover': {
                                    backgroundColor: '#349596',
                                    color: '#041E3C',
                                },
                            }}>
                                <Typography>
                                    Signup with &nbsp;
                                </Typography>
                                <GoogleIcon/>

                            </Button>
                        </Grid>

                        {/* facebook */}
                        <Grid xs={10} sm={10} md={10} lg={5} xl={5}>
                            <Button sx={{
                                width: {
                                  xs: "100%",
                                  sm: "100%",
                                  md: "100%",
                                  lg: "90%",
                                  xl: "90%"
                                },
                                alignItems: "center",
                                background: "#041E3C",
                                color: "white",
                                padding: "10px 20px 10px 20px",
                                '&:hover': {
                                    backgroundColor: '#349596',
                                    color: '#041E3C',
                                },
                            }}>
                                <Typography>
                                    Signup with  &nbsp;
                                </Typography>
                                <FacebookIcon/>
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>
                {/* Buttons Container / Grid End */}

                {/*    Login Form  Ends */}
            </Grid>
        </Box>
     )

}

export default LoginForm;