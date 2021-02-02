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
// flowers images
import passionflower        from "../../../images/flowers/passion_flower.jpg";
import sunflower            from "../../../images/flowers/sunflower.JPG";
import hibiscus_flower      from "../../../images/flowers/hibiscus_flower.JPG";
import loquat_blossom       from "../../../images/flowers/loquat_blossom.JPG";
import pineapple_guava      from "../../../images/flowers/pineapple_guava_flowers.JPG";
import pomegranite_flower   from "../../../images/flowers/pomegranite_flower.JPG";
import tobacco_flower       from "../../../images/flowers/tobacco_flower.JPG";
import yarrow_flower        from "../../../images/flowers/yarrow_flower.JPG";
import zinnia_teapot        from "../../../images/flowers/zinnia_teapot.JPG";
import jasmine_flower       from "../../../images/flowers/jasmine_flower.JPG";
import redbud_flower        from "../../../images/flowers/redbud_flower.JPG";
import shell_ginger         from "../../../images/flowers/shell_ginger.JPG";


const photoSet = [
    {
        img: passionflower,
        title: 'Passionflower',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: sunflower,
        title: 'Sunflower',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: pomegranite_flower,
        title: 'Pomegranite Flower',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: tobacco_flower,
        title: 'Tobacco Flowers',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: jasmine_flower,
        title: 'Jasmine Flowers',
        description: '',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: shell_ginger,
        title: 'Shell Ginger Flower',
        description: '',
        gridCols: 4,
        hideTitle: true,
    },
];



export default function FlowerInfo(props) {
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
                        Flowers
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align='justify' color='textPrimary' component='h2' variant='body1' >
                        I prefer to grow food and don't put a lot of energy into growing ornamental plants.
                        That said, there are many food producing plants that also have beautiful flowers.
                        Some plants I grow primarily for their flowers as a way to attract pollinators. 
                        Other flowering plant are grown for their ability to draw pests away from their 
                        food-producing neighbors.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <PhotoGrid data={photoSet} />
        </React.Fragment>
    )
}

