import React from 'react'
import './BusinessCard.scss'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EventIcon from '@material-ui/icons/Event';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  info: {
    fontSize: ".5em",
    position: "relative",
    marginBottom: "3em"
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: 400
  },
  role: {
    fontSize: "1.2rem",
    fontWeight: 300
  },
  location: {
    fontSize: "0.65rem",
    fontWeight: 300,
    fontStyle: "italic"
  },
  card: {
    padding: "30px"
  },
  description: {
    marginBottom: theme.spacing(2)
  },
  icons: {
    color: "rgb(167, 167, 174)"
  }
}));

function Info({Icon, onClick, toolTip}) {
  const classes = useStyles();

  return (
    <Tooltip title={toolTip}>
      <IconButton component="span" onClick={onClick}>
          <Icon className={classes.icons}/>
      </IconButton>
    </Tooltip>
  );
}

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/mohamed-yusuf-mohamed");
}
 
const bookCall = () => {
  window.open("https://www.calendly.com/mohamed-yusuf-mohamed");
}

export default function() {  
  const classes = useStyles();
  return(
    <div id="business-card" className={classes.card}>
      <div className={classes.description}>
        <Typography className={classes.name}>Mohamed Yusuf Mohamed</Typography>
        <Typography className={classes.role}>React Developer</Typography>
        <Typography className={classes.location}>London, UK</Typography>
      </div>
        <Info Icon={LinkedInIcon} onClick={openLinkedIn} toolTip="Open LinkedIn"/>
        <Info Icon={EventIcon} onClick={bookCall} toolTip="Book a call"/>
    </div>
  )
}
