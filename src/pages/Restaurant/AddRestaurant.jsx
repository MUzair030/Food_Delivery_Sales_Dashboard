import {Box, Stack, Typography, Button, Fab, IconButton, Input, Grid, useTheme, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Upload from "rc-upload";

const AddRestaurant = () => {
    const theme = useTheme();

    const handleSubmit = (event) => {
        event.preventDefault();
        const file = event.currentTarget["fileInput"].files[0];

        const formData = new FormData();
        formData.append("file", file);

        fetch("https://echo-api.3scale.net/", {
            method: "POST",
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                // setResult(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return(
        <Box component="form" onSubmit={handleSubmit} width="100%"
        sx={{
            padding: "20px"
        }}>
            <Typography variant="h3">Add Restaurant</Typography>

            <Grid container>

                <Grid xs={12} sm={12} md={4} lg={3} xl={3}
                      sx={{
                          textAlign: "center",
                          justifyContent: "center"
                      }}>

                    <Stack gap={2}
                        sx={{
                            textAlign: "center"
                        }}>
                        {/*  Picture Dispay  */}
                        <Box>
                            <Box component="img"
                                 width="200px"
                                 height="200px"
                                 sx={{
                                     borderRadius: "5%",
                                     overflow: "hidden"
                                 }}
                                 src="https://burgerlab.com.pk/wp-content/uploads/2022/02/Untitled-1-1-1.jpg?c062ef&c062ef"
                            >
                            </Box>
                        </Box>

                        {/*  upload button  */}
                        <Upload>
                            <Button
                                sx={{
                                    background: theme.palette.selectedItem.default,
                                    // padding: "10px",
                                    color: "white",
                                    borderRadius: "30px",
                                    padding: "5px 15px 5px 10px",
                                    "&:hover": {
                                        background: theme.palette.hoverItem.default,
                                    }
                                }}>
                                <AddIcon sx={{
                                    fontSize: "30px"
                                }}/>
                                <Typography>
                                    &nbsp;Upload Logo
                                </Typography>
                            </Button>
                        </Upload>
                    </Stack>

                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} xl={6}>

                    <Grid xs={10} sm={10} md={5} lg={5} xl={5} >
                        <TextField
                            error
                            id="name"
                            label="Name"
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

                    <Grid xs={10} sm={10} md={5} lg={5} xl={5} >
                        <TextField
                            error
                            id="name"
                            label="Name"
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

                </Grid>

            </Grid>
        </Box>

    )
}

export default AddRestaurant;