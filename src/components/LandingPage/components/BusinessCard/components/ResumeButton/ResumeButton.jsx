import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Resume3D from '../../../../../Resume3D/Resume3D'
import { Button } from 'semantic-ui-react'
import './ResumeButton.scss'

export default function() {
  function redirect(){
    window.location.assign('/contract-react-developer/resume')
  }
  return(
    <div id="resume-button">
      <Button basic color="blue" size="mini" onClick={ () => redirect() } >Resume</Button>
      <Route exact path="/resume" component={Resume3D} />
    </div>
  )
}