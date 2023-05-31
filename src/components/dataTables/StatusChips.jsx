import {Box, Typography} from "@mui/material";
import * as React from "react";

const StatusChips = (props) => {
    let bgColor = "red";
    switch (props.status){
        case "Completed":
            bgColor = "green";
            break;
        case "Active":
            bgColor = "blue";
            break;
        case "Delivered":
            bgColor = "green";
            break;
        case "Pending":
            bgColor = "blue";
            break;
    }

    return(
        <Box sx={{
            textAlign: "center",
            background: bgColor,
            padding: "5px",
            color: "white",
            borderRadius: "30px",
            width: "90px"
        }}>
            <Typography>
                {props.status}
            </Typography>
        </Box>
    );
}

export default StatusChips;