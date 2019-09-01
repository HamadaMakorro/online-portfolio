import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react'
import Resume from '../Resume/Resume'
import Resume3D from '../Resume3D/Resume3D'
import LandingPage from "../LandingPage"
import './Router.scss'

export default function BasicRouter() {
  return (
    <Router >
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/contract-react-developer/resume" component={Resume3D} />
      <Route path="/contract-react-developer/resume/basic" component={Resume} />
    </Router>
  )
}