import {BookingsCard} from "../components";
import {Box, Stack, Grid, Typography} from "@mui/material";
const Bookings = () => {

    return(

        <Box  sx={{
            padding: "20px"
        }}>
            {/* heading */}
            <Typography variant="h3">Bookings</Typography>

            {/*  */}
            <Box sx={{
                margin: "30px"
            }}>
                <Stack gap={2}>
                    <BookingsCard/>
                    <BookingsCard/>
                    <BookingsCard/>
                    <BookingsCard/>

                </Stack>
            </Box>
        </Box>
    )
}

export default Bookings;