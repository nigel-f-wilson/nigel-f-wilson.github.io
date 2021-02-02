import React from 'react';

// WHAT WE GROW
import BananaInfo from "./BananaInfo";
import PapayaInfo from "./PapayaInfo";
import TurmericInfo from "./TurmericInfo";
import LimeInfo from "./LimeInfo";
import LoquatInfo from "./LoquatInfo";
import FigInfo from "./FigInfo";
import GuavaInfo from "./GuavaInfo";
import FlowerInfo from "./FlowerInfo";
import OtherCropsInfo from "./OtherCropsInfo";

// MUI Imports
import Grid from '@material-ui/core/Grid';



export default function WhatWeGrow() {
    return (
        <Grid container spacing={3} >
            <Grid item xs={12} md={6}>
                <BananaInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <PapayaInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <TurmericInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <LoquatInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <LimeInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <FigInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <GuavaInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <FlowerInfo />
            </Grid>

            <Grid item xs={12} md={6}>
                <OtherCropsInfo />
            </Grid>


        </Grid>
    )
}