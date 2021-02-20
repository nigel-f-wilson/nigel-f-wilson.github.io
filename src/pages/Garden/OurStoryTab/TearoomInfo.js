import React from 'react';

// MY components
import PhotoGrid from "../../../components/PhotoGrid";
import SquarePhotoCard from "../../../components/SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


// MY images
import tearoom_complete from "../images/tearoom_complete.JPG";
import tearoom_framed from "../images/tearoom_framed.png";
import tearoom_insulated from "../images/tearoom_framed.png";


const photoSet = [
    {
        img: tearoom_complete,
        title: 'The Tea Room',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: tearoom_insulated,
        title: 'Classroom under construction',
        gridCols: 4,
        hideTitle: true,
    },  {
        img: tearoom_framed,
        title: 'The Tea Room',
        gridCols: 4,
        hideTitle: true,
    }
];


export default function TearoomInfo(props) {
    return (
        <Box py={3} >
            <Typography align='left' color='textPrimary' component='h3' variant='h3'>
                Building the Tea Room
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                During my first year living in the garden I build a fence out of recycled pallets, 
                a toolshed, and a tower to mount my solar panels on. The next year I built the "Tea Room" 
                so I'd have a more comfortable place to sleep than my van. The Tea Room is a truly tiny
                structure. It is built on a 5' by 8' trailer, but the walls slope outward, giving you extra 
                headspace and making the interior feel a lot bigger than it really is.

            </Typography>
            <PhotoGrid data={photoSet} />
        </Box>
    )
}
