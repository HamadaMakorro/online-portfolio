import React from 'react'
// import PropTypes from 'prop-types'
// import resume from '../Resume/Resume.resource'
import { Header } from 'semantic-ui-react'
// import './Experience.css'
import { Connect } from 'aws-amplify-react'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../../aws-exports'
import { listOtherExperiences, listDuties } from '../../../graphql/queries'


export default function( props ) {
  Amplify.configure(awsConfig)

  function ListDuties( { data : { data, loading, error } } ) {
    if( loading ) {
      return null
    } else {
      const { listDuties } = data
      //TODO: re-implement these attributes back into <li> element:
      // onMouseOver={props.onMouseOver} 
      // onMouseLeave={props.onMouseLeave}
      // skills={el.skills.join(' ')}>{el.text}
      return(
        <React.Fragment>
        {
          listDuties.items.map( ({ text }) => {
            return ( 
              <li className="experience duty" >
                { text }
              </li>
            )})
        }
        </React.Fragment> 
      )
    }
  }

  function OtherExperience( { data : { data, loading, error } } ) {
    if( loading ) {
      return null
    } else {
      const { listOtherExperiences } = data
      return(
        <div id="experience" className="section">
          <Header as="h1" className="section-title">Other Experience</Header>
          {
            listOtherExperiences.items.map(({ company }) => {
              return (
                <React.Fragment>
                  {/* <h2 className="experience role">{role}</h2> */}
                  <h3 className="experience company">{company}</h3>
                  <div className="experience duties">
                  {
                    <Connect query={ graphqlOperation ( listDuties, { filter: { company: { contains: company } } } )}>
                      {
                        ( data ) => {
                          return <ListDuties data={data}/>
                        }
                      }
                    </Connect>
                  }
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      )
    }
  }

  return (
    <Connect query={ graphqlOperation ( listOtherExperiences, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
      {
        ( data ) => {
          return (<OtherExperience data={ data } /> )
        }
      }
    </Connect>
  )
}
