/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCertificate = `query GetCertificate($id: ID!) {
  getCertificate(id: $id) {
    id
    text
    resume
  }
}
`;
export const listCertificates = `query ListCertificates(
  $filter: TableCertificateFilterInput
  $limit: Int
  $nextToken: String
) {
  listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
    }
  }
}
`;

export const getCourse = `query GetCourse($id: ID!) {
  getCourse(id: $id) {
    id
    text
    resume
  }
}
`;
export const listCourses = `query ListCourses(
  $filter: TableCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
    }
  }
}
`;
export const getDuty = `query GetDuty($id: ID!) {
  getDuty(id: $id) {
    id
    text
    skills {
      id
      text
      proficiency
      resume
    }
    resume
  }
}
`;
export const listDuties = `query ListDuties(
  $filter: TableDutyFilterInput
  $limit: Int
  $nextToken: String
) {
  listDuties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
      skills {
        text
      }
    }
  }
}
`;
export const getEducation = `query GetEducation($establishment: String!) {
  getEducation(establishment: $establishment) {
    text
    courses {
      id
      text
      resume
    }
    resume
  }
}
`;
export const listEducations = `query ListEducations(
  $filter: TableEducationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
      courses {
        text
      }
    }
  }
}
`;
export const getExperience = `query GetExperience($id: ID!) {
  getExperience(id: $id) {
    id
    role
    company
    duties {
      id
      text
      skills {
        id
        text
        proficiency
        resume
      }
      resume
    }
    resume
  }
}
`;
export const listExperiences = `query ListExperiences($filter: TableExperienceFilterInput) {
  listExperiences(filter: $filter) {
    items {
      role
      company
      sortOrder
      period
      duties {
        text
        skills {
          text
          proficiency
        }
      }
    }
  }
}
`;
export const getInterest = `query GetInterest($id: ID!) {
  getInterest(id: $id) {
    id
    text
    resume
  }
}
`;
export const listInterests = `query ListInterests(
  $filter: TableInterestFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
    }
  }
}
`;
export const getOtherExperience = `query GetOtherExperience($id: ID!) {
  getOtherExperience(id: $id) {
    id
    company
    duties {
      id
      text
      skills {
        id
        text
        proficiency
        resume
      }
      resume
    }
    resume
  }
}
`;
export const getPersonalDetails = `query GetPersonalDetails($id: ID!) {
  getPersonalDetails(id: $id) {
    id
    location
    website
    email
    resume
  }
}
`;
export const listPersonalDetails = `query ListPersonalDetails(
  $filter: TablePersonalDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPersonalDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      location
      website
      email
    }
  }
}
`;
export const getResume = `query GetResume($id: ID!) {
  getResume(id: $id) {
    id
    name
    timestamp
    title {
      id
      name
      role
      resume
    }
    summary {
      id
      text
      resume
    }
    experience {
      id
      role
      company
      duties {
        id
        text
        resume
      }
      resume
    }
    otherExperience {
      id
      role
      company
      duties {
        id
        text
        resume
      }
      resume
    }
    education {
      text
      courses {
        id
        text
        resume
      }
      resume
    }
    certificates {
      id
      text
      resume
    }
    interests {
      id
      text
      resume
    }
    personalDetails {
      id
      location
      website
      email
      resume
    }
    skills {
      id
      text
      proficiency
      resume
    }
  }
}
`;
export const getSkill = `query GetSkill($id: ID!) {
  getSkill(id: $id) {
    id
    text
    proficiency
    resume
  }
}
`;
export const listSkills = `query ListSkills(
  $filter: TableSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
      proficiency
      sortOrder
    }
  }
}
`;
export const getSummary = `query GetSummary($id: ID!) {
  getSummary(id: $id) {
    id
    text
    resume
  }
}
`;
export const listSummaries = `query ListSummaries($filter: TableSummaryFilterInput) {
  listSummaries(filter: $filter) {
    items {
      text
    }
  }
}
`;
export const getTitle = `query GetTitle($id: ID!) {
  getTitle(id: $id) {
    id
    name
    role
    resume
  }
}
`;
export const listTitles = `query ListTitles( $filter: TableTitleFilterInput) {
  listTitles(filter: $filter){
    items {
      name
      role
    }
  }
}
`;
export const listLanguages = `query ListLanguages( $filter: TableLanguageFilterInput) {
  listLanguages(filter: $filter){
    items {
      text
      proficiency
    }
  }
}
`;
