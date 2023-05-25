import { SalesCard, PaymentsCard, RestaurantsCard, DeliveriesCard, OrdersCard } from "../components";
import { Box, Stack, Grid } from "@mui/material";

const Dashboard = () => {

    return(
        <Box p={3} width="100%"
        sx={{
            margin:"auto"
        }}>

            {/*      Dashboard Cards     */}
            <Stack direction="row" gap={1} width="100%"
            sx={{
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
                overflowX: "auto",
                "&::-webkit-scrollbar": {
                display: "none"
            }
            }}>
                <PaymentsCard />
                <SalesCard />
                <RestaurantsCard />
                <OrdersCard />
                <DeliveriesCard />
            </Stack>
            {/*      Dashboard Cards  End   */}

            {/*      Dashboard Charts Start     */}

            {/*      Dashboard Charts End     */}

        </Box>



    )
}

export default Dashboard;