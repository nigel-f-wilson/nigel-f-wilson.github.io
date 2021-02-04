import React from 'react';

// MY components


// MY images
// import balance_scale from "../../images/balance_scale_waldorf.jpg";
// import multiple_choice from "../../images/multiple_choice_test.jpg";

// MUI Imports
import Typography from '@material-ui/core/Typography';


export default function TestPrepTabContent() {
    return (
        <React.Fragment >
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Tests Covered
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                I offer one-on-one coaching (online or in person) for students seeking to improve their scores on the math sections
                of the SAT&reg;, ACT&reg; and GRE&reg;. I also help students prepare for the AP&reg; Calculus and Physics exams.
            </Typography>

            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Approach
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Preparing for high-stakes standardized tests takes more than just learning the math concepts covered on them.
                You must also be prepared to apply those concepts to solve unfamiliar types of problems. This requires
                creative thinking, something that most people struggle with when under time pressure.
                I take a wholistic approach to preparing students for these exams. I don't just review the math concepts, I help
                students overcome test taking anxiety, learn to mannage their time effectively, and to recognize shortcuts when they
                are possible.
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                High-stakes standardized tests are an unfortunate and unavoidable part of the modern education landscape.
                They are neither a fair nor a complete means of assessing students' academic abilities.
                They are obsolete and reward qualities that are no longer as valuable to society as Sugata Mitra explains in his
                2012 TED Talk&reg; <a href="https://www.ted.com/talks/sugata_mitra_build_a_school_in_the_cloud?language=en">"Build a School in the Cloud"</a>
                Nonetheless, they are here to stay, and doing well on them can unlock doors. The ACT score I got when I
                was a junior in highschool was the key to me earning a full-tuition scholarship to Ohio University, and
                ultimately graduating without crushing student loan debt.  I joke that taking the ACT took me about four hours and earned
                me a $40,000 scholarship, making it by far the best hourly rate I have ever earned in my working life.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='justify' color='textPrimary' gutterBottom component='p' variant='body1'>
                Test Prep services are priced on a sliding scale, please pay according to your means.
                One-on-one test prep is offered for $45-70 per hour.
                As with math tutoring services, I want test prep to be accessible to any motivated student.
                If money is what's holding you back, I am happy to barter or make work-trade agreements.
            </Typography>
        </React.Fragment>
    )
}