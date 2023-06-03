import {Box, Stack, Grid, Typography} from "@mui/material";
import {AddMenuForm} from "../../components";

const AddMenu = () => {

    return (
        <Box width="100%"
             sx={{
                 padding: "20px"
             }}>
            {/* heading */}
            <Typography variant="h3">Add Menu</Typography>
            <AddMenuForm/>
        </Box>
    );
}

export default AddMenu;