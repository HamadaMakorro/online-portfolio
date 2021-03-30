import React from 'react'
import './BusinessCard.scss'
import Role from './components/Role/Role'
import Skillset from './components/Skillset/Skillset'
import ResumeButton from './components/ResumeButton/ResumeButton'
import Contact from './components/Contact/Contact';
import Tagline from './components/Tagline/Tagline';
import Location from './components/Location/Location';

export default function() {  
  return(
    <div id="business-card">
      <Role/>
      <Tagline />
      <Skillset/>
      {/* <Contact /> */}
      <Location />
      {/* <ResumeButton/> */}
    </div>
  )
}

