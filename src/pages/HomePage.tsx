import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { ClassSharp } from '@material-ui/icons';
import { url } from 'inspector';
import React from 'react';
import background from '../static/background.jpg';

interface Props {}
const useStyles = makeStyles((theme) => ({
  homeParentContainer: {
    height: '60vh',
    textAlign: 'center',
    padding: '40px'
  }
}));

export const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));

  return (
    <Grid
      container
      justifyContent='center'
      direction='column'
      alignItems='center'
      alignContent='center'
      className={classes.homeParentContainer}
    >
      <Grid item >
        <Typography
          variant='h1'
          style={{
            fontFamily: 'Saira Stencil One',
            color: '#ffe66e',
            textShadow: '2px 2px  4px #000000'
          }}
        >
          Full Stack Dev
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant='h4'
          style={{ fontFamily: 'Dancing Script', color: 'white' }}
        >
          Your friendly neighbourhood developer
        </Typography>
      </Grid>
    </Grid>
  );
};
