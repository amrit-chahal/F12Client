import {
  Grid,
  makeStyles,
  CssBaseline,
  useTheme,
  useMediaQuery
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
    fontSize: '20px',
    margin: theme.spacing(5),
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.1)'
    }
  },
  activeLink: {
    background: 'rgba(0, 0, 0, 0.1)'
  },
  navbar: {
    background:
      'linear-gradient(90deg, rgba(0,24,36,1) 0%, rgba(9,59,121,1) 0%, rgba(0,124,255,1) 100%)',
    paddingBottom: '10px',

    paddingTop: '10vh',

    zIndex: 100,
    position: 'fixed',
    top: 0
  },
  f12Heading: {
    color: '#fff',
    fontWeight: 500,
    padding: '5px 20px',
    position: 'fixed',
    borderRadius: '30px',

    background:
      'linear-gradient(90deg, rgba(0,24,36,1) 0%, rgba(29,122,168,1) 0%, rgba(0,124,255,1) 100%)',
    top: 20,
    left: 100,
    zIndex: 101
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));

  return (
    <>
      {isMobile ? (
        <MenuDrawer />
      ) : (
        <>
          <Typography
            className={classes.f12Heading}
            variant='h4'
            color='primary'
          >
            f12.website
          </Typography>
          <div style={{ height: '15vh' }}>
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
                  to='/developer_profile'
                  className={classes.link}
                  activeClassName={classes.activeLink}
                >
                  Dev Profile
                </NavLink>
                <NavLink
                  to='/blog'
                  className={classes.link}
                  activeClassName={classes.activeLink}
                >
                  Blog
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
          </div>
        </>
      )}
    </>
  );
};
