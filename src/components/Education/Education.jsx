import React from 'react'
import { Header } from 'semantic-ui-react'
// import './Summary.css'
import { Connect } from "aws-amplify-react";
import { listEducations } from '../../graphql/queries'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'
import './Education.scss'

export default function() {
  Amplify.configure(awsConfig)

  function ListCourses( { data: courses } ) {
    return(
      <React.Fragment>
      { 
        courses.map( ( { text } ) => <li key={text} className="education course">{text}</li> ) 
      }
      </React.Fragment> 
    )
  }

  function Education( { data : { data: { listEducations: educationHistory }, loading, error } } ) {    
    // TODO: Error handling
    if ( loading ) {
      return null
    } else {
      return (
        <div id="education" className="section">
        <Header as="h1" id="education-title" className="section-title">Education</Header>
        {
          educationHistory.items.map( ( { text, courses  } ) => {
            return(
              <div key={text} id="education segment">
                <h2 className="education establishment">{text}</h2>
                <ListCourses data={courses}/>
              </div>
            )
          } )
        }
      </div>
      )
    }
  }
  return (
    <Connect query={ graphqlOperation ( listEducations, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
      {
        ( data ) => {
          return (<Education data={data} /> )
        }
      }
    </Connect>
  )
}
