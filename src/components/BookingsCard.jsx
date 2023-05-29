import {Box, Stack, Grid, styled, Paper, useTheme, Typography, Button, Divider} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import ViewListIcon from '@mui/icons-material/ViewList';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AppButton from "./AppButton";

const BookingCard = (props) => {

    const theme = useTheme();
    const { title, address, orderAmount, time, orderDetails, amountPayable } = props;

    const handleApprove = (e) => {
        console.log("handleApprove :::: ", e)
    }

    const handleEdit = (e) => {

    }

    const handleCancel = (e) => {

    }

    return(
        <Box sx={{
            padding: "20px",
            borderRadius: "10px",
            background: theme.palette.background.alt
        }}>
            <Grid container>
                {/* pic section */}
                <Grid item xs={12} sm={12} md={4} lg={2} xl={2}>
                    <Box sx={{
                        textAlign: "center",
                    }}>
                        <Box component="img"
                             width="190px"
                             height="190px"
                             sx={{
                                 borderRadius: "5%",
                                 overflow: "hidden"
                             }}
                             src="https://burgerlab.com.pk/wp-content/uploads/2022/02/Untitled-1-1-1.jpg?c062ef&c062ef"
                        >
                        </Box>

                    </Box>
                </Grid>
                {/* pic section end */}

                {/* text section main Grid section */}
                <Grid item  xs={12} sm={12} md={6} lg={10} xl={10}>
                    <Box sx={{
                        margin: "10px"
                    }}>
                        {/* upper - pic  +  desc */}
                        <Stack gap={2}>

                            {/* title */}
                            <Typography variant={"h3"}>
                                {title? title : "null"}
                            </Typography>

                            {/* location / address */}
                            <Stack direction="row" gap={1}>
                                    <PlaceIcon/>
                                    <Typography>
                                        {address? address : "SAdasdas"}
                                    </Typography>
                            </Stack>

                            {/* order number + time */}
                            <Stack direction="row" gap={3}>
                                <Stack direction="row" gap={1}>
                                    <ViewListIcon/>
                                    <Typography>
                                        Order# &nbsp; {address}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" gap={1}>
                                    <ScheduleIcon/>
                                    <Typography>
                                        Order Time: &nbsp; {time}
                                    </Typography>
                                </Stack>
                            </Stack>

                            <Typography>
                                Order Details: &nbsp; {orderDetails}
                            </Typography>
                        </Stack>
                        {/* upper - pic  +  desc end */}

                        <Box p={1}>
                            <Divider/>
                        </Box>

                        {/* lower - price  +  action buttons */}
                        <Box>
                            <Stack direction="row"
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                {/* amount payable */}
                                <Typography variant={"h5"}>
                                    Order Amount: &nbsp; {orderAmount}
                                </Typography>

                                {/* action buttons */}
                                <Stack direction="row" gap={2}>
                                    <AppButton title="Approve"  backgroundColor="green" handleClick={handleApprove} />
                                    <AppButton title="Edit" onClick={handleEdit} />
                                    <AppButton title="Cancel" backgroundColor="red" onClick={handleCancel} />

                                </Stack>
                            </Stack>
                        </Box>
                        {/* lower - price  +  action buttons end */}

                    </Box>
                </Grid>
                {/* text section main Grid section end */}

            </Grid>

        </Box>
    )
}

export default BookingCard;


