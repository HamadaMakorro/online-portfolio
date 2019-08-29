import React from 'react'
import { Grid } from 'semantic-ui-react'
import Title from '../Title/Title'
import Summary from '../Summary/Summary'
import Experience from '../Experience/Experience'
import Education from '../Education/Education'
import Certificates from '../Certificates/Certificates'
import Interests from '../Interests/Interests'
import PersonalDetails from '../PersonalDetails/PersonalDetails'
import Skills from '../Skills/Skills'
import Languages from '../Languages/Languages'
import { Message } from 'semantic-ui-react'
import './Resume.scss'
// import createDatabaseEntries from '../../graphql/createDatabaseEntries'

export default function() {
  let width,
  element,
  progressBars,
  mobileView,
  column = 2
  width = {
    right: 3,
    left: 10
  }

  if ( window.innerWidth <= 768 ) {
    console.log('window.innerWidth: ', window.innerWidth);
    resizeForMobileDevice()
  } 

  function resizeForMobileDevice() {      
    column = 1
    width = {
      right: 16,
      left: 16
    }
    mobileView = true
  }
  
  // window.addEventListener( 'loadstart', resizeForMobileDevice )
  window.addEventListener( 'resize', resizeForMobileDevice )
  progressBars = document.getElementsByClassName('ui progress')

  function addOrRemove( action, e ){
    const skills = e.target.attributes['skills'].nodeValue.split(' ')
    skills && skills.forEach( ( skill ) => { 
      element = document.getElementById( skill )
      element && element.classList[action]('focus') 
    })
    // apply/remove 'active' animated effect
    for( let i = 0; i < 18; i++ ){
      progressBars && progressBars.item(i) && progressBars.item(i).classList[action]('active')
    }
  }

  function onMouseOver( e ) {
    addOrRemove( 'add', e )
  }
  function onMouseLeave( e ) {
    addOrRemove( 'remove', e )
  }

  function renderLeftColumn() {
      return(
      <React.Fragment>
        <Grid.Column floated="right" width={width.left} id="left-column">
          <Title />
          <Summary />
          <Experience onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} />
          <Education />
          <Certificates />
          <Interests />
        </Grid.Column>
      </React.Fragment>
    )
  }

  function renderRightColumn() {
    return(
      <React.Fragment>
        <Grid.Column floated='right' width={width.right} id="right-column">
          <PersonalDetails />
          <Skills />
          <Languages />
        </Grid.Column>
      </React.Fragment>
    )
  }

  // function renderDatabaseCreationButton() {
  //   return(
  //     <button onClick={createDatabaseEntries}>
  //       createDatabaseEntries
  //     </button>
  //   )
  // }

  function renderMobileMessage() {
    return (
      <Message warning>
          <p>For the Experimental 3D view, use a browser (chrome) and make sure your browser window is above the threshold width (768px).</p>
      </Message>
    )
  }

  return (
    <div id="resume">
      <Grid padded columns={column}>
        { mobileView && renderMobileMessage() }
        {/* { renderDatabaseCreationButton() } */}
        { renderLeftColumn() }
        { renderRightColumn() }
      </Grid>
    </div>
  )
}