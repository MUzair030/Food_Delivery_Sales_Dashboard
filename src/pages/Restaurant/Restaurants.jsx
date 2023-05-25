import {Box, Stack, Button, useTheme, Typography} from "@mui/material";
import {RestaurantCard} from "../../components";
import { useNavigate } from "react-router-dom";

const Restaurants = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleAddVendor = () => {
        console.log("clickeddd")
        navigate("/restaurants/add")
    }

    const handleVendorRequests = () => {
        navigate("/restaurants/requests")
    }


    return(
        <Box>

            {/*  Top Button Bar Starts  */}
            <Box
            sx={{
                padding: "20px",
            }}>
                <Stack direction="row" gap={2}
                sx={{
                    justifyContent: "right"
                }}>
                    <Button
                        sx={{
                            background: theme.palette.selectedItem.default,
                            padding: "10px",
                            color: "white",
                            "&:hover": {
                                background: theme.palette.hoverItem.default,
                            }
                        }}
                        onClick={handleAddVendor}>
                        <Typography>
                            Add Vendor
                        </Typography>
                    </Button>

                    <Button
                        sx={{
                            background: theme.palette.selectedItem.default,
                            padding: "10px",
                            color: "white",
                            "&:hover": {
                                background: theme.palette.hoverItem.default,
                            }
                        }}
                        onClick={handleVendorRequests}>
                        <Typography>
                            Vendor Requests
                        </Typography>
                    </Button>
                </Stack>
            </Box>
            {/*  Top Button Bar Ends  */}

            {/* Approved Restaurants */}
            <Box sx={{
                padding: "0px 20px 0px 20px"
            }}>
                <h2>
                    Approved Restaurants
                </h2>
                <Stack direction="row" gap={5}
                    sx={{
                        flexWrap: "wrap"
                    }}>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                    <RestaurantCard/>
                </Stack>
            </Box>

        </Box>
    )
}

export default Restaurants;