import {Box, Stack, Button, useTheme, Typography, Grid} from "@mui/material";
import {MenuCard, RestaurantCard} from "../../components";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";

const RestaurantOwnerMenuVIew = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [restaurantList, setRestaurantList] = useState(["All","A Restaurant","B Restaurant", "C Restaurant"]);
    const [selectedRest, setSelectedRest] = useState('');


    const handleAddMenu = () => {
        navigate("/menu/add")
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
                           justifyContent: "left"
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
                        onClick={handleAddMenu}>
                        <Typography>
                            Add Listing
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
                    {selectedRest? selectedRest : "All"} Menu
                </h2>
                <Stack direction="row" gap={5}
                       sx={{
                           flexWrap: "wrap"
                       }}>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>



                </Stack>
            </Box>

        </Box>
    )
}

export default RestaurantOwnerMenuVIew;