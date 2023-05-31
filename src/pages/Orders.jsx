import OrdersTable from "../components/dataTables/OrdersTable";
import {Box, Stack, Grid, Typography} from "@mui/material";
import {BookingsCard} from "../components";


const Orders = () => {

    return(

        <Box  sx={{
            padding: "20px"
        }}>
            {/* heading */}
            <Typography variant="h3">Orders</Typography>

            {/*  */}
            <Box sx={{
                margin: "30px"
            }}>
                <Stack>
                    <Grid container sx={{
                        justifyContent: "center"
                    }}>
                        <Grid item xs={10} sm={10} md={11} lg={11} xl={11}>
                            <OrdersTable/>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
        </Box>


    )
}

export default Orders;