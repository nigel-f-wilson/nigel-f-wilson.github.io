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
import loquats from "../../../images/loquat/loquats.JPG";
import loquat_harvest from "../../../images/loquat/loquat_harvest.JPG";
import loquat_blossom from "../../../images/loquat/loquat_blossom.JPG";


const photoSet = [
    {
        img: loquat_harvest,
        title: 'loquat_harvest',
        description: ' ',
        gridCols: 12,
        hideTitle: true,
    }, {
        img: loquats,
        title: ' ',
        description: '',
        gridCols: 6,
        hideTitle: true,
    }, {
        img: loquat_blossom,
        title: ' ',
        description: '',
        gridCols: 6,
        hideTitle: true,
    },
];


                
export default function LoquatInfo(props) {
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
                        Loquat
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                        Also known as Japanese plums or as Misbeliefs because the fruit ripens so early in the year
                        you almost wouldn't believe it! Loquats bloom in December and January, providing an excellent 
                        food source for honey bees during an otherwise scarce time of year. By late February the trees
                        are covered in delicious fruit. They can be found all over New Orleans, being a popular 
                        ornamental tree in landscapes. I sell the fruit whole and my partner makes a delicious 
                        sorbet from the rest.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <PhotoGrid data={photoSet} />
        </React.Fragment>
    )
}
