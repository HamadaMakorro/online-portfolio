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

export const listDuties = `query ListDuties(
  $filter: TableDutyFilterInput
  $limit: Int
  $nextToken: String
) {
  listDuties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
    }
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

export const listExperiences = `query ListExperiences($filter: TableExperienceFilterInput) {
  listExperiences(filter: $filter) {
    items {
      role
      company
    }
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
export const listOtherExperiences = `query ListOtherExperiences(
  $filter: TableOtherExperienceFilterInput
  $limit: Int
  $nextToken: String
) {
  listOtherExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      company
      duties {
        text
      }
    }
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

export const listSkills = `query ListSkills(
  $filter: TableSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      text
      proficiency
    }
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

export const listTitles = `query ListTitles {
  listTitles {
    items {
      name
      role
    }
  }
}
`;