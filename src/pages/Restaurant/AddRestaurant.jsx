import {Box, Stack, Typography, Button, Fab, IconButton, Input, Grid, useTheme, TextField, TextareaAutosize} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Upload from "rc-upload";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Textarea from '@mui/joy/Textarea';
import {useState} from "react"



const AddRestaurant = () => {
    const theme = useTheme();

    const [restaurantType, setRestaurantType] = useState('');
    const [priceCat, setPriceCat] = useState('');

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

    const vendorFormSubmit = (e) => {
        e.preventDefault();
        console.log("E :::: ", e.target )
        const data = {
            name: e.target['name'].value,
            ownerName: e.target['owner-name'].value,
            email: e.target['email'].value,
            phone: e.target['phone'].value,
            description: e.target['description'].value,
            restaurantType: restaurantType,
            priceCategory: priceCat
        }
        console.log("vendorFormSubmit", data)
    }


    return(
            <Box component="form" onSubmit={vendorFormSubmit} width="100%"
                 sx={{
                     padding: "20px"
                 }}>
                {/* heading */}
                <Typography variant="h3">Add Restaurant</Typography>


                {/* pic + form container starts */}
                <Grid container
                sx={{
                    marginTop: "50px"
                }}>


                    {/* Pic and upload button grid + stack starts */}
                    <Grid xs={12} sm={12} md={4} lg={3} xl={3}
                          sx={{
                              textAlign: "center",
                              justifyContent: "center",
                          }}>

                        <Stack gap={2}
                               sx={{
                                   textAlign: "center"
                               }}>
                            {/*  Picture Dispay  */}
                            <Box>
                                <Box component="img"
                                     width="250px"
                                     height="250px"
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
                    {/* Pic and upload button grid + stack ends */}

                    {/* Form Text fields + button starts */}
                    <Grid xs={12} sm={12} md={6} lg={6} xl={6}>

                        <Grid container sx={{
                            justifyContent: {
                                xs: "center",
                                sm: "center",
                                md: "center",
                                lg: "space-between",
                                xl: "space-between"
                            },
                            margin: {
                                xs: "20px",
                                sm: "20px",
                                md: "20px",
                                lg: "0px",
                                xl: "0px"
                            },
                            paddingBottom: "20px"
                        }}>
                            {/* Form Text fields left side */}
                            <Grid xs={10} sm={10} md={5} lg={5} xl={5} >
                                <TextField
                                    error={false}
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
                                        marginBottom: "10px",
                                        input: {
                                            color: "black"
                                        }
                                    }}
                                />

                                <TextField
                                    error={false}
                                    id="email"
                                    label="Email"
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
                                        marginBottom: "10px",
                                        input: {
                                            color: "black"
                                        }
                                    }}
                                />

                                <Box class="add-vendor-text-area">
                                <textarea id="description" placeholder="Enter description here ...">
                                </textarea>
                                </Box>

                            </Grid>
                            {/* Form Text fields left side end */}

                            {/* Form Text fields right side */}
                            <Grid xs={10} sm={10} md={5} lg={5} xl={5} >
                                <TextField
                                    error={false}
                                    id="owner-name"
                                    label="Owner Name"
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
                                        marginBottom: "10px",
                                        input: {
                                            color: "black"
                                        }
                                    }}
                                />

                                <TextField
                                    error={false}
                                    id="phone"
                                    label="Phone Number"
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
                                        marginBottom: "10px",
                                        input: {
                                            color: "black"
                                        }
                                    }}
                                />

                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="restaurant-type"
                                    value={restaurantType}
                                    onChange={(e)=> setRestaurantType(e.target.value)}
                                    label="Restaurant Type"
                                    sx={{
                                        width: "100%",
                                        marginBottom: "10px",
                                        color: "white"
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"Veg"}>Veg</MenuItem>
                                    <MenuItem value={"Non-Veg"}>Non-Veg</MenuItem>
                                </Select>

                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="price-cat"
                                    value={priceCat}
                                    onChange={(e)=> setPriceCat(e.target.value)}
                                    label="Category"
                                    sx={{
                                        width: "100%",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"$"}>$</MenuItem>
                                    <MenuItem value={"$$"}>$$</MenuItem>
                                    <MenuItem value={"$$$"}>$$$</MenuItem>
                                </Select>
                            </Grid>
                            {/* Form Text fields right side end */}
                        </Grid>

                        <TextField
                            error={false}
                            id="adress"
                            label="Address"
                            // helperText="Incorrect entry."
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
                                marginBottom: "10px",
                                input: {
                                    color: "black"
                                }
                            }}
                        />

                        <Button type="submit"
                            sx={{
                                background: theme.palette.selectedItem.default,
                                padding: "10px",
                                color: "white",
                                "&:hover": {
                                    background: theme.palette.hoverItem.default,
                                }
                            }}
                            >
                            <Typography>
                                Save
                            </Typography>
                        </Button>

                    </Grid>
                    {/* Form Text fields + button ends */}

                </Grid>
                {/* pic + form container ends */}

            </Box>

    )
}

export default AddRestaurant;