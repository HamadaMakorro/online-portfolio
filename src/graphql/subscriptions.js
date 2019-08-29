/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCertificate = `subscription OnCreateCertificate($id: ID, $text: String) {
  onCreateCertificate(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onUpdateCertificate = `subscription OnUpdateCertificate($id: ID, $text: String) {
  onUpdateCertificate(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onDeleteCertificate = `subscription OnDeleteCertificate($id: ID, $text: String) {
  onDeleteCertificate(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onCreateCourse = `subscription OnCreateCourse($id: ID, $text: String) {
  onCreateCourse(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onUpdateCourse = `subscription OnUpdateCourse($id: ID, $text: String) {
  onUpdateCourse(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onDeleteCourse = `subscription OnDeleteCourse($id: ID, $text: String) {
  onDeleteCourse(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onCreateDuty = `subscription OnCreateDuty($id: ID, $text: String) {
  onCreateDuty(id: $id, text: $text) {
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
export const onUpdateDuty = `subscription OnUpdateDuty($id: ID, $text: String) {
  onUpdateDuty(id: $id, text: $text) {
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
export const onDeleteDuty = `subscription OnDeleteDuty($id: ID, $text: String) {
  onDeleteDuty(id: $id, text: $text) {
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
export const onCreateEducation = `subscription OnCreateEducation($establishment: String) {
  onCreateEducation(establishment: $establishment) {
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
export const onUpdateEducation = `subscription OnUpdateEducation($establishment: String) {
  onUpdateEducation(establishment: $establishment) {
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
export const onDeleteEducation = `subscription OnDeleteEducation($establishment: String) {
  onDeleteEducation(establishment: $establishment) {
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
export const onCreateExperience = `subscription OnCreateExperience($id: ID, $role: String, $company: String) {
  onCreateExperience(id: $id, role: $role, company: $company) {
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
export const onUpdateExperience = `subscription OnUpdateExperience($id: ID, $role: String, $company: String) {
  onUpdateExperience(id: $id, role: $role, company: $company) {
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
export const onDeleteExperience = `subscription OnDeleteExperience($id: ID, $role: String, $company: String) {
  onDeleteExperience(id: $id, role: $role, company: $company) {
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
export const onCreateInterest = `subscription OnCreateInterest($id: ID, $text: String) {
  onCreateInterest(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onUpdateInterest = `subscription OnUpdateInterest($id: ID, $text: String) {
  onUpdateInterest(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onDeleteInterest = `subscription OnDeleteInterest($id: ID, $text: String) {
  onDeleteInterest(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onCreateOtherExperience = `subscription OnCreateOtherExperience($id: ID, $company: String) {
  onCreateOtherExperience(id: $id, company: $company) {
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
export const onUpdateOtherExperience = `subscription OnUpdateOtherExperience($id: ID, $company: String) {
  onUpdateOtherExperience(id: $id, company: $company) {
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
export const onDeleteOtherExperience = `subscription OnDeleteOtherExperience($id: ID, $company: String) {
  onDeleteOtherExperience(id: $id, company: $company) {
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
export const onCreatePersonalDetails = `subscription OnCreatePersonalDetails(
  $id: ID
  $location: String
  $website: String
  $email: String
) {
  onCreatePersonalDetails(
    id: $id
    location: $location
    website: $website
    email: $email
  ) {
    id
    location
    website
    email
    resume
  }
}
`;
export const onUpdatePersonalDetails = `subscription OnUpdatePersonalDetails(
  $id: ID
  $location: String
  $website: String
  $email: String
) {
  onUpdatePersonalDetails(
    id: $id
    location: $location
    website: $website
    email: $email
  ) {
    id
    location
    website
    email
    resume
  }
}
`;
export const onDeletePersonalDetails = `subscription OnDeletePersonalDetails(
  $id: ID
  $location: String
  $website: String
  $email: String
) {
  onDeletePersonalDetails(
    id: $id
    location: $location
    website: $website
    email: $email
  ) {
    id
    location
    website
    email
    resume
  }
}
`;
export const onCreateResume = `subscription OnCreateResume($id: ID, $name: String) {
  onCreateResume(id: $id, name: $name) {
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
export const onUpdateResume = `subscription OnUpdateResume($id: ID, $name: String) {
  onUpdateResume(id: $id, name: $name) {
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
export const onDeleteResume = `subscription OnDeleteResume($id: ID, $name: String) {
  onDeleteResume(id: $id, name: $name) {
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
export const onCreateSkill = `subscription OnCreateSkill($id: ID, $text: String, $proficiency: Int) {
  onCreateSkill(id: $id, text: $text, proficiency: $proficiency) {
    id
    text
    proficiency
    resume
  }
}
`;
export const onUpdateSkill = `subscription OnUpdateSkill($id: ID, $text: String, $proficiency: Int) {
  onUpdateSkill(id: $id, text: $text, proficiency: $proficiency) {
    id
    text
    proficiency
    resume
  }
}
`;
export const onDeleteSkill = `subscription OnDeleteSkill($id: ID, $text: String, $proficiency: Int) {
  onDeleteSkill(id: $id, text: $text, proficiency: $proficiency) {
    id
    text
    proficiency
    resume
  }
}
`;
export const onCreateSummary = `subscription OnCreateSummary($id: ID, $text: String) {
  onCreateSummary(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onUpdateSummary = `subscription OnUpdateSummary($id: ID, $text: String) {
  onUpdateSummary(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onDeleteSummary = `subscription OnDeleteSummary($id: ID, $text: String) {
  onDeleteSummary(id: $id, text: $text) {
    id
    text
    resume
  }
}
`;
export const onCreateTitle = `subscription OnCreateTitle($id: ID, $name: String, $role: String) {
  onCreateTitle(id: $id, name: $name, role: $role) {
    id
    name
    role
    resume
  }
}
`;
export const onUpdateTitle = `subscription OnUpdateTitle($id: ID, $name: String, $role: String) {
  onUpdateTitle(id: $id, name: $name, role: $role) {
    id
    name
    role
    resume
  }
}
`;
export const onDeleteTitle = `subscription OnDeleteTitle($id: ID, $name: String, $role: String) {
  onDeleteTitle(id: $id, name: $name, role: $role) {
    id
    name
    role
    resume
  }
}
`;
