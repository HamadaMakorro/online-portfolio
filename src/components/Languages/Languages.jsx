import React from 'react'
import { Connect } from "aws-amplify-react";
import { listLanguages } from '../../graphql/queries'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'
import { Header } from 'semantic-ui-react'
import './Languages.scss'

export default function() {
  Amplify.configure(awsConfig)
  function Languages( { data : { data: { listLanguages: languages }, loading, error } } ) { 
    // TODO: Error handling
    if ( loading ) {
      return null
    } else {
      return (
            <div className="section">
              <Header as="h1" id="languages-title" className="section-title">Languages</Header>
              {
                languages.items.map( ( { text: language } ) => {
                  return(
                      <li key={language} className="language">{ language }</li>
                  )
                } )
              }
          </div>
        )
    }
  }
  return (
    <Connect query={ graphqlOperation ( listLanguages, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
        {
          ( data ) => {
            return (<Languages data={data} /> )
          }
        }
    </Connect>
  )
}






