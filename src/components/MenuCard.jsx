import {Card, CardMedia, CardContent,Stack, Box, Typography, IconButton, useTheme } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const RestaurantCard = (props) => {
    const theme = useTheme();
    const {name, restLogo, description, delivery, type, location, priceCategory, rating } = props;
    // let bckImage = restLogo? restLogo : "https://burgerlab.com.pk/wp-content/uploads/2022/02/Untitled-1-1-1.jpg?c062ef&c062ef"
    let bckImage = restLogo? restLogo : "https://cdn.shopify.com/s/files/1/0656/9387/6462/products/Luxurygiftsdelivery.com-11.jpg?v=1675647971"

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
                             padding: "15px 20px 15px 20px !important"
                             // paddingBottom: "5px"
                         }}>
                {/* name of rest... */}
                <Typography gutterBottom variant="h5" component="div" noWrap="true">
                    {name? name : "Unknown Restaurant"}
                </Typography>

                <Box sx={{
                    height: "50px"
                }}>
                    <Typography gutterBottom component="div"  sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                    }}>
                        {description? description : "Unknown description descriptio n descriptionde scriptiondescriptiondescriptio ndescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptionriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"}
                    </Typography>
                </Box>


                {/* delivery time & See menu button */}
                <Stack direction="row"
                       sx={{
                           justifyContent: "space-between",
                           alignItems: "center"
                       }}>
                    <Box>
                            <Typography gutterBottom variant="h4"
                                        sx={{
                                            textAlign: "left",
                                            bottom: "0"
                                        }}>
                                {delivery? "$ "+delivery : "$15"}
                            </Typography>
                    </Box>

                    <IconButton
                        sx={{
                            background: theme.palette.selectedItem.default,
                            color: "white",
                            "&:hover": {
                                background: theme.palette.hoverItem.default,
                            }
                        }}>
                        <AddShoppingCartIcon/>
                    </IconButton>

                </Stack>


            </CardContent>
            {/*Card Content / Text Area Ends */}

        </Card>
    )
}

export default RestaurantCard;