import {Card, CardMedia, CardContent,CardActions, Button, Typography } from "@mui/material";

const StatsCard = (props) => {
    const {cardHeading, bImage, value } = props;
    let bckImage = bImage? bImage : "https://static.vecteezy.com/system/resources/previews/003/585/854/original/gradient-background-with-light-blue-and-purple-blends-free-vector.jpg"
    // let bckImage = bImage? bImage : "https://static.vecteezy.com/system/resources/previews/013/151/036/non_2x/light-blue-pink-orange-and-purple-gradient-background-vector.jpg"
    return(
        <Card sx={{ maxWidth: 280,
            minWidth: 240,
            // width: "30%",
            borderRadius: "20px"}}>
            <CardMedia
                sx={{ height: 140,
                }}
                image={bckImage}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cardHeading? cardHeading : "Dummy"}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div"
                    sx={{
                        textAlign: "right",
                        bottom: "1px"
                    }}>
                        {value? value : "$0.00"}
                    </Typography>
                </CardContent>
            </CardMedia>

            {/*<CardContent>*/}
            {/*    <Typography gutterBottom variant="h5" component="div">*/}
            {/*        Lizard*/}
            {/*    </Typography>*/}
            {/*</CardContent>*/}
            {/*<CardActions>*/}
            {/*    <Button size="small">Share</Button>*/}
            {/*    <Button size="small">Learn More</Button>*/}
            {/*</CardActions>*/}
        </Card>
    )
}

export default StatsCard;