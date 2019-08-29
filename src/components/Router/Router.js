import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect } from 'react'
import Resume from '../Resume/Resume'
import Resume3D from '../Resume3D/Resume3D'
import LandingPage from "../LandingPage"
import './Router.scss'

export default function BasicRouter() {
  function redirect( page ){
    switch( page ) {
      case "experimental-3d" :
        window.location.assign('/contract-react-developer/resume')
        break
      case "basic-page" :
        window.location.assign('/contract-react-developer/resume/basic')
        break
      case "landing-page" :
        window.location.assign('/')
        break
      default:
        break
    }
  }
  return (
    <Router >
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/contract-react-developer/resume" component={Resume3D} />
      <Route path="/contract-react-developer/resume/basic" component={Resume} />
    </Router>
  )
}