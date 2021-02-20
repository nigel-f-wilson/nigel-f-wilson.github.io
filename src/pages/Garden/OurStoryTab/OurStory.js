import React from 'react';

// MY components
import SquarePhotoCard from "../../../components/SquarePhotoCard";


// OUR STORY
import WildlifePhotoGrid from "./WildlifePhotoGrid";
import TearoomInfo from "./TearoomInfo";
import ClassroomInfo from "./ClassroomInfo";


// MY images
// early days images
import mattresses from "../../../images/early_days/mattresses.JPG";
import trash_in_dirt from "../../../images/early_days/trash_in_dirt.JPG";

// MUI Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';




export default function OurStoryTabContent() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h3'>
                How I Got Into Gardening
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Before I ever tried my hand at gardening I was interested in foraging for edible wild plants and
                my garden still shows signs of this influence. While certain crops are planted in neat rows
                and managed carefully, many other species are naturalized here and are allowed to thrive
                wherever their seeds happen to sprout. Because of this approach,
                a walk around the garden always has a surprize in store!
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                I got serious about gardening when I was a sophomore at Ohio University. Growing under
                the mentorship of Dr. Art Tesse in the well-loved soil of the University Research Gardens,
                I learned one of the most important lessons about gardening, one that has stuck with
                me ever since and become a pillar of the way I practice gardening in the STEM Garden:
                Gardening is less about taking care of plants than most folks would suspect, it is really
                about taking care of the soil and the whole mini-ecosystem.
                Take good care of the soil and the rest of the garden takes care of itself.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h3'>
                Early Days
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                After my first three years gardening in various community gardens around Athens, Ohio I wanted to move to a warmer
                climate and buy land so that I could commit to gardening in one place for years to come, a necessary commitment if you want
                to practice gardening in a way that focuses on caring for soil.
            </Typography>
            <Box py={1} >
                <Grid container spacing={2}  >
                    <Grid item xs={12} md={6} >
                        <SquarePhotoCard img={mattresses} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <SquarePhotoCard img={trash_in_dirt} />
                    </Grid>
                </Grid>
            </Box>

            <Typography align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                In March of 2016, I won a Civic Source auction for a blighted vacant lot at the corner of Port St. and N. Galvez, in New Orleans upper ninth ward.
                Though I started experimenting right away with what plants would do well in my new garden, for the first three years most of the work was
                picking trash out of the soil, eliminating invasive species like ragweed, and bringing in 400 cubic yards of horse manure and other organic matter to compost.
            </Typography>


            <Typography align='left' color='textPrimary' component='h3' variant='h3'>
                Wildlife Habitat
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Countless frogs, toads, lizards, and birds make there home in the STEM Garden and help me by eating the bugs that would have like to eat my plants.
                The garden also supports butterflies and bees from nearby hives, offering them nectar in exchange for their work as polinators.
                I get immeasureble joy from watching all the living creatures that have found their way into this little urban oasis.
                The ability to support diverse animal life is a sign that the ecosystem as a whole is healthy.
            </Typography>
            <WildlifePhotoGrid />


            <TearoomInfo />

            <ClassroomInfo />


            <Typography align='left' color='textPrimary' component='h3' variant='h3'>
                Gardening Philosophy
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                The garden produces lots to eat, but productivity is never the top priority. My focus is always on improving soil health,
                creating wildlife habitat, and increasing bio-diversity. The garden
            </Typography>

        </React.Fragment>
    )
}

