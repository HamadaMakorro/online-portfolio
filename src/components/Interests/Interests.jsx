import React from 'react'
import { Header } from 'semantic-ui-react'
import { Connect } from "aws-amplify-react";
import { listInterests } from '../../graphql/queries'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'
import './Interests.scss'

export default function() {
  Amplify.configure(awsConfig)
  function Interests( { data : { data: { listInterests: interests }, loading, error } } ) {    
    // TODO: Error handling
    if ( loading ) {
      return null
    } else {
      return (
        <div id="certificates" className="section">
        <Header as="h1" id="certificates-title" className="section-title">Interests</Header>
        {
          interests.items.map( ( { text: interest } ) => {
            return(
              <li key={interest} className="interest">{interest}</li>
            )
          } )
        }

      </div>
      )
    }
  }
  return (
    <Connect query={ graphqlOperation ( listInterests, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
      {
        ( data ) => {
          return (<Interests data={data} /> )
        }
      }
  </Connect>
  )
}

