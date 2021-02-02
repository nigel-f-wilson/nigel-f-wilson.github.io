import React from 'react';

// MY components
import PhotoGrid from "../../../components/PhotoGrid";
import SquarePhotoCard from "../../../components/SquarePhotoCard";

// MUI CORE Imports
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// MY images
// banana images
import banana_flower from "../../../images/banana/banana_flower.JPG";
import banana_papaya_top from "../../../images/banana/banana_papaya_top.JPG";
import banana_bunch from "../../../images/banana/banana_bunch.JPG"
import holding_banana_bunches from "../../../images/banana/holding_banana_bunches.JPG"


const photoSet = [
    {
        img: banana_flower,
        title: 'Banana Flower',
        description: 'Banana flower descending',
        gridCols: 12,
        hideTitle: true,
    }, {
        img: banana_bunch,
        title: 'Banana Flower',
        description: 'Banana flower descending',
        gridCols: 4,
        hideTitle: true,
    }, {
        img: holding_banana_bunches,
        title: 'Banana and Papaya Harvest',
        description: 'Being from Ohio originally I never imagined being able to grow tropical fruits like these outdoors.',
        gridCols: 4,
        hideTitle: true,
    },
    {
        img: banana_papaya_top,
        title: 'Banana and Papaya Harvest',
        description: 'Being from Ohio originally I never imagined being able to grow tropical fruits like these outdoors.',
        gridCols: 4,
        hideTitle: true,
    },
];


export default function ClassroomInfo(props) {
    return (
        <React.Fragment>
            <Typography align='left' color='textPrimary' component='h3' variant='h3'>
                Building the Classroom
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Through a stroke of luck, in 2018, I was able to purchase the lot adjacent to the original garden.
                I bought an eight by twenty foot trailer frame and began planning the tiny-house-like structure that
                would eventually serve as the Classroom. 
                
            </Typography>
            <PhotoGrid data={photoSet} />
        </React.Fragment>
    )
}

// function BananaPhotoGrid(props) {
//     return (
//         <Box my={2}  >
//             <Grid container
//                 spacing={1}
//             >
//                 {photoSet.map((tile) => (
//                     <Grid item xs={12} sm={tile.gridCols}
//                         key={tile.img}
//                     >
//                         <SquarePhotoCard img={tile.img} />

//                     </Grid>
//                 ))}
//             </Grid>
//         </Box>
//     )
// }


// function PhotoGrid(props) {
//     return (
//         <Grid container
//             spacing={2}
//         >
//             {props.data.map((tile) => (
//                 <Grid item xs={12} sm={tile.gridCols}
//                     key={tile.img}
//                 >
//                     <SquarePhotoCard img={tile.img} />
//                     {/* <SquarePhotoCard tileData={tile} /> */}
//                 </Grid>
//             ))}
//         </Grid>
//     );
// }