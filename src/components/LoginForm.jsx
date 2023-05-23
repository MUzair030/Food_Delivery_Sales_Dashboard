import {Grid, Typography, TextField, Button, Box} from "@mui/material";
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

    const navigate = useNavigate();

    const handleLoginButton = () => {
        navigate("/dashboard")
    }

    const handleSignupButton = () => {
        navigate("/auth/register")
    }

    return(
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
                    <br/>
                </Typography>
            </Grid>
            {/* Logo ends */}


             {/*    Login Heading  */}
             <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography sx={{
                    fontSize: "20px",
                    color: "#042241"
                }}>
                    Login
                    <br/>
                    <br/>
                </Typography>
             </Grid>
            {/*    Login Heading  End */}


            {/*    Login Form Start */}

            <Grid xs={10} sm={10} md={8} lg={8} xl={8}>
                <TextField
                    error
                    id="standard-error-helper-text"
                    label="Email"
                    helperText="Incorrect entry."
                    variant="standard"
                    variant="filled"
                    sx={{
                        width:"100%"
                    }}
                />
            </Grid>

            <Grid xs={10} sm={10} md={8} lg={8} xl={8}>
                <TextField
                    error
                    id="standard-error-helper-text"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    helperText="Incorrect entry."
                    variant="standard"
                    variant="filled"
                    sx={{
                        width:"100%"
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
                        width: "100%"
                    }}
                    onClick={handleLoginButton}>
                        <Typography>
                            Login
                        </Typography>
                    </Button>
                </Grid>

                <Grid xl={1}>
                    <Typography>or</Typography>
                </Grid>

                {/* singup button */}
                <Grid xs={10} sm={10} md={10} lg={4} xl={3}
                      sx={{
                          color: "black",
                      }}>
                    <Button sx={{
                        background: "#042241",
                        color: "white",
                        width: "100%"
                    }}
                    onClick={handleSignupButton}>
                        <Typography>
                            Signup
                        </Typography>
                    </Button>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} xl={6}
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

            </Grid>
            {/* Buttons Container / Grid End */}

            {/*    Login Form  Ends */}


</Grid>
     )

}

export default LoginForm;