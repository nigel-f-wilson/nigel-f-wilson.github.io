import React from 'react';

// MY components
import PhotoGrid from "../../../components/PhotoGrid";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


// MY images
import classroom_framed from "../images/classroom_framed.JPG";
import classroom_rafters from "../images/classroom_rafters.JPG";
import classroom_complete from "../images/classroom_complete.JPG";


const photoSet = [
    {
        img: classroom_rafters,
        title: 'Classroom under construction',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: classroom_complete,
        title: 'Classroom complete',
        gridCols: 4,
        hideTitle: true,
    },
    {
        img: classroom_framed,
        title: 'Classroom framed',
        gridCols: 4,
        hideTitle: true,
    },
];


export default function ClassroomInfo(props) {
    return (
        <Box py={3} >
            <Typography align='left' color='textPrimary' component='h3' variant='h3'>
                Building the Classroom
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                In 2018, I was able to purchase the lot adjacent to the original garden, doubling its size.
                shortly afterward I bought a larger trailer (8' by 20') and began building a space to serve as 
                my workshop and my classroom for hosting my tutoring clients.
                
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                The Classroom roof became the new mounting place for my solar panels, and I tore down 
                the rickety tower they had been on. Besides generating its own electrical power, the 
                Classroom also makes use of passive cooling. 
                The Classroom's outer layer is sheet metal, which can get quite hot in the summer sun. 
                I designed the walls and roof to be hollow in a way that lets most of the heat escape via convection 
                before it makes its way through the inner walls to the living space.
                
            </Typography>
            <PhotoGrid data={photoSet} />
        </Box>
    )
}

