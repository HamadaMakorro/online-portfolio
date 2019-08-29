import React from 'react'
import { Connect } from "aws-amplify-react"
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../../../aws-exports'
import { listDuties } from '../../../../graphql/queries'


export default function ( { company, onMouseLeave, onMouseOver } ) {
  Amplify.configure(awsConfig)
  function ListDuties( { data : { data, loading, error } } ) {
    if( loading ) {
      return null
    } else {
      const { listDuties } = data
      return(
        <React.Fragment>
        {
          listDuties.items.map( ({ text, skills }) => {
            let _skills = []
                skills.forEach( ( el ) => _skills.push(el.text) )
            let skillsText = _skills.join(' ')
                skillsText = skillsText.toLowerCase()
            return ( 
              <li 
                className="experience duty" 
                onMouseOver={onMouseOver} 
                onMouseLeave={onMouseLeave}
                skills={skillsText}
                >
                { text }
              </li>
            )})
        }
        </React.Fragment> 
      )
    }
  }

  return (
    <Connect query={ graphqlOperation ( listDuties, { filter: { company: { contains: company } } } )}>
      {
        ( data ) => {
          return <ListDuties data={data}/>
        }
      }
    </Connect>
  )
}