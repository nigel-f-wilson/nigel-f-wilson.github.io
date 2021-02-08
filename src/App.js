import React from 'react';

// REACT ROUTER
import {
    BrowserRouter as Router,
    Link as RouterLink,
    Route,
    Switch
} from "react-router-dom";

// MY COMPONENTS
import LandingPage from "./pages/Landing";

import TeachPage from "./pages/Teach/Teach";
import MathGamesPage from "./pages/Teach/MathGames";
import PuzzleCollectionPage from "./pages/Teach/PuzzleCollection"

import GardenPage from "./pages/Garden/Garden.js";
import AboutMePage from "./pages/AboutMe";
import ContactPage from "./pages/Contact";

//  MUI imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// import CssBaseline from '@material-ui/core/CssBaseline';


import theme from "./theme";
import {
    makeStyles, 
    ThemeProvider } from '@material-ui/core/styles';

import './App.css';

const useStyles = makeStyles((theme) => ({
    app: {
        
        minHeight: '100vh',
        minWidth: '100vw',

    },
    

}));


// App.js provides the Theme and Routing between pages

export default function App() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Router basename='/'>
                    <Switch>
                        
                        {/* LANDING */}
                        <Route exact path="/">
                            <LandingPage />
                        </Route>

                        {/* TEACHING SERVICES */}
                        <Route path="/teach"
                            component={TeachPage}
                        />
                        {/* Alternate implementation of render with props (active tab) */}
                        {/* <Route path="/teach/:tab"
                            render={(props) => (
                                <TeachPage {...props} />
                            )}
                        /> */}

                        <Route path="/math_games">
                            <MathGamesPage />
                        </Route>

                        <Route path="/puzzle_collection">
                            <PuzzleCollectionPage />
                        </Route> 

                        

                        {/* GARDEN PAGE */}
                        <Route path="/garden" 
                            component={GardenPage}
                        /> 


                        {/* ABOUT ME */}
                        <Route path="/about_me"
                            component={AboutMePage}
                        /> 


                        <Route path="/contact">
                            <ContactPage />
                        </Route> 
                        
                    </Switch>
                </Router>
      
            </ThemeProvider>
        </React.Fragment>
    );
}

