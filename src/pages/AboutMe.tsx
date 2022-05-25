import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import React from 'react';
import profilePicture from '../static/profilePicture.jpg';
import propmateIcon from '../static/pm_icon.png';
import twIcon from '../static/tw_icon.png';
import liIcon from '../static/li_icon.png';
import ghIcon from '../static/gh_lite_icon.png';
import soIcon from '../static/so_icon.png';
interface Props {}
interface Skills {
  skill: string;
  bgColor: string;
  fontColor: string;
}

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    maxWidth: '1100px',
    width: '80vw',
    padding: '20px 0',
    background:
      'linear-gradient(132deg, rgb(34, 181, 254) 0.00%, rgb(255, 186, 214) 100.00%)'
  },
  profileQuotes: {
    fontFamily: 'Bebas Neue',
    color: 'white',
    textAlign: 'center'
  },
  profileHeader: {
    padding: '20px 0',
    background:
      'linear-gradient(132deg, rgb(34 109 255) 0.00%, rgb(245 184 184) 100.00%)'
  },
  profileHeaderText: {
    fontFamily: 'Dancing Script',
    color: 'white',
    fontSize: '6rem'
  },
  profileHeaderSubText: {
    color: 'white'
  },
  profilePicture: {
    height: '200px',
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45)'
  },
  profileSocialIcon: {
    borderRadius: '10px',
    height: '48px',
    width: '48px',
    /*margin: '10px 5px 0 5px',*/
    '&:hover': {
      boxShadow: '0 5px 15px rgba(255, 255, 155, .6)'
    }
  },
  profileHeading: {
    fontFamily: 'Orelega One',
    paddingTop: '20px'
  },

  profileSkillsHeading: {
    background: '#3680ef',
    color: 'white',
    borderRadius: '10px 10px 0 0 ',
    padding: '10px 20px',
    textAlign: 'center',
    fontFamily: 'Orelega One'
  },
  profileSkillsContainer: {
    background: '#384b66',
    borderRadius: '0 0 10px 10px',
    minHeight: '200px',
    padding: '20px'
  },
  profileWorkPropmateContainer: {
    textAlign: 'center',
    background: '#e7ecfa',
    height: '81%',
    paddingTop: '10%',
    borderRadius: '0 0 10px 10px'
  },
  profileWorkPropmateDetailContainer: {
    borderRadius: '10px',
    background: '#7babba',
    color: 'white'
  },

  profileWorkPropmateHeading: {
    background: '#404fa5',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    borderRadius: '10px 10px 0 0'
  },
  profileWorkF12Heading: {
    background: '#ffe66e',
    color: 'black',
    padding: '10px 20px',
    textAlign: 'center',
    borderRadius: '10px 10px 0 0'
  },

  profileWorkF12Container: {
    textAlign: 'center',
    background: '#52514e',
    height: '81%',
    paddingTop: '10%',
    borderRadius: '0 0 10px 10px'
  },
  profileWorkF12DetailContainer: {
    borderRadius: '10px',
    background: '#aa7942',
    color: 'white'
  },
  f12Heading: {
    color: '#fff',
    position: 'relative',
    left: '-7px',
    fontSize: '60px',

    transform: 'rotate(-45deg)',

    fontFamily: 'Saira Stencil One',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000'
  },
  f12HeadingBackground: {
    textAlign: 'center',
    margin: '30px auto',
    width: '60px',
    height: '60px',
    background: '#ffe66e',
    borderRadius: '7px',
    transform: 'rotate(45deg)'
  },
  profileContactMeBtn: {
    margin: '50px 0',
    minWidth: '20vw',
    width: '300px',
    height: '100px',
    fontSize: '2rem',
    color: 'white',
    borderRadius: '10px',
    boxShadow: 'inset 0 6px 12px rgba(0,0,0,0.16), 0 8px 10px rgba(0,0,0,0.45)',
    background:
      ' linear-gradient(-45deg, rgb(14 154 157) 0%, rgb(48 126 245) 100%)',
    '&:hover': {
      boxShadow: '0 5px 15px rgba(145, 92, 182, .8)'
    }
  }
}));
export const AboutMe = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const goodSkills: Skills[] = [
    { skill: 'C#', bgColor: '#a825f0', fontColor: 'white' },
    { skill: 'Javascript', bgColor: '#f0b925', fontColor: 'black' },
    { skill: 'React', bgColor: '#3bc2ed', fontColor: 'black' },
    { skill: 'Asp.net MVC#', bgColor: '#a825f0', fontColor: 'white' },
    { skill: 'Asp.net core', bgColor: '#25bff0', fontColor: 'black' },
    { skill: 'WPF', bgColor: '#a825f0', fontColor: 'white' },
    { skill: 'MSSQL', bgColor: '#355e9d', fontColor: 'white' },
    { skill: 'NoSQL', bgColor: '#093476', fontColor: 'white' },
    { skill: 'Entity Framework', bgColor: '#a825f0', fontColor: 'white' },
    { skill: 'Mongo DB', bgColor: '#1bb134', fontColor: 'black' },
    { skill: 'Html', bgColor: '#eb7820', fontColor: 'black' },
    { skill: 'CSS', bgColor: '#207eeb', fontColor: 'white' },
    { skill: 'SASS/LESS', bgColor: '#dd6892', fontColor: 'black' },
    { skill: 'Bootstrap', bgColor: '#863fb5', fontColor: 'white' },
    { skill: 'Material UI', bgColor: '#22b5fe', fontColor: 'black' },
    { skill: 'JQuery', bgColor: '#4a7dda', fontColor: 'white' },
    { skill: 'OAuth', bgColor: '#1bb134', fontColor: 'black' }
  ];
  const greatSkills: Skills[] = [
    { skill: 'Communication', bgColor: '#bacec1', fontColor: 'black' },
    { skill: 'Learning', bgColor: '#f6f4e8', fontColor: 'black' },
    { skill: 'Team work', bgColor: '#1d3124', fontColor: 'white' },
    { skill: 'Integrity', bgColor: '#c3cbd6', fontColor: 'black' },
    { skill: 'Empathy', bgColor: '#f8efea', fontColor: 'black' },
    { skill: 'Approachability', bgColor: '#bacec1', fontColor: 'black' },
    { skill: 'Problem Solving', bgColor: '#ffdfaf', fontColor: 'black' },
    { skill: 'Accountability', bgColor: '#1d3124', fontColor: 'white' },
    { skill: 'Time management', bgColor: '#ded369', fontColor: 'black' },
    { skill: 'Prioritisation', bgColor: '#c3cbd6', fontColor: 'black' },
    { skill: 'Upskilling', bgColor: '#f8efea', fontColor: 'black' },
    { skill: 'Customer service', bgColor: '#ded369', fontColor: 'black' }
  ];

  return (
    <Paper elevation={12} className={classes.profileContainer}>
      <Grid container direction='column'>
        <Grid item>
          <Grid
            container
            direction='column'
            alignItems='center'
            style={{ padding: '10px 0' }}
          >
            <Grid item>
              <Typography variant='h4' className={classes.profileQuotes}>
                <span style={{ fontSize: '40px' }}>" </span>{' '}
                <span style={{ color: '#ffed23' }}>Readable</span> code is
                better than <span style={{ color: '#ffed23' }}>clever</span>{' '}
                code <span style={{ fontSize: '40px' }}> " </span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>
                -Mahatama <span style={{ color: '#ffed23' }}>Gandhi</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.profileHeader}>
          <Grid container direction='row' justifyContent='space-evenly'>
            <Grid item>
              <Grid
                container
                direction='column'
                style={isMobile ? { textAlign: 'center' } : {}}
              >
                <Grid item>
                  <Typography
                    variant='h1'
                    className={classes.profileHeaderText}
                  >
                    hello !
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h4'
                    className={classes.profileHeaderSubText}
                  >
                    My name is <span style={{ color: '#23ffc4' }}>Ap.</span>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h4'
                    className={classes.profileHeaderSubText}
                  >
                    I am a{' '}
                    <span style={{ color: '#23ffc4' }}>
                      full stack developer.
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <img
                src={profilePicture}
                className={classes.profilePicture}
              ></img>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='center' spacing={2}>
            <Grid item>
              <a href='https://twitter.com/Ap00854680'>
                <img
                  className={classes.profileSocialIcon}
                  src={twIcon}
                  alt='twitter icon'
                ></img>
              </a>
            </Grid>
            <Grid item>
              <a href='https://stackoverflow.com/users/16484176/ap-f12'>
                <img
                  className={classes.profileSocialIcon}
                  src={soIcon}
                  alt='StackOverFlow icon'
                ></img>
              </a>
            </Grid>

            <Grid item>
              <a href='https://www.linkedin.com/in/a-p-13b400217/'>
                <img
                  className={classes.profileSocialIcon}
                  src={liIcon}
                  alt='Linkedin Icon'
                ></img>
              </a>
            </Grid>
            <Grid item>
              <a href='https://github.com/Ap-f12'>
                <img
                  className={classes.profileSocialIcon}
                  src={ghIcon}
                  alt='Github icon'
                ></img>
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Box p={4} style={{ background: 'white' }}>
            <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={3}
            >
              <Grid item>
                <Typography variant='h4' className={classes.profileHeading}>
                  About me
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, amet! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aliquid harum fuga exercitationem
                  consectetur voluptates. Pariatur rem placeat praesentium
                  suscipit voluptate perferendis perspiciatis tempore, dolorem
                  sunt animi provident molestias nisi omnis, officiis quas porro
                  dolores. Quis nulla est nesciunt laudantium! Sed dignissimos
                  vitae reiciendis a architecto. Quas neque hic iure enim
                  blanditiis officia adipisci alias a sed? Voluptate quas sequi
                  vel sapiente
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction='row' spacing={3}>
                  <Grid item md={6}>
                    <Paper elevation={10} style={{ borderRadius: '10px' }}>
                      <Grid container direction='column'>
                        <Grid item>
                          <Typography
                            variant='h4'
                            className={classes.profileSkillsHeading}
                          >
                            Things I am{' '}
                            <span style={{ color: '#ffed23' }}>good</span> at
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Box className={classes.profileSkillsContainer}>
                            <Grid
                              container
                              direction='row'
                              justifyContent='center'
                              spacing={2}
                            >
                              {goodSkills.map((item, index) => (
                                <Grid item key={index}>
                                  <Paper
                                    elevation={10}
                                    style={{
                                      padding: '5px ',

                                      background: item.bgColor,
                                      color: item.fontColor
                                    }}
                                  >
                                    <Typography variant='body1'>
                                      {item.skill}
                                    </Typography>
                                  </Paper>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item md={6}>
                    <Paper elevation={10} style={{ borderRadius: '10px' }}>
                      <Grid container direction='column'>
                        <Grid item>
                          <Typography
                            variant='h4'
                            className={classes.profileSkillsHeading}
                          >
                            Things I am
                            <span style={{ color: '#ffed23' }}> great </span>
                            at
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Box className={classes.profileSkillsContainer}>
                            <Grid
                              container
                              direction='row'
                              justifyContent='center'
                              spacing={2}
                            >
                              {greatSkills.map((item, index) => (
                                <Grid item key={index}>
                                  <Paper
                                    elevation={10}
                                    style={{
                                      padding: '5px',

                                      background: item.bgColor,
                                      color: item.fontColor
                                    }}
                                  >
                                    <Typography variant='body1'>
                                      {item.skill}
                                    </Typography>
                                  </Paper>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant='h4' className={classes.profileHeading}>
                  My Work
                </Typography>
              </Grid>
              <Grid item>
                <Paper
                  elevation={6}
                  className={classes.profileWorkPropmateDetailContainer}
                >
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <Grid
                        container
                        direction='column'
                        style={{ height: '275px' }}
                      >
                        <Grid item>
                          <Typography
                            variant='h5'
                            className={classes.profileWorkPropmateHeading}
                          >
                            Propmate
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.profileWorkPropmateContainer}
                        >
                          <img
                            style={{
                              width: '100px',
                              filter:
                                'drop-shadow(0px 30px 20px rgba(0,0,0,0.5))'
                            }}
                            src={propmateIcon}
                            alt='propmate logo'
                          ></img>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={6} style={{ padding: '25px' }}>
                      <Grid container direction='column' alignItems='center'>
                        <Grid item>
                          <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. A incidunt alias, aut quo voluptatem dolorum
                            tempore, quod atque architecto sunt vero minima!
                            Voluptatum natus saepe officia maxime voluptatem.
                            Blanditiis, veniam?
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            variant='contained'
                            color='primary'
                            href='https://chrome.google.com/webstore/detail/propmate/oodjdpgcgaoblokiamiiahbacijaeaab'
                          >
                            Click here
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper
                  elevation={6}
                  className={classes.profileWorkF12DetailContainer}
                >
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <Grid
                        container
                        direction='column'
                        style={{ height: '275px' }}
                      >
                        <Grid item>
                          <Typography
                            variant='h5'
                            className={classes.profileWorkF12Heading}
                          >
                            Full Stack Dev
                          </Typography>
                        </Grid>
                        <Grid item className={classes.profileWorkF12Container}>
                          <Box className={classes.f12HeadingBackground}>
                            <Typography
                              className={classes.f12Heading}
                              variant='h4'
                              color='primary'
                            >
                              f12
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={6} style={{ padding: '25px' }}>
                      <Grid container direction='column' alignItems='center'>
                        <Grid item>
                          <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. A incidunt alias, aut quo voluptatem dolorum
                            tempore, quod atque architecto sunt vero minima!
                            Voluptatum natus saepe officia maxime voluptatem.
                            Blanditiis, veniam?
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            variant='contained'
                            color='primary'
                            href='https://f12.website'
                          >
                            Click here
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item>
                <Button
                  variant='contained'
                  href='https://f12.website/contact'
                  className={classes.profileContactMeBtn}
                >
                  Contact Me
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
