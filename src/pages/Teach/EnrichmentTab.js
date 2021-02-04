import React from 'react';

// MY components

// MY images
// import balance_scale from "../../images/balance_scale_waldorf.jpg";
// import multiple_choice from "../../images/multiple_choice_test.jpg";

// MUI Imports
import Typography from '@material-ui/core/Typography';

export default function EnrichmentTabContent() {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Availability
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Due to the extremely hand-on nature of my math enrichment lessons they are not offered in an online format.
                I hope to begin offering in-person math enrichment lessons in the garden beginning in March 2021, though this will be depend on the pandemic.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Topics
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                By Enrichment I mean "All the math they don't teach you in school." I am a jack-of-all-trades and I have applied math to
                improve my own life in countless ways, including in building the classroom that I teach out of and the solar array that powers it.
                My approach to math enrichment focuses on learning math along the way to reaching another goal you care about, rather than learning math on
                the promise that someday down the road you'll find it useful. Enrichment can go any direction you want it to! What do you want to build?
                Here are some favorite trailheads I've used before for enrichment explorations, just to jog your imagination:<br />
                &bull;Explore the physics of sound waves and the mathematical pattern in the way the frets are spaced on the neck of a guitar.
                &bull;Build things! Learn how to design and build stable wooden structures. Work your way up to building a catault and learn geometry and calculus along the way.
                &bull;Master strategy games like Nim, Hex, the 15-Game, and logic puzzles like sudoku and ken-ken.
                &bull;Learn about the off-grid solar power system that supplies the classroom.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                My hourly rate for one-on-one math enrichment is $30. I charge less for this service than normal tutoring
                because it is more fun and I want to encourage more students to try it out!
            </Typography>

        </React.Fragment>
    )
}

