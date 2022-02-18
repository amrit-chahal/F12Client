import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '20px'
  },
  listItem: {
    borderTop: '1px solid #fff',
    textAlign: 'center',
    display: 'block',
    background: '#3f50b5',
    '&:hover': {
      cursor: 'pointer',
      color: '#fff',
      background: '#002884'
    }
  },

  icon: {
    color: '#fff'
  },
  appBar: {
    backgroundColor: '#3f50b5',
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    width: '100%'
  }
}));

interface Props {}

export const MenuDrawer = (props: Props) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor='bottom'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List disablePadding>
          <ListItem
            className={classes.listItem}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <NavLink exact to='/' className={classes.link}>
                Home
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.listItem}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <NavLink to='/propmate' className={classes.link}>
                Propmate
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.listItem}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <NavLink to='/developer_profile' className={classes.link}>
                Dev Profile
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.listItem}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <NavLink to='/blog' className={classes.link}>
                Blog
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.listItem}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <NavLink to='/contact' className={classes.link}>
                Contact
              </NavLink>
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.listItem}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <CloseIcon fontSize='medium' className={classes.icon} />
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.appBar}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon fontSize='medium' className={classes.icon} />
        </IconButton>
      </div>
    </>
  );
};
