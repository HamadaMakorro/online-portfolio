/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCertificate = `mutation CreateCertificate($input: CreateCertificateInput!) {
  createCertificate(input: $input) {
    id
    text
    resume
  }
}
`;
export const updateCertificate = `mutation UpdateCertificate($input: UpdateCertificateInput!) {
  updateCertificate(input: $input) {
    id
    text
    resume
  }
}
`;
export const deleteCertificate = `mutation DeleteCertificate($input: DeleteCertificateInput!) {
  deleteCertificate(input: $input) {
    id
    text
    resume
  }
}
`;
export const createCourse = `mutation CreateCourse($input: CreateCourseInput!) {
  createCourse(input: $input) {
    id
    text
    resume
  }
}
`;
export const updateCourse = `mutation UpdateCourse($input: UpdateCourseInput!) {
  updateCourse(input: $input) {
    id
    text
    resume
  }
}
`;
export const deleteCourse = `mutation DeleteCourse($input: DeleteCourseInput!) {
  deleteCourse(input: $input) {
    id
    text
    resume
  }
}
`;
export const createDuty = `mutation CreateDuty($input: CreateDutyInput!) {
  createDuty(input: $input) {
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
export const updateDuty = `mutation UpdateDuty($input: UpdateDutyInput!) {
  updateDuty(input: $input) {
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
export const deleteDuty = `mutation DeleteDuty($input: DeleteDutyInput!) {
  deleteDuty(input: $input) {
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
export const createEducation = `mutation CreateEducation($input: CreateEducationInput!) {
  createEducation(input: $input) {
    text
    courses {
      id
      text
      establishment
      resume
    }
    text
  }
}
`;
export const updateEducation = `mutation UpdateEducation($input: UpdateEducationInput!) {
  updateEducation(input: $input) {
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
export const deleteEducation = `mutation DeleteEducation($input: DeleteEducationInput!) {
  deleteEducation(input: $input) {
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
export const createExperience = `mutation CreateExperience($input: CreateExperienceInput!) {
  createExperience(input: $input) {
    role
    company
    duties {
      text
      company
      skills {
        text
        proficiency
      }
    }
  }
}
`;
export const updateExperience = `mutation UpdateExperience($input: UpdateExperienceInput!) {
  updateExperience(input: $input) {
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
export const deleteExperience = `mutation DeleteExperience($input: DeleteExperienceInput!) {
  deleteExperience(input: $input) {
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
export const createInterest = `mutation CreateInterest($input: CreateInterestInput!) {
  createInterest(input: $input) {
    id
    text
    resume
  }
}
`;
export const updateInterest = `mutation UpdateInterest($input: UpdateInterestInput!) {
  updateInterest(input: $input) {
    id
    text
    resume
  }
}
`;
export const deleteInterest = `mutation DeleteInterest($input: DeleteInterestInput!) {
  deleteInterest(input: $input) {
    id
    text
    resume
  }
}
`;
export const createOtherExperience = `mutation CreateOtherExperience($input: CreateOtherExperienceInput!) {
  createOtherExperience(input: $input) {
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
export const updateOtherExperience = `mutation UpdateOtherExperience($input: UpdateOtherExperienceInput!) {
  updateOtherExperience(input: $input) {
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
export const deleteOtherExperience = `mutation DeleteOtherExperience($input: DeleteOtherExperienceInput!) {
  deleteOtherExperience(input: $input) {
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
export const createPersonalDetails = `mutation CreatePersonalDetails($input: CreatePersonalDetailsInput!) {
  createPersonalDetails(input: $input) {
    id
    location
    website
    email
    resume
  }
}
`;
export const updatePersonalDetails = `mutation UpdatePersonalDetails($input: UpdatePersonalDetailsInput!) {
  updatePersonalDetails(input: $input) {
    id
    location
    website
    email
    resume
  }
}
`;
export const deletePersonalDetails = `mutation DeletePersonalDetails($input: DeletePersonalDetailsInput!) {
  deletePersonalDetails(input: $input) {
    id
    location
    website
    email
    resume
  }
}
`;

export const updateResume = `mutation UpdateResume($input: UpdateResumeInput!) {
  updateResume(input: $input) {
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
export const deleteResume = `mutation DeleteResume($input: DeleteResumeInput!) {
  deleteResume(input: $input) {
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
export const createSkill = `mutation CreateSkill($input: CreateSkillInput!) {
  createSkill(input: $input) {
    id
    text
    proficiency
    resume
  }
}
`;
export const updateSkill = `mutation UpdateSkill($input: UpdateSkillInput!) {
  updateSkill(input: $input) {
    id
    text
    proficiency
    resume
  }
}
`;
export const deleteSkill = `mutation DeleteSkill($input: DeleteSkillInput!) {
  deleteSkill(input: $input) {
    id
    text
    proficiency
    resume
  }
}
`;
export const createSummary = `mutation CreateSummary($input: CreateSummaryInput!) {
  createSummary(input: $input) {
    id
    text
    resume
  }
}
`;
export const updateSummary = `mutation UpdateSummary($input: UpdateSummaryInput!) {
  updateSummary(input: $input) {
    id
    text
    resume
  }
}
`;
export const deleteSummary = `mutation DeleteSummary($input: DeleteSummaryInput!) {
  deleteSummary(input: $input) {
    id
    text
    resume
  }
}
`;
export const createTitle = `mutation CreateTitle($input: CreateTitleInput!) {
  createTitle(input: $input) {
    id
    name
    role
    resume
  }
}
`;
export const updateTitle = `mutation UpdateTitle($input: UpdateTitleInput!) {
  updateTitle(input: $input) {
    id
    name
    role
    resume
  }
}
`;
export const deleteTitle = `mutation DeleteTitle($input: DeleteTitleInput!) {
  deleteTitle(input: $input) {
    id
    name
    role
    resume
  }
}
`;
