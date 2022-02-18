import {
  Grid,
  makeStyles,
  Paper,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { ClassSharp } from '@material-ui/icons';
import React from 'react';

interface Props {}
const useStyles = makeStyles((theme) => ({
  imgMobile: {
    maxWidth: '80vw',
    margin: 'auto'
  },
  imgDesktop: {
    width: '80vw',
    maxWidth: '900px'
  }
}));

export const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));
  const f12Mobile = 'https://via.placeholder.com/728x728.png?text=f12.website';
  const f12Desktop = 'https://via.placeholder.com/728x414.png?text=f12.website';

  return (
    <Grid
      container
      justifyContent='center'
      direction='column'
      alignItems='center'
    >
      <Grid item xs={12}>
        <img
          className={isMobile ? classes.imgMobile : classes.imgDesktop}
          src={isMobile ? f12Mobile : f12Desktop}
          alt='f12 logo'
        />
      </Grid>
    </Grid>
  );
};
