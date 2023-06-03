import { Box } from "@mui/material";
import {SuperAdminMenuView} from "../index";
import RestaurantOwnerMenuVIew from "./RestaurantOwnerMenuView";


const Menu = () => {

    return(
        <Box>
            {/*<SuperAdminMenuView/>*/}
            <RestaurantOwnerMenuVIew/>
        </Box>
    );
}

export default Menu;