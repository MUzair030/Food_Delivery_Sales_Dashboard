import {Grid, Typography, TextField, Button} from "@mui/material";

const LoginForm = () => {


    return(

        <Grid xs={10} sm={10} md={10} lg={10} xl={10}
              sx={{
                  color: "black",
                  // opacity: "1"
                  textAlign: "center"
              }}>


            <Typography>
                <br/>
                <br/>
                <br/>

                Logo Here
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </Typography>


            <Typography>
                Login
            </Typography>


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

            <br/>
            <br/>
            <br/>

            <Button sx={{
                background: "#042241",
                color: "white"
            }}>
                <Typography>
                    Login
                </Typography>
            </Button>
        </Grid>
     )

}

export default LoginForm;