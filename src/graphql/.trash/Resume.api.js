// import React from 'react'
// import { Header } from 'semantic-ui-react'
// import './Summary.css'
// import { Connect } from "aws-amplify-react";
import * as queries from './queries'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsConfig from '../../aws-exports'

// filter by .. 
const query = {
  filterByResume: [
    'Summaries',
    'Titles',
    'Certificates',
    'Experiences',
    'OtherExperiences',
    'Interests',
    'PersonalDetails',
    'Educations'
  ],
  filterByCompany: [
    'Duties',
    // 'Skills',
  ],
  filterByEstablishment: [
    'Courses'
  ]
}

const establishments = [
  'Hatch End',
  'University of Manchester',
  'Stanmore College'
]

const companies = [
  'Hamada',
  'Vodafone',
  'Somali Society',
  '1eid',
  'Al Fitrah',
  'Various'
]

export default function() {
  Amplify.configure( awsConfig )
  // for now .. don't have any other resumes uploaded, and running out of time,
  // so just retrieved everything with no filters
  // in the future, will want to consider a more elaborate method of filtering against a particular resume

  // to reconsider entirely .. or to perhaps find a way to make it persist in the cloud .. or to make the loading state look better 
  // don't think this is necessarily ideal way to do it just for the sake of saving on a bunch of small and quick API calls .. 
  // but yay me for getting this far

  
  let response
  const data = {}

  query.filterByResume.forEach( ( query ) => {
    response = API.graphql( graphqlOperation( queries['list' + query], { filter: { resume: { contains: "18AUG19-ContractReactDeveloper" } } } ) )
    data[query] = response
  })

  establishments.forEach( ( establishment ) => {
    query.filterByEstablishment.forEach( ( query ) => {
      response = API.graphql( graphqlOperation( queries['list' + query], { filter: { establishment: { contains: establishment } } } ) )
      data[query] = response
    })
  })

  companies.forEach( ( company ) => {
    query.filterByCompany.forEach( ( query ) => {
      response = API.graphql( graphqlOperation( queries['list' + query], { filter: { company: { contains: company } } } ) )
      data[query] = response
    })
  })
    

  console.log('data: ', data);
  return data
}