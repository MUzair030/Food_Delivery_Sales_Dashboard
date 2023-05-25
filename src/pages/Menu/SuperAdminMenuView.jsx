import {Box, Stack, Button, useTheme, Typography, Grid} from "@mui/material";
import {MenuCard, RestaurantCard} from "../../components";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";

const SuperAdminMenuVIew = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [restaurantList, setRestaurantList] = useState(["All","A Restaurant","B Restaurant", "C Restaurant"]);
    const [selectedRest, setSelectedRest] = useState('');


    const handleRestaurantSelect = () => {
        // navigate("/restaurants/requests")
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
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="selected-restaurant"
                        value={selectedRest}
                        onChange={(e)=> setSelectedRest(e.target.value)}
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
                        {
                            restaurantList.map((r)=> (
                                <MenuItem value={r}>{r}</MenuItem>
                                )
                            )
                        }

                    </Select>

                    <Button
                        sx={{
                            background: theme.palette.selectedItem.default,
                            padding: "10px",
                            color: "white",
                            "&:hover": {
                                background: theme.palette.hoverItem.default,
                            }
                        }}
                        onClick={handleRestaurantSelect}>
                        <Typography>
                            Select
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

export default SuperAdminMenuVIew;