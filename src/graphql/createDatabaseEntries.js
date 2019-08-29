
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import * as mutations from './mutations'
import awsconfig from '../aws-exports'
import { experienceInputs, dutyInputs, otherExperienceInputs, educationInputs, courseInputs, certificateInputs, interestInputs, personalDetailsInputs, skillInputs, resumeInputs, summaryInputs, titleInputs } from './mutations.data'


export default async function() {
  Amplify.configure(awsconfig)

  experienceInputs.forEach( ( el ) => API.graphql( 
    graphqlOperation( mutations.createExperience, { input: el } ) 
  ) )
  
  // dutyInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createDuty, { input: el } ) 
  // ) )
  
  // educationInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createEducation, { input: el } ) 
  // ) )
  
  // courseInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createCourse, { input: el } ) 
  // ) )
  
  // certificateInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createCertificate, { input: el } ) 
  // ) )

  // personalDetailsInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createPersonalDetails, { input: el } ) 
  // ) )

  // skillInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createSkill, { input: el } ) 
  // ) )

  // resumeInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createResume, { input: el } ) 
  // ) )

  // summaryInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createSummary, { input: el } ) 
  // ) )

  // interestInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createInterest, { input: el } ) 
  // ) )

  // titleInputs.forEach( ( el ) => API.graphql( 
  //   graphqlOperation( mutations.createTitle, { input: el } ) 
  // ) )
}