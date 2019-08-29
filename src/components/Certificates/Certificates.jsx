import React from 'react'
import { Header } from 'semantic-ui-react'
// import './Certificate.css'
import { Connect } from "aws-amplify-react";
import { listCertificates } from '../../graphql/queries'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'
import './Certificates.scss'

export default function() {
  Amplify.configure(awsConfig)
  function Certifcates( { data : { data: { listCertificates: certificates }, loading, error } } ) {    
    // TODO: Error handling
    if ( loading ) {
      return null
    } else {
      return (
        <div id="certificates" className="section">
        <Header as="h1" id="certificates-title" className="section-title">Certificates</Header>
        {
          certificates.items.map( ( { text } ) => {
            return(
              <li key={text} className="certificate">{text}</li>
            )
          })
        }

      </div>
      )
    }
  }
    return (
      <Connect query={ graphqlOperation ( listCertificates, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
        {
          ( data ) => {
            return (<Certifcates data={data} /> )
          }
        }
    </Connect>
      
    )
  }

