import {Card, CardMedia, CardContent,Stack, Box, Typography, Button, useTheme } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

const RestaurantCard = (props) => {
    const theme = useTheme();
    const {name, restLogo, description, delivery, type, location, priceCategory, rating } = props;
    let bckImage = restLogo? restLogo : "https://burgerlab.com.pk/wp-content/uploads/2022/02/Untitled-1-1-1.jpg?c062ef&c062ef"
    // let bckImage = restLogo? restLogo : "https://static.vecteezy.com/system/resources/previews/003/585/854/original/gradient-background-with-light-blue-and-purple-blends-free-vector.jpg"
    // let bckImage = bImage? bImage : "https://static.vecteezy.com/system/resources/previews/013/151/036/non_2x/light-blue-pink-orange-and-purple-gradient-background-vector.jpg"



    return(
        // Card Starts here
        <Card sx={{ maxWidth: 320,
            minWidth: 320,
            borderRadius: "10px"}}>
            <CardMedia sx={{
                height: 180,
                // background: "linear-gradient(to right top, #051937, #003656, #005671, #097787, #3a9998)",
            }}
                image={bckImage}
            >

                <CardContent>
                        <Stack direction="row" gap={0.5}
                               sx={{
                                   alignItems: "center",
                                   background: "green",
                                   borderRadius: "2px",
                                   width: "60px",
                                   padding: "0px 5px 0px 5px"
                               }}>
                            <StarIcon/>
                            <Typography>
                                {rating? rating : 4.5}
                            </Typography>
                        </Stack>
                </CardContent>
            </CardMedia>

            {/*Card Content / Text Area*/}
            <CardContent height="100%"
            sx={{
                // margin: "0px 5px 0px 5px",
                padding: "5px 10px 5px 10px !important"
                // paddingBottom: "5px"
            }}>
                {/* name of rest... */}
                <Typography gutterBottom variant="h5" component="div" noWrap="true">
                    {name? name : "Unknown Restaurant"}
                </Typography>


                {/* delivery time & See menu button */}
                <Stack direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        border: "1px solid grey",
                        background: "grey",
                        borderRadius: "30px",
                        padding: "2px 10px 0px 10px"
                    }}>
                        <Stack direction="row">
                            <AccessTimeIcon/>
                            <Typography gutterBottom
                                        sx={{
                                            textAlign: "left",
                                            bottom: "0"
                                        }}>
                                {delivery? delivery : "15-20 min"}
                            </Typography>
                        </Stack>
                    </Box>

                    <Button
                        sx={{
                            background: theme.palette.selectedItem.default,
                            color: "white",
                            "&:hover": {
                                background: theme.palette.hoverItem.default,
                            }
                        }}>
                        <Typography>
                            See Menu
                        </Typography>
                    </Button>
                </Stack>

                {/* Restaturant Type: Non-Veg & Price Category */}
                <Stack direction="row"
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center"}}>
                    <Typography>
                        {type? type : "Non-Veg"}
                    </Typography>
                    <Typography>
                        {priceCategory? priceCategory : "$$$"}
                    </Typography>

                </Stack>

            </CardContent>
            {/*Card Content / Text Area Ends */}

        </Card>
    )
}

export default RestaurantCard;