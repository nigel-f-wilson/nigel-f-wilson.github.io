import React from 'react';

// MY components
import PhotoGrid from "../../../components/PhotoGrid";
import SquarePhotoCard from "../../../components/SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// MY images
// lime images
import lime_harvest from "../../../images/other_crops/lime_harvest.JPG";


const photoSet = [
    {
        img: lime_harvest,
        title: 'A pile of fresh picked limes.',
        description: 'A pile of fresh picked limes.',
        gridCols: 12,
        hideTitle: true,
    }, 
];


                
export default function LimeInfo(props) {
    return (
        <React.Fragment>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    IconButtonProps={{ 'color': '#fff' }}
                >
                    <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                        Limes
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                        Lime season is at its peak in July and August but the trees bear fruit in smaller quantity 
                        throughout most of the year. The lime tree is the oldest citrus tree in the garden and the only
                        one that currently produces enough to sell but there are also mandarin, grapefruit, and lemon trees
                        that will begin producing excess fruit next year. Besides the fruit, we also sell lime leaves 
                        as a specialty ingredient for coctails.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <PhotoGrid data={photoSet} />
        </React.Fragment>
    )
}

