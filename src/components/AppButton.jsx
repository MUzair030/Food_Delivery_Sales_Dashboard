import {Box, Button, Stack, Typography,useTheme} from "@mui/material";

const AppButton = (props) => {
        const {title, backgroundColor, hoverBackground, color, padding, handleClick} = props;
        const theme = useTheme();
    return(
        <Button
            sx={{
                background: backgroundColor? backgroundColor : theme.palette.selectedItem.default,
                padding: padding? padding : "5px",
                color: "white",
                "&:hover": {
                    background: hoverBackground? hoverBackground : theme.palette.hoverItem.default,
                }
            }}
            onClick={handleClick}>
            <Typography>
                {title? title : "no title"}
            </Typography>
        </Button>
    );
}

export default AppButton;