import {Box, Stack, Grid, Typography, Button, TextField, Divider, useTheme} from "@mui/material";
import {AppButton} from "./index";
import {useState} from "react";
import App from "../App";
import Upload from "rc-upload/es";
import AddIcon from "@mui/icons-material/Add";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddMenuForm = () => {
    const theme = useTheme();
    const [variants, setVariants] = useState(0);
    const [priceDisable, setPriceDisable] = useState(false);
    const [category, setCategory] = useState(null);
    const [categoryType, setCategoryType] = useState(null);

    const updateVariants = () => {
        console.log(variants)
        setVariants(variants + 1);
        setPriceDisable(true)
    }

    const submitForm = (e) => {
        e.preventDefault();
        const data = {
            // category: e.target['category'].value,
            // categoryType: e.target['category-type'].value,
            category: category,
            categoryType: categoryType,
            itemName: e.target['item-name'].value,
            description: e.target['description'].value,
            price: e.target['price'].value,
            deal: e.target['deal'].value,
            variants: [],
            weight: e.target['weight'].value,
            dimensions: e.target['dimensions'].value,
        }
        const variantsArr = [...Array(variants)];
        variantsArr.map((v,i)=>{
            let variant={};
            variant['variant-name'] = e.target['variant-name-'+i].value;
            variant['variant-price'] = e.target['variant-price-'+i].value;
            data.variants.push(variant)
        });
        console.log("submitForm add menu ::: ", data)
        // navigate("/menu")
    }


    return (
        <Box component="form" onSubmit={submitForm}>

            {/* main Box containing form and pic Boxes/Grids */}
            <Box sx={{
                display: {
                    sx: "block",
                    sm: "block",
                    md: "block",
                    lg: "flex",
                    xl: "flex",
                },
                width: "90%",
                margin: "auto"
            }}>

                {/* main Box for form fields */}
                <Box sx={{
                    width: "70%",
                    // margin: "auto"
                }}>
                    {/* Basic Inforamtion Form */}
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Box pb={2}>
                                <Typography variant={"h4"}>
                                    Basic Information
                                    <Divider color="white" width="100%"/>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                            {/*<TextField*/}
                            {/*    // error*/}
                            {/*    id="category"*/}
                            {/*    label="Category"*/}
                            {/*    helperText=" "*/}
                            {/*    variant="standard"*/}
                            {/*    variant="filled"*/}
                            {/*    sx={{*/}
                            {/*        ".css-1ascq1m-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {*/}
                            {/*            color: "black"*/}
                            {/*        },*/}
                            {/*        ".css-134sb7c-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {*/}
                            {/*            color: "black"*/}
                            {/*        },*/}
                            {/*        width:"100%",*/}
                            {/*        input: {*/}
                            {/*            color: "black"*/}
                            {/*        }*/}
                            {/*    }}*/}
                            {/*/>*/}
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="category"
                                value={category}
                                onChange={(e)=> setCategory(e.target.value)}
                                label="Category"
                                sx={{
                                    width: "100%",
                                    marginBottom: "10px",
                                    color: "white"
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Tea"}>Tea</MenuItem>
                                <MenuItem value={"Drink"}>Drink</MenuItem>
                                <MenuItem value={"Fast Food"}>Fast Food</MenuItem>
                            </Select>
                        </Grid>

                        <Grid item md={1} lg={1} xl={1}></Grid>

                        <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                            {/*<TextField*/}
                            {/*    // error*/}
                            {/*    id="category-type"*/}
                            {/*    label="Category Type"*/}
                            {/*    helperText=" "*/}
                            {/*    variant="standard"*/}
                            {/*    variant="filled"*/}
                            {/*    sx={{*/}
                            {/*        ".css-1ascq1m-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {*/}
                            {/*            color: "black"*/}
                            {/*        },*/}
                            {/*        ".css-134sb7c-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {*/}
                            {/*            color: "black"*/}
                            {/*        },*/}
                            {/*        width:"100%",*/}
                            {/*        input: {*/}
                            {/*            color: "black"*/}
                            {/*        }*/}
                            {/*    }}*/}
                            {/*/>*/}
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="category"
                                value={categoryType}
                                onChange={(e)=> setCategoryType(e.target.value)}
                                label="Category Type"
                                sx={{
                                    width: "100%",
                                    marginBottom: "10px",
                                    color: "white"
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Small Meal"}>Small Meal</MenuItem>
                                <MenuItem value={"Main Course"}>Main Course</MenuItem>
                                <MenuItem value={"Dessert"}>Dessert</MenuItem>
                                <MenuItem value={"Drink"}>Drink</MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                            <TextField
                                // error
                                id="item-name"
                                label="Item Name"
                                helperText=" "
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

                        <Grid item md={1} lg={1} xl={1}></Grid>

                        <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                            <TextField
                                // error
                                id="description"
                                label="Description"
                                helperText=" "
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

                        <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                            <TextField
                                // error
                                disabled={priceDisable}
                                id="price"
                                label="Price"
                                helperText=" "
                                type="number"
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

                        <Grid item md={1} lg={1} xl={1}></Grid>

                        <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                            <TextField
                                // error
                                disabled={priceDisable}
                                id="deal"
                                label="Deal"
                                helperText=" "
                                type="number"
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
                    {/* Basic Inforamtion Form ENDS here */}


                    {/*     add variations  */}
                    <Grid container sx={{
                        // textAlign: "center",
                        justifyContent: "center",
                        marginTop: "20px"
                    }}>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Box pb={2}>
                                <Typography variant={"h4"}>
                                    Item Variations
                                    <Divider color="white" width="100%"/>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Box pb={2} sx={{
                                textAlign: "left"
                            }}>
                                <AppButton title="+ Add Variant" handleClick={updateVariants} />
                            </Box>
                        </Grid>

                        {
                            [...Array(variants)].map((val, idx)=> (
                                <>
                                    <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                                        <TextField
                                            // error
                                            id={'variant-name-'+idx}
                                            label="Variant Name"
                                            helperText=" "
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

                                    <Grid item md={1} lg={1} xl={1}></Grid>

                                    <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                                        <TextField
                                            // error
                                            id={'variant-price-'+idx}
                                            label="Variant Price"
                                            helperText=" "
                                            type="number"
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
                                </>
                            ))
                        }

                    </Grid>
                    {/*     add variations  END */}


                    {/* Package Information */}
                    <Grid container sx={{
                        // textAlign: "center",
                        // justifyContent: "center",
                        marginTop: "20px"
                    }}  >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Box pb={2}>
                                <Typography variant={"h4"}>
                                    Package Information
                                    <Divider color="white" width="100%"/>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                            <TextField
                                // error
                                id={'weight'}
                                label="Weight"
                                helperText=" "
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

                        <Grid item md={1} lg={1} xl={1}></Grid>

                        <Grid item xs={10} sm={10} md={5} lg={4} xl={4}>
                            <TextField
                                // error
                                id={'dimensions'}
                                label="Dimensions"
                                helperText=" "
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
                    {/* Package Information End */}


                </Box>
                {/* main Box for form fields ENDS */}

                {/* main Box for Item Picture */}
                <Box width="30%" pt={5}>
                    <Stack gap={2}
                           sx={{
                               textAlign: "center"
                           }}>
                        {/*  Picture Dispay  */}
                        <Box>
                            <Box component="img"
                                 width="230px"
                                 height="230px"
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
                </Box>
                {/* main Box for Item Picture ENDS */}

            </Box>

            {/* Save Button */}
            <Box sx={{
                width: "90%",
                margin: "auto",
                marginTop: "50px",
                textAlign: "left"
            }}>
                <AppButton title="Save Item" type="submit" />
            </Box>
            {/* Save Button End */}

        </Box>

    )
}

export default AddMenuForm;