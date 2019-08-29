import React from 'react'
import { Header } from 'semantic-ui-react'
import './Summary.scss'
import { Connect } from "aws-amplify-react";
import { listSummaries } from '../../graphql/queries'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'

export default function() {
  Amplify.configure(awsConfig)
  function Title( { data : { data: { listSummaries: summary }, loading, error } } ) {    
    // TODO: Error handling
    if ( loading ) {
      return null
    } else {
      const { text } = summary.items[0]
      return (
        <div id="summary" className="section">
          <Header as="h1" id="summary-title" className="section-title">Summary</Header>
          <p>{text}</p>
        </div>
      )
    }
  }
    return (
      <Connect query={ graphqlOperation ( listSummaries, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
        {
          ( data ) => {
            return (<Title data={data} /> )
          }
        }
    </Connect>
    )
  }
