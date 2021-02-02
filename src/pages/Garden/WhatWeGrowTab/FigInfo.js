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
import fig_harvest from "../../../images/fig/fig_harvest.JPG";
import fig_tree from "../../../images/fig/fig_tree.JPG";

const photoSet = [
    {
        img: fig_harvest,
        title: 'Ripe figs',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: fig_tree,
        title: 'fig tree',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, 
];



export default function FigInfo(props) {
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
                        Figs
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                        Figs are available throughout the summer. 
                        They are pollenated by wasps, not bees or butterflies.
                        We sell the fruit, fresh and frozen, as well as rooted cuttings for those who want
                        to grow their own fig trees.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            
            <PhotoGrid data={photoSet} />

        </React.Fragment>
    )
}

