// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { Box, Typography, Button } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: theme.palette.common.black,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    
}));

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpzbnqoa");
  if (state.succeeded) {
    return (
      <Typography color='textPrimary' >
        Your message sent successfully! Thanks for reaching out!
      </Typography>
    )
  }
  return (
      <form onSubmit={handleSubmit}>

    <Box display='flex' flexDirection='column' height="50vh" p={1} >
        {/* <label htmlFor="email">
          Email Address
        </label> */}
        <Box display='flex' flexDirection='column' p={2} paddingBottom={2} >
          <Typography color='textPrimary' >
            Your Email Address
          </Typography>
          <input
            id="email"
            type="email" 
            name="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </Box>
        <Box display='flex' flexDirection='column' p={2}  >
          <Typography color='textPrimary' >
            Message:
          </Typography>
          <textarea
            id="message"
            name="message"
            rows={6}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </Box>
       
        <Box p={2} >
          <Button type="submit" variant='contained' color='primary' disabled={state.submitting} >
            Submit
          </Button>
        </Box>
    </Box>
      </form>

  );
}

