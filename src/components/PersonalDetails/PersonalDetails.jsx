import React from 'react'
import { Connect } from "aws-amplify-react";
import { listPersonalDetails } from '../../graphql/queries'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'
import { Header, Button, Icon } from 'semantic-ui-react'

export default function() {
  Amplify.configure(awsConfig)
  function PersonalDetails( { data : { data: { listPersonalDetails: personalDetails } , loading, error } } ) {    
    // TODO: Error handling
    if ( loading ) {
      return null
    } else {
      const { location, website, email } = personalDetails.items[0]
      return (
          <div id="personal-details" className="section">
            <Header as="h1" id="personal_details-title" className="section-title">Personal Details</Header>
            <h3>Location</h3>
              <p>{location}</p>
            <h3>Website</h3>
              <p>{website}</p>
            <h3>Email</h3>
              <Button animated='vertical' fluid basic color="red">
                <Button.Content hidden>{email}</Button.Content>
                <Button.Content visible>
                  <Icon name='mail' />
                </Button.Content>
              </Button>
            <br />
            <a href="https://www.linkedin.com/in/mohamed-react-developer/"><Button color='linkedin' fluid><Icon name='linkedin'/>LinkedIn</Button></a>
          </div>
        )
      }
  }
  return (
    <Connect query={ graphqlOperation ( listPersonalDetails, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
        {
          ( data ) => {
            return (<PersonalDetails data={data} /> )
          }
        }
    </Connect>
  )
}




