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
// turmeric images
import guavas from "../../../images/other_crops/guavas.JPG";
import pineapple_guava from "../../../images/flowers/pineapple_guava_flowers.JPG";


const photoSet = [
    {
        img: guavas,
        title: 'Guavas',
        description: ' ',
        gridCols: 6,
        hideTitle: true,
    },  
    {
        img: pineapple_guava,
        title: 'Guava Flowers',
        description: ' ',
        gridCols: 6,
        hideTitle: true,
    },  
];


                

export default function GuavaInfo(props) {
    return (
        <React.Fragment>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    IconButtonProps={{ 'color': 'primary' }}
                >
                    <Typography align='center' color='textPrimary' component='h2' variant='h2'>
                        Guava
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                        Guavas give a unique depth to my homegrown fruit smoothies. They are another example
                        of a fruit that many people think they don't like because they have only ever tasted 
                        them harvested prematurely, not fully ripe. The peak season for Guavas is late July 
                        through September. We sell them whole and as a frozen puree with the seeds strained out.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <PhotoGrid data={photoSet} />
 
        </React.Fragment>
    )
}

