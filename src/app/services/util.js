export const extractDetailsSection = (page,sectionName) => {
    const personalDetailsSection = page.find(section => section.name === sectionName);
    if (personalDetailsSection && personalDetailsSection.sections && personalDetailsSection.sections.length > 0) {
      return personalDetailsSection.sections[0].form;
    }
    return null;
  };