import DeliveryTable from "../components/dataTables/DeliveryTable";
import {Box, Stack, Grid, Typography} from "@mui/material";
import {BookingsCard} from "../components";


const Deliveries = () => {

    return(

        <Box  sx={{
            padding: "20px"
        }}>
            {/* heading */}
            <Typography variant="h3">Deliveries</Typography>

            {/*  */}
            <Box sx={{
                margin: "30px"
            }}>
                <Stack>
                    <Grid container sx={{
                        justifyContent: "center"
                    }}>
                        <Grid item xs={10} sm={10} md={11} lg={11} xl={11}>
                            <DeliveryTable/>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </Box>


    )
}

export default Deliveries;