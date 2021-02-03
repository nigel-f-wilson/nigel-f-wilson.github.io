import React from 'react';


// MY components



// MY images



// MUI Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function ForSaleTabContent() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' component='h2' variant='h2'   >
                Availability
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                One of the STEM Garden's founding princples is that it is best for food to travel as few
                miles as possible. We prefer to sell direct to consumer whenever we can.
                The best way to get your hands on STEM Garden produce is to contact us directly and ask
                what is coming ripe this week! We keep a list of interested buyers and reach out
                individually a few days before harvest in order to plan the freshest possible deliveries.
                Occasionally, when there is a large excess of one crop, we post to Facebook Marketplace,
                sell to local restaurants, and through the Nola Food Co-op.
                We love to meet our customers and give tours of the garden! Know where your food comes from!
            </Typography>
            <Typography align='left' color='textPrimary' component='h2' variant='h2' >
                Fresh
            </Typography>
            <Typography align='justify' component='p' variant='body1' gutterBottom>
                The following fresh produce is availaibe seasonally. All prices are per pound.
            </Typography>
            <Box px={2} py={1} >
                <Grid container spacing={1}  >
                    <Grid item xs={6}  >
                        <Typography noWrap align='left' gutterBottom component='p' variant='body1'>
                            Cucumbers <br />
                            Eggplant <br />
                            Tomatoes <br />
                            Papaya <br />
                            Burro Bananas <br />
                            Dwarf Cavendish Bananas <br />
                            Guava <br />
                            Fig <br />
                            Turmeric <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={6}  >
                        <Typography align='right' gutterBottom component='p' variant='body1'>
                            $2.50 <br />
                            $2.50 <br />
                            $2.50 <br />
                            $3.00 <br />
                            $2.50 <br />
                            $3.00 <br />
                            $6.00 <br />
                            $7.50 <br />
                            $15.00 <br />
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Typography align='left' color='textPrimary' component='h2' variant='h2' >
                Frozen
            </Typography>
            <Typography align='justify' component='p' variant='body1' gutterBottom>
                We also process and freeze excess fruit at the peak of ripeness. The following are available
                year-round, pureed in quart bags:
            </Typography>
            <Box px={2} >
                <Grid container spacing={1}  >
                    <Grid item xs={6}  >
                        <Typography noWrap align='left' gutterBottom component='p' variant='body1'>
                            Papaya <br />
                            Burro Bananas <br />
                            Fig <br />
                            Guava (strained) <br />
                            Turmeric (shredded) <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={6}  >
                        <Typography align='right' gutterBottom component='p' variant='body1'>
                            $3.50 <br />
                            $3.50 <br />
                            $8.00 <br />
                            $7.50 <br />
                            $18.00 <br />
                        </Typography>
                    </Grid>
                </Grid>

            </Box>
        </React.Fragment>
    )
}

