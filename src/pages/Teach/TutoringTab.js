import React from 'react';

// MY components

// MY images
// import balance_scale from "../../images/balance_scale_waldorf.jpg";
// import multiple_choice from "../../images/multiple_choice_test.jpg";

// MUI Imports
import Typography from '@material-ui/core/Typography';



export default function TutoringTabContent() {
    return (
        <React.Fragment> 
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Availability
            </Typography>
            <Typography align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                I am currently accepting new students for online tutoring and masked in-person tutoring. <br />
                I hope to begin offering in-person lessons in the garden beginning in February 2021, though this will depend on the pandemic.
                I am not currently accepting new students for in-home tutoring.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Grade Levels and Courses Offered
            </Typography>
            <Typography align='justify' color='textPrimary' component='p' variant='body1' gutterBottom  >
                I offer one-on-one and small group math tutoring for students in 3rd through 12th grades and in college level
                courses on algebra, calculus, statistics, discrete math, and probability.
                For parents of younger students I offer guidance on how best to help children with their homework.
                I am happy to serve as a math mentor to students who are homeschooled. Math Mentoring involves a combination
                of enrichment and tutoring on topics required by grade level standards.
                Be sure to check out the "Enrichment" tab to read about some of the hands-on explorations I have used to get
                kids in touch with thhe fun side of math.
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                Pricing
            </Typography>
            <Typography align='justify' color='textPrimary' component='p' variant='body1' gutterBottom  >
                For private tutoring with students in grade school and high school I charge $40 per hour.
                For private tutoring with students taking Calculus, AP, and College level mathematics courses I charge $55 per hour.
                {/* I also offer guidance for parents with young children (ages 6-10) on how they can best support their kids' in math.  */}
                Prices for small group tutoring can be negotiated on a case-by-case basis.
                Students who commit to two or more hours of tutoring per week will also recieve support between lessons via text meassage.
                Discounted rates on tutoring services are available for adding on chess lessons or math enrichment.
                We believe that quality education should be accessible to any student willing to apply themselves.  
                If cost is an issue but you think that you'd mesh exceptionally well with the STEM Garden, please reach out to me personally, 
                I am happy to barter or make work-trade agreements (tutoring in exchange for help with garden projects). 
            </Typography>
            <Typography align='left' color='textPrimary' gutterBottom component='h3' variant='h4'>
                My Math Teaching Experience
            </Typography>
            <Typography align='justify' color='textPrimary' component='p' variant='body1' gutterBottom >
                I earned my degree in math education from Ohio University in 2015. While working toward my degree I completed several internships in
                rural and inner city public schools in Ohio. For my final semester-long teaching internship I lived in New Delhi, India and taught at
                Step-By-Step School.  In 2016, I moved from Ohio to New Orleans to launch my teaching career at Einstein Middle School.
                Within a few months of moving I purchassed a blighted vacant lot and began the long process of cleaning it up and
                transforming it into the STEM Garden. Throughout the next two years I spent my mornings developing the garden and taught math and physics
                at College Track, an afterschool program for aspiring first generation college students.
                After College Track, I took a break from classroom-based teaching. Students are full of questions about the "real-world" uses for the math
                they are taught in school so it serves a math teacher well to have some personal experience using math in the "real-world".
                I worked as farm manager for Recirculating Farms Coaltion and got to learn a lot about aquaponics and the math required to run
                the business side of a small farm. I also worked as an electrician's assistant with Ziemba Electric and Atlas Electric.
                I already had some text-book understanding of electrical circuits, but through this experience I learned how to go from theory
                all the way through to craftsmanlike installations.
                During the 2019-2020 school year I was back in the classroom, working as the math specialist at the Waldorf School of New Orleans.
                I designed curriculum and taught math to students in grades 4-8. I taught through the transition to remote learning, but at the end
                of the year the school had to downsize. Throughout the previous four years I had taken occasional gigs as a free lance in-home math tutor but
                the pandemic pushed me to take that business online and it has been growing steadily since.
            </Typography>
        </React.Fragment>
    )
}

