import { makeStyles } from '@material-ui/styles';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import profilePicture from '../static/profilePicture.jpg';
import propmateIcon from '../static/pm_icon.png';
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
  profileHeader: {
    background:
      'linear-gradient(132deg, rgb(65, 80, 95) 0.00%, rgb(36, 37, 38) 100.00%)',
    margin: '20px 0 0 0',
    padding: '30px'
  },
  profileHeading: {
    fontFamily: 'Dancing Script',
    color: 'white',
    fontSize: '6rem'
  },
  profileSubHeading: {
    color: 'white'
  },
  profileQuotes: {
    fontFamily: 'Bebas Neue',
    color: 'white',
    textAlign: 'center'
  },
  profileSkills: {
    background: '#2a4d66',
    borderRadius: '0 0 10px 10px',
    padding: '10px',
    minHeight: '200px'
  },
  profileSkillsHeading: {
    background: '#1f7986',
    color: 'white',
    borderRadius: '10px 10px 0 0 ',
    padding: '10px 20px',
    textAlign: 'center'
  },
  profileWorkPropmateHeading: {
    background: '#404fa5',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    borderRadius: '10px 10px 0 0'
  },
  profileWorkF12Heading: {
    background: '#d84315',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    borderRadius: '10px 10px 0 0'
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
    background: '#f05030',
    borderRadius: '7px',
    transform: 'rotate(45deg)'
  }
}));
export const DeveloperProfile = (props: Props) => {
  const classes = useStyles();

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
          <Grid container direction='column' alignItems='center'>
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
        <Grid item>
          <Grid
            container
            className={classes.profileHeader}
            direction='row'
            justifyContent='space-evenly'
          >
            <Grid item>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant='h1' className={classes.profileHeading}>
                    hello !
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h4'
                    className={classes.profileSubHeading}
                  >
                    My name is <span style={{ color: '#23ffc4' }}>Ap.</span>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h4'
                    className={classes.profileSubHeading}
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
                style={{
                  height: '200px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  border: 'solid 8px #b3a171'
                }}
              ></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ background: 'white', padding: '30px' }}>
          <Grid
            container
            direction='column'
            justifyContent='center'
            style={{ paddingBottom: '20px' }}
          >
            <Grid item>
              <Grid container>
                <Grid item>
                  <Typography
                    variant='h4'
                    style={{ fontFamily: 'Orelega One' }}
                  >
                    About me
                  </Typography>
                </Grid>
                <Grid item>
                  {' '}
                  <Typography variant='body1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, amet! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aliquid harum fuga exercitationem
                    consectetur voluptates. Pariatur rem placeat praesentium
                    suscipit voluptate perferendis perspiciatis tempore, dolorem
                    sunt animi provident molestias nisi omnis, officiis quas
                    porro dolores. Quis nulla est nesciunt laudantium! Sed
                    dignissimos vitae reiciendis a architecto. Quas neque hic
                    iure enim blanditiis officia adipisci alias a sed? Voluptate
                    quas sequi vel sapiente
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction='row' style={{ paddingBottom: '30px' }}>
            <Grid item md={6} style={{ padding: '5px' }}>
              <Paper elevation={10} style={{ borderRadius: '10px' }}>
                <Grid container direction='column'>
                  <Grid item className={classes.profileSkillsHeading}>
                    <Typography
                      variant='h5'
                      style={{ fontFamily: 'Orelega One' }}
                    >
                      Things I am <span style={{ color: '#ffed23' }}>good</span>{' '}
                      at
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box className={classes.profileSkills}>
                      <Grid container direction='row' justifyContent='center'>
                        {goodSkills.map((item, index) => (
                          <Grid item key={index}>
                            <Paper
                              elevation={10}
                              style={{
                                padding: '5px ',
                                margin: '5px',
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
            <Grid item md={6} style={{ padding: '5px' }}>
              <Paper elevation={10} style={{ borderRadius: '10px' }}>
                <Grid container direction='column'>
                  <Grid item className={classes.profileSkillsHeading}>
                    <Typography
                      variant='h5'
                      style={{ fontFamily: 'Orelega One' }}
                    >
                      Things I am
                      <span style={{ color: '#ffed23' }}>great </span>
                      at
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box className={classes.profileSkills}>
                      <Grid container direction='row' justifyContent='center'>
                        {greatSkills.map((item, index) => (
                          <Grid item key={index}>
                            <Paper
                              elevation={10}
                              style={{
                                padding: '5px',
                                margin: '5px',
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
          <Grid container direction='column' spacing={3}>
            <Grid item>
              <Typography variant='h4' style={{ fontFamily: 'Orelega One' }}>
                My Work
              </Typography>
            </Grid>
            <Grid item>
              <Paper
                elevation={6}
                style={{
                  borderRadius: '10px',
                  background: '#5b83c2',
                  color: 'white'
                }}
              >
                <Grid container>
                  <Grid item md={6} xs={12}>
                    <Grid
                      container
                      direction='column'
                      style={{ height: '275px' }}
                    >
                      <Grid item className={classes.profileWorkPropmateHeading}>
                        <Typography variant='h5'>Propmate</Typography>
                      </Grid>
                      <Grid
                        item
                        style={{
                          textAlign: 'center',
                          background: '#e7ecfa',
                          height: '81%',
                          paddingTop: '10%',
                          borderRadius: '0 0 10px 10px'
                        }}
                      >
                        <img
                          style={{
                            width: '100px',
                            filter: 'drop-shadow(0px 30px 20px rgba(0,0,0,0.5))'
                          }}
                          src={propmateIcon}
                          alt='propmate logo'
                        ></img>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6} style={{ padding: '25px' }}>
                    <Typography variant='body1'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A incidunt alias, aut quo voluptatem dolorum tempore, quod
                      atque architecto sunt vero minima! Voluptatum natus saepe
                      officia maxime voluptatem. Blanditiis, veniam?
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                elevation={6}
                style={{
                  borderRadius: '10px',
                  background: '#c66139',
                  color: 'white'
                }}
              >
                <Grid container>
                  <Grid item md={6} xs={12}>
                    <Grid
                      container
                      direction='column'
                      style={{ height: '275px' }}
                    >
                      <Grid item className={classes.profileWorkF12Heading}>
                        <Typography variant='h5'>F12</Typography>
                      </Grid>
                      <Grid
                        item
                        style={{
                          background: 'white',
                          height: '81%',
                          paddingTop: '10%',
                          width: '100%',
                          borderRadius: '0 0 10px 10px'
                        }}
                      >
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
                    <Typography variant='body1'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A incidunt alias, aut quo voluptatem dolorum tempore, quod
                      atque architecto sunt vero minima! Voluptatum natus saepe
                      officia maxime voluptatem. Blanditiis, veniam?
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
