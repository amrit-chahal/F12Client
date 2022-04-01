import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';

import React from 'react';
import DownloadIcon from '@material-ui/icons/GetApp';

import pmIcon from '../static/pm_icon.png';

const useStyles = makeStyles((theme) => ({
  propmateImg: {
    width: '100%',
    maxWidth: '50vw',
    filter: 'drop-shadow(0px 30px 20px rgba(0,0,0,0.5))'
  },
  propmateContainer: {
    textAlign: 'center',
    padding: '20px'
  },
  btnDownload: {
    height: '60px',
    width: '40vh',
    borderRadius: '20px',
    backgroundColor: '#0288d1',
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: '#01579b'
    }
  },
  propmateHeading: {
    WebkitTextStrokeWidth: '.5px',
    WebkitTextStrokeColor: '#002884',
    color: '#6573c3 ',
    textShadow: ' 1px 10px 10px #aba8a8',
    fontWeight: 500
  },
  propmateSubHeading: {
    fontSize: '20px',
    fontWeight: 300,
    maxWidth: '80vw'
  },
  superScript: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: 'grey',
    fontWeight: 200
  }
}));

export const PropMate = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignContent='center'
      alignItems='center'
    >
      <Grid item xs={10} md={3} lg={2} className={classes.propmateContainer}>
        <img
          className={classes.propmateImg}
          src={pmIcon}
          alt='Propmate icon'
        ></img>
      </Grid>
      <Grid item xs={12} md={8} lg={4}>
        <Grid
          container
          direction='column'
          alignItems={isMobile ? 'center' : 'baseline'}
        >
          <Grid item xs={12}>
            <Typography
              variant={isMobile ? 'h2' : 'h1'}
              className={classes.propmateHeading}
            >
              Propmate <sup className={classes.superScript}>beta</sup>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align={isMobile ? 'center' : 'justify'}
              className={classes.propmateSubHeading}
            >
              Enhancing property browsing experience on Trademe
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ width: '100%', marginTop: '10vh', textAlign: 'center' }}
      >
        <Button
          variant='contained'
          color='primary'
          size='large'
          endIcon={<DownloadIcon />}
          className={classes.btnDownload}
        >
          Download for Chrome
        </Button>
      </Grid>
    </Grid>
  );
};
