import React from 'react'
import { Header } from 'semantic-ui-react'
import { Connect } from 'aws-amplify-react'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'
import { listExperiences } from '../../graphql/queries'
import { Button } from 'semantic-ui-react'
import './Experience.scss'

let skillsText

export default function( props ) {
  Amplify.configure(awsConfig)

  function ListDuties( { data: duties } ) {
    return(
      <React.Fragment>
        {
          duties.map( ({ text, skills }) => {
            let _skills = []
            skills.forEach( ( el ) => _skills.push(el.text) )
            skillsText = _skills.join(' ')
            skillsText = skillsText.toLowerCase()
            return ( 
              <li 
                key={text}
                className="experience duty" 
                onMouseOver={props.onMouseOver} 
                onMouseLeave={props.onMouseLeave}
                skills={skillsText}
                >
                { text }
              </li>
            )})
        }
      </React.Fragment> 
    )
  }

  function Experience( { data : { data: { listExperiences: experiences }, loading, error } } ) {
    // TODO: error handling
    if( loading ) {
      return null
    } else {
      experiences = experiences.items.sort( ( a, b ) => b.sortOrder - a.sortOrder )
      return(
        <div id="experience" className="section">
          <Header as="h1" className="section-title">Experience</Header>
          {
            experiences.map(({ role, company, duties, period }) => {
              return (
                <div key={company} id="experience segment">
                  <h2 className="experience role">{role}</h2>
                  <h3 className="experience company">
                  {company}
                  <Button floated="right" content={period}/>
                  </h3>
                  
                  <div className="experience duties">
                    <ListDuties data={duties}/>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }
  }

  return (
    <React.Fragment>
      <Connect query={ graphqlOperation ( listExperiences, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
        {
          ( data ) => {
            return (<Experience data={ data } /> )
          }
        }
      </Connect>
    </React.Fragment>
  )
}
