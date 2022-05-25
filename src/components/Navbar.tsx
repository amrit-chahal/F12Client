import {
  Grid,
  makeStyles,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Box
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuDrawer } from './MenuDrawer';

const useStyles = makeStyles((theme) => ({
  link: {
    padding: '10px',
    borderRadius: '10px 10px 0 0',
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '24px',
    '&:hover': {
      textDecoration: 'underline'
    },

    margin: theme.spacing(5)
  },
  activeLink: {
    color: '#10344e'
  },
  navbar: {
    paddingTop: '5vh'
  },
  f12Heading: {
    color: '#fff',
    position: 'relative',
    left: '-7px',
    fontSize: '50px',

    transform: 'rotate(-45deg)',
    zIndex: 103,
    fontFamily: 'Saira Stencil One',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#000'
  },
  f12HeadingBackground: {
    top: '3vh',
    left: '5vw',
    position: 'fixed',
    textAlign: 'center',
    zIndex: 110,
    width: '50px',
    height: '50px',
    background: '#ffe66e',
    borderRadius: '7px',
    transform: 'rotate(45deg)'
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box className={classes.f12HeadingBackground}>
        <Typography className={classes.f12Heading} variant='h4' color='primary'>
          f12
        </Typography>
      </Box>
      {isMobile ? (
        <MenuDrawer />
      ) : (
        <>
          <Grid
            container
            direction='column'
            alignContent='center'
            className={classes.navbar}
          >
            <Grid item>
              <NavLink
                exact
                to='/'
                className={classes.link}
                activeClassName={classes.activeLink}
              >
                Home
              </NavLink>
              <NavLink
                to='/propmate'
                className={classes.link}
                activeClassName={classes.activeLink}
              >
                Propmate
              </NavLink>
              <NavLink
                to='/about_me'
                className={classes.link}
                activeClassName={classes.activeLink}
              >
                About Me
              </NavLink>

              <NavLink
                to='/contact'
                className={classes.link}
                activeClassName={classes.activeLink}
              >
                Contact
              </NavLink>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
