import { Grid, makeStyles, CssBaseline } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    padding: '10px',
    borderRadius: '10px 10px 0 0',
    textDecoration: 'none',
    color: '#6d696a',
    fontSize: '20px',
    margin: theme.spacing(5),
    '&:hover': {
      color: 'black',
      background: 'rgba(0, 0, 0, 0.1)'
    }
  },
  activeLink: {
    color: 'black',
    background: 'rgba(0, 0, 0, 0.1)'
  },
  navbar: {
    paddingBottom: '10px',
    position: 'fixed',
    top: 100,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
  }
}));

export const Navbar = () => {
  const classes = useStyles();
  return (
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
            to='/developerprofile'
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
    </>
  );
};
