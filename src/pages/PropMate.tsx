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
import pmSlide1 from '../static/pm1.png';
import pmSlide2 from '../static/pm2.png';
import pmSlide3 from '../static/pm3.png';
import pmSlide4 from '../static/pm4.png';
import pmSlide5 from '../static/pm5.png';
import { ImageInfo, ImageSlider, Images } from '../components/ImageSlider';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  propmateImg: {
    width: '100%',
    maxWidth: '200px',
    filter: 'drop-shadow(0px 30px 20px rgba(0,0,0,0.5))'
  },
  propmateContainer: {
    textAlign: 'center',
    margin: '10px'
  },
  btnDownload: {
    height: '60px',
    width: '70vw',
    maxWidth: '400px',

    borderRadius: '20px',
    backgroundColor: '#0288d1',
    fontSize: '1rem',

    '&:hover': {
      backgroundColor: '#01579b'
    }
  },
  propmateHeading: {
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000',
    color: '#6573c3 ',
    textShadow: ' 1px 10px 10px #aba8a8',
    fontWeight: 500
  },
  propmateSubHeading: {
    fontSize: '20px',
    fontWeight: 300,
    maxWidth: '80vh',
    letterSpacing: '0'
  },
  superScript: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: 'grey',
    fontWeight: 200
  },
  propmateInfo: {
    background: '#008df5',
    color: '#fff',
    borderRadius: '10px',
    margin: '20px 0px',

    '&>h6:nth-child(1)': {
      paddingTop: '10px',

      borderRadius: '10px 10px 0 0',
      background: '#074791'
    },
    '&>p:nth-child(2)': {
      padding: '10px 15px'
    }
  },
  propmateInfo2: {
    background: '#f44336',
    color: '#fff',
    borderRadius: '10px',
    margin: '20px 0px',

    '&>h6:nth-child(1)': {
      paddingTop: '10px',

      borderRadius: '10px 10px 0 0',
      background: '#c21104'
    },
    '&>p:nth-child(2)': {
      padding: '10px 15px'
    }
  },
  propmatePurpose: {
    textAlign: 'center',
    padding: '30px',
    background: '#e7e7ec',
    borderRadius: '10px',
    fontSize: '30px',
    fontStyle: 'italic',
    margin: '10px 4vw'
  }
}));

export const PropMate = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const Images = [
    {
      label: 'Propmate slide one',
      imgSrc: pmSlide1
    },
    {
      label: 'Propmate slide two',
      imgSrc: pmSlide2
    },
    {
      label: 'Propmate slide three',
      imgSrc: pmSlide3
    },
    {
      label: 'Propmate slide four',
      imgSrc: pmSlide4
    },
    {
      label: 'Propmate slide five',
      imgSrc: pmSlide5
    }
  ];
  return (
    <>
      <Helmet>
        <title>F12 Propmate</title>
      </Helmet>
      <Grid
        container
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        style={
          !isMobile
            ? { padding: '25px', marginTop: '7vh', maxWidth: '1450px' }
            : { padding: '25px' }
        }
      >
        <Grid item className={classes.propmateContainer}>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={3}
          >
            <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
              <img
                className={classes.propmateImg}
                src={pmIcon}
                alt='Propmate icon'
              ></img>
            </Grid>
            <Grid item xs={12} md={9}>
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
                    Enhancing property browsing experience on{' '}
                    <span style={{ color: '#f9af2c', fontWeight: 300 }}>
                      Trademe
                    </span>
                    <sup style={{ fontSize: '10px' }}>tm</sup>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.propmateContainer}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            endIcon={<DownloadIcon />}
            className={classes.btnDownload}
            href='https://chrome.google.com/webstore/detail/propmate/oodjdpgcgaoblokiamiiahbacijaeaab'
          >
            Download for Chrome
          </Button>
        </Grid>
        <Grid item className={classes.propmatePurpose}>
          <Typography
            variant='subtitle1'
            style={{ fontSize: '1.2rem', fontWeight: '400' }}
          >
            Do you ever go back and forth between google maps and trademe when
            browsing for rentals or properties for sale? Do you ever wonder how
            nice it would be to have this simple yet important information right
            in front of you? Well wonder no more! Propmate to the rescue!!
            Enhance your property browsing experience on trademe by using this
            extension. Store upto five locations and get time and distance
            information displayed right next to the listings. Works on rentals
            and properties for sale on Trademe.
          </Typography>
        </Grid>
        <Grid item className={classes.propmateContainer}>
          <Grid
            container
            direction='row'
            justifyContent='space-around'
            alignItems='center'
          >
            <Grid item xs={12} md={3} className={classes.propmateInfo}>
              <Typography variant='h6'>What is it?</Typography>
              <Typography variant='body1'>
                It's a simple chrome extension which can be installed on Google
                Chrome, Microsoft Edge, Brave or any chromium browser. To
                download follow the download link from your browser.
              </Typography>
            </Grid>

            <Grid item xs={12} md={3} className={classes.propmateInfo2}>
              <Typography variant='h6'>How to use it?</Typography>
              <Typography variant='body1'>
                Simply download it from Chrome Web store and once its installed
                save upto five of your favourite addresses. The extension will
                then display the time and distance information right below the
                Listing.
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} className={classes.propmateInfo}>
              <Typography variant='h6'>How does it work?</Typography>
              <Typography variant='body1'>
                It works by reading the property address of the listing and
                getting information from google maps to display time and
                distance between the listing address and your saved addresses.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.propmateContainer}>
          <ImageSlider images={Images} />
        </Grid>
      </Grid>
    </>
  );
};
