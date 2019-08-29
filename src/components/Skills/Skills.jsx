import React from 'react'
import { Connect } from "aws-amplify-react";
import { listSkills } from '../../graphql/queries'
import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'
import { Header } from 'semantic-ui-react'
import './Skills.scss'
import { Progress } from 'semantic-ui-react'

export default function() {
  Amplify.configure(awsConfig)
  function Skills( { data : { data: { listSkills: skills }, loading, error } } ) {    
    // TODO: Error handling
    if ( loading ) {
      return null
    } else {
      skills = skills.items.sort( ( a, b ) => b.sortOrder - a.sortOrder ) // order by most proficient
      return (
            <div className="section">
            <Header as="h1" id="skills-title" className="section-title">Skills</Header>
            {
              skills.map(({ text: skill, proficiency }) => {
                return (
                  <div key={skill} id="skill segment">
                    <li id={skill.toLowerCase()} className="skill">{skill}</li>
                    <Progress percent={proficiency * 20} indicating />
                  </div>
                )
              })
            }
            { /** failsafe for duties with an empty skills array, applies namely to soft skills which I've decided to not include in my skills table */ }
            <li id='' style={ { display: "none" } } />
          </div>
        )
    }
  }

  return (
    <Connect query={ graphqlOperation ( listSkills, { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } )}>
        {
          ( data ) => {
            return (<Skills data={data} /> )
          }
        }
    </Connect>
  )
}





