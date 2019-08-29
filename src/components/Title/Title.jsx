import './Title.scss'
import React from 'react'
import { Connect } from "aws-amplify-react";
import { listTitles } from '../../graphql/queries'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'

export default function() {
  Amplify.configure(awsConfig)
  function Title( { data : { data: { listTitles: title }, loading, error } } ) {    
    // TODO: Error handling
    if ( loading ) {
      return null
    } else {
      const { name, role } = title.items[0]
      return (
        <div id="title">
          <h1 id="candidate-name">
            {name}
          </h1>
          <h2 id="candidate-role">
            {role}
          </h2>
        </div>
      )
    }
  }

  return (
    <Connect query={ graphqlOperation ( listTitles, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
        {
          ( data ) => {
            return (<Title data={data} /> )
          }
        }
    </Connect>
  )
}



