import {Card, CardMedia, CardContent,CardActions, Button, Typography } from "@mui/material";

const StatsCard = (props) => {
    const {cardHeading, bImage, value } = props;
    let bckImage = bImage? bImage : "https://static.vecteezy.com/system/resources/previews/003/585/854/original/gradient-background-with-light-blue-and-purple-blends-free-vector.jpg"
    // let bckImage = bImage? bImage : "https://static.vecteezy.com/system/resources/previews/013/151/036/non_2x/light-blue-pink-orange-and-purple-gradient-background-vector.jpg"



    return(
        // Card Starts here
        <Card sx={{ maxWidth: 280,
            minWidth: 240,
            // width: "30%",
            borderRadius: "20px"}}>
            <CardMedia sx={{
                    height: 140,
                    background: "linear-gradient(to right top, #051937, #003656, #005671, #097787, #3a9998)",
                }}
                // image={bckImage}
            >


                {/*Card Content / Text Area*/}
                <CardContent height="100%">
                    <Typography gutterBottom variant="h4" component="div">
                        {cardHeading? cardHeading : "Dummy"}
                    </Typography>

                    <Typography gutterBottom variant="h2"
                    sx={{
                        textAlign: "right",
                        bottom: "0"
                    }}>
                        {value? value : "$0.00"}
                    </Typography>
                </CardContent>
                {/*Card Content / Text Area Ends */}


            </CardMedia>


        </Card>
    )
}

export default StatsCard;