export const extractDetailsSection = (page,sectionName) => {
    const personalDetailsSection = page.find(section => section.name === sectionName);
    if (personalDetailsSection && personalDetailsSection.sections && personalDetailsSection.sections.length > 0) {
      return personalDetailsSection.sections[0].form;
    }
    return null;
  };
  export const extractRoute = (page,routeName) => {
    const extractRoute = page.find(route => route.name === routeName);
    
     if(extractRoute && extractRoute.route) {
      return extractRoute.route
     }
     return null
  };


  