import { Button, Grid, Paper, Typography } from '@material-ui/core';
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon
} from '@material-ui/icons';

import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

interface Props {}

export const ContactFormSubmission = () => {
  const location = useLocation<any>();
  const history = useHistory();

  useEffect(() => {
    if (!location.state) {
      history.push('/contact');
    }
  }, []);
  if (location.state) {
    return (
      <div className='f12-contact-form-submission'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          style={{
            maxWidth: 450,
            height: '100vh',
            margin: 'auto'
          }}
        >
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '40px 20px' }}>
              <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
              >
                <Grid item xs={12}>
                  {location.state.success ? (
                    <CheckCircleIcon
                      style={{ color: '#64c64b', fontSize: '140' }}
                    />
                  ) : (
                    <CancelIcon color='secondary' style={{ fontSize: '140' }} />
                  )}
                </Grid>
                <Grid item xs={12} style={{ padding: '20px' }}>
                  <Typography variant='body1'>
                    {location.state.success
                      ? `Your message has been received. I will attend to your query
                    as soon as possible.`
                      : `Sorry something went wrong. Please try again`}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='contained'
                    onClick={() => {
                      history.push('/contact');
                    }}
                  >
                    {location.state.success ? 'Return' : 'Try Again'}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <></>;
  }
};
