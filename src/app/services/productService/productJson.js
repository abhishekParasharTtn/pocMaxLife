
  const products = {
   SSP: {
        "sections": [
          {
            "name": "",
            "fields": [
              {
                "valueDependency": "No",
                "fieldName": "premiumType",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Single Pay",
                    "key": "Single Pay"
                  },
                  {
                    "logic": false,
                    "value": "Limited Pay",
                    "key": "Limited Pay"
                  }
                ],
                "fieldDescription": "Premium Type",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 1,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": {
                  "required": true
                },
                "fieldType": "Dropdown"
              },
              {
                "parent": "premiumType",
                "valueDependency": "Yes",
                "fieldName": "premiumPaymentTerm",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Premium Payment Term",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 2,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": {
                  "minValue": 1,
                  "maxValue": 12,
                  "required": true
                },
                "fieldType": "Dropdown",
                "parentValues": {
                  "Limited Pay": {
                    "values": [
                      {
                        "value": "5",
                        "key": "5"
                      },
                      {
                        "value": "6",
                        "key": "6"
                      },
                      {
                        "value": "7",
                        "key": "7"
                      },
                      {
                        "value": "8",
                        "key": "8"
                      },
                      {
                        "value": "9",
                        "key": "9"
                      },
                      {
                        "value": "10",
                        "key": "10"
                      },
                      {
                        "value": "11",
                        "key": "11"
                      },
                      {
                        "value": "12",
                        "key": "12"
                      }
                    ]
                  },
                  "Single Pay": {
                    "values": [
                      {
                        "value": "1",
                        "key": "1"
                      }
                    ]
                  }
                }
              },
              {
                "parent": [
                  "annuityType",
                  "premiumType"
                ],
                "valueDependency": "Yes",
                "fieldName": "modeOfPayment",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Mode of Payment",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 4,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": {
                  "required": true
                },
                "fieldType": "Dropdown",
                "parentValues": {
                  "Limited Pay": {
                    "values": [
                      {
                        "value": "Annual",
                        "key": "Annual"
                      },
                      {
                        "value": "Semi-Annual",
                        "key": "Semi-Annual"
                      },
                      {
                        "value": "Quarterly",
                        "key": "Quarterly"
                      },
                      {
                        "value": "Monthly",
                        "key": "Monthly"
                      }
                    ]
                  },
                  "Immediate": {
                    "values": [
                      {
                        "value": "Single",
                        "key": "Single"
                      }
                    ]
                  }
                }
              },
              {
                "parent": [
                  "maximumVestingAge",
                  "defermentPeriod"
                ],
                "valueDependency": "Yes",
                "fieldName": "defermentPeriod",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Deferment Period",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Single Pay",
                          "operation": "EQUALS",
                          "key": "premiumType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Deferred Annuity",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Deferred Annuity",
                          "operation": "EQUALS",
                          "key": "annuityType"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 5,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {
                  "tempValue2": {
                    "values": [
                      {
                        "value": "yearly deferment until 12th year",
                        "key": "yearly deferment until 12th year"
                      }
                    ]
                  }
                }
              },
              {
                "parent": "premiumType",
                "valueDependency": "Yes",
                "fieldName": "annuityType",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Annuity Type",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 6,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {
                  "Limited Pay": {
                    "values": [
                      {
                        "value": "Deferred Annuity",
                        "key": "Deferred Annuity"
                      }
                    ]
                  },
                  "Single Pay": {
                    "values": [
                      {
                        "value": "Immediate Annuity (IA)",
                        "key": "Immediate Annuity (IA)"
                      },
                      {
                        "value": "Increasing IA",
                        "key": "Increasing IA"
                      },
                      {
                        "value": "IA with Early ROP",
                        "key": "IA with Early ROP"
                      },
                      {
                        "value": "Deferred Annuity",
                        "key": "Deferred Annuity"
                      },
                      {
                        "value": "IA for Guaranteed Period and Life Thereafter",
                        "key": "IA for Guaranteed Period and Life Thereafter"
                      },
                      {
                        "value": "IA with Choosen Proportion of Annuity to Last Survivor",
                        "key": "IA with Choosen Proportion of Annuity to Last Survivor"
                      }
                    ]
                  }
                }
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "deathBenefitOption",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Death Benefit Option",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Immediate Annuity",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "OR"
                        },
                        {
                          "value": "IA with Choosen Proportion of Annuity to Last Survivor",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Single Life",
                          "operation": "EQUALS",
                          "key": "annuityOption",
                          "nextOperation": "OR"
                        },
                        {
                          "value": "Joint Life",
                          "operation": "EQUALS",
                          "key": "annuityOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 7,
                "defaultRender": "No",
                "disabled": false,
                "validations": {
                  "required": true
                },
                "fieldType": "Radio Button",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "annuityOption",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Annuity option",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 8,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {
                  "IA with Chosen Proportion of Annuity to Last Survivor": {
                    "values": [
                      {
                        "value": "Joint Life",
                        "key": "Joint Life"
                      }
                    ]
                  }
                }
              },
              {
                "valueDependency": "No",
                "fieldName": "buyingWithPurchasePrice",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Yes",
                    "key": "Yes"
                  },
                  {
                    "logic": false,
                    "value": "No",
                    "key": "No"
                  }
                ],
                "fieldDescription": "Are you buying with Purchase Price ?",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 9,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Radio Button"
              },
              {
                "valueDependency": "No",
                "fieldName": "annuityAmount",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Annuity Amount (Annually)",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 10,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "valueDependency": "No",
                "fieldName": "gstWaiverRequired",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Yes",
                    "key": "Yes"
                  },
                  {
                    "logic": false,
                    "value": "No",
                    "key": "No"
                  }
                ],
                "fieldDescription": "GST Waiver Required",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 11,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": {
                  "required": true
                },
                "fieldType": "Radio Button"
              },
              {
                "valueDependency": "No",
                "fieldName": "annuityPaymentFrequency",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Annual",
                    "key": "Annual"
                  },
                  {
                    "logic": false,
                    "value": "Semi-Annual",
                    "key": "Semi-Annual"
                  },
                  {
                    "logic": false,
                    "value": "Monthly",
                    "key": "Monthly"
                  },
                  {
                    "logic": false,
                    "value": "Quarterly",
                    "key": "Quarterly"
                  }
                ],
                "fieldDescription": "Annuity Payment Frequency",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 12,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown"
              },
              {
                "valueDependency": "No",
                "fieldName": "secondAnnuitantName",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "NA",
                    "key": "NA"
                  }
                ],
                "fieldDescription": "Second Annuitant Name ",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 13,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "valueDependency": "No",
                "fieldName": "gender",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Male",
                    "key": "Male"
                  },
                  {
                    "logic": false,
                    "value": "Female",
                    "key": "Female"
                  },
                  {
                    "logic": false,
                    "value": "Transgender",
                    "key": "Transgender"
                  }
                ],
                "fieldDescription": "Gender",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 14,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Radio Button"
              },
              {
                "valueDependency": "No",
                "fieldName": "abhaNumberOfSecondInsured",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Abha Number of Second Insured optional",
                "sectionName": "NA",
                "popup": "ABHA number is a 14-digit number that will uniquely identify us as a participant in Indiaâ€™s digital healthcare ecosystem.",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 15,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "valueDependency": "No",
                "fieldName": "secondAnnuitantDateOfBirth",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Second Annuitant Dateof Birth ",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 16,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Calender"
              },
              {
                "valueDependency": "No",
                "fieldName": "secondAnnuitantPanNumber",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Second Annuitant PAN Number",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 17,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "valueDependency": "No",
                "fieldName": "relationshipWithTheAnnuitant",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Brother",
                    "key": "Brother"
                  },
                  {
                    "logic": false,
                    "value": "Sister",
                    "key": "Sister"
                  },
                  {
                    "logic": false,
                    "value": "Grand Parent",
                    "key": "Grand Parent"
                  },
                  {
                    "logic": false,
                    "value": "Parent",
                    "key": "Parent"
                  },
                  {
                    "logic": false,
                    "value": "Spouse",
                    "key": "Spouse"
                  },
                  {
                    "logic": false,
                    "value": "Son",
                    "key": "Son"
                  },
                  {
                    "logic": false,
                    "value": "Grand Son",
                    "key": "Grand Son"
                  },
                  {
                    "logic": false,
                    "value": "Daughter",
                    "key": "Daughter"
                  },
                  {
                    "logic": false,
                    "value": "Grand Daughter",
                    "key": "Grand Daughter"
                  }
                ],
                "fieldDescription": "Relationship with the Annuitant",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 18,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown"
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "rop%On1stAnnuitantDeath",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "ROP% on 1st Annuitant Death",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Immediate Annuity (IA)",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Joint Life",
                          "operation": "EQUALS",
                          "key": "annuityOption",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "yes",
                          "operation": "EQUALS",
                          "key": "deathBenefitOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 19,
                "defaultRender": "No",
                "disabled": false,
                "validations": {
                  "minValue": 0,
                  "maxValue": 100
                },
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "valueDependency": "No",
                "fieldName": "rop%On2ndAnnuitantDeath",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "0-100",
                "fieldDescription": "ROP% on 2nd Annuitant Death",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Immediate Annuity (IA)",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Joint Life",
                          "operation": "EQUALS",
                          "key": "annuityOption",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "yes",
                          "operation": "EQUALS",
                          "key": "deathBenefitOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 20,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "increasingAnnuityFrequency",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Increasing Annuity Frequency",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Increasing IA",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 21,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "increasingAnnuityFrequency",
                "valueDependency": "Yes",
                "fieldName": "increasingAnnuityPercentage",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Increasing Annuity Percentage ",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "each year",
                      "operation": "EQUALS",
                      "key": "increasingAnnuityFrequency"
                    }
                  ]
                },
                "fieldSequence": 22,
                "defaultRender": "No",
                "disabled": false,
                "validations": {
                  "minValue": 1,
                  "maxValue": 6
                },
                "fieldType": "Dropdown",
                "parentValues": {
                  "each year": {
                    "values": [
                      {
                        "value": "1",
                        "key": "1"
                      },
                      {
                        "value": "2",
                        "key": "2"
                      },
                      {
                        "value": "3",
                        "key": "3"
                      },
                      {
                        "value": "4",
                        "key": "4"
                      },
                      {
                        "value": "5",
                        "key": "5"
                      },
                      {
                        "value": "6",
                        "key": "6"
                      }
                    ]
                  }
                }
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "earlyROP%",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Early ROP %",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "IA with Early ROP",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 23,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "milestoneAge(years)",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Milestone Age (years)",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "IA with Early ROP",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 24,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "guaranteedAnnuityPeriod(years)",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Guaranteed Annuity Period (years)",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "IA for Guaranteed Period and Life Thereafter",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 25,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "annuityToLastSurvivorPercentage",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Annuity to Last Survivor Percentage",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "IA with Choosen Proportion of Annuity to Last Survivor",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Joint Life",
                          "operation": "EQUALS",
                          "key": "annuityOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 26,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "returnOfPremium",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Return of Premium %",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Immediate Annuity (IA)",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Single Life",
                          "operation": "EQUALS",
                          "key": "annuityOption",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Yes",
                          "operation": "EQUALS",
                          "key": "deathBenefitOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 27,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "valueDependency": "No",
                "fieldName": "customerSignDate",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Customer Sign Date",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 28,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Calender"
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "deathBenefitInDeferredPeriod",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Death Benefit in Deferred Period",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Deferred Annuity",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 29,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {
                  "Deferred Annuity": {
                    "values": [
                      {
                        "value": "For Life (With ROP)",
                        "key": "For Life (With ROP)"
                      },
                      {
                        "value": "Till Deferment Period(Without ROP)",
                        "key": "Till Deferment Period(Without ROP)"
                      }
                    ]
                  }
                }
              },
              {
                "valueDependency": "No",
                "fieldName": "purchasePrice",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Purchase Price (Rupee symbol)",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Yes",
                      "operation": "EQUALS",
                      "key": "buyingWithPurchasePrice"
                    }
                  ]
                },
                "fieldSequence": 30,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              }
            ]
          }
        ]
  },
  SWAG: {
        "sections": [
          {
            "name": "",
            "fields": [
              {
                "valueDependency": "No",
                "fieldName": "premiumType",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Single Pay",
                    "key": "Single Pay"
                  },
                  {
                    "logic": false,
                    "value": "Limited Pay",
                    "key": "Limited Pay"
                  }
                ],
                "fieldDescription": "Premium Type",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 1,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": {
                  "required": true
                },
                "fieldType": "Dropdown"
              },
              {
                "parent": "premiumType",
                "valueDependency": "Yes",
                "fieldName": "premiumPaymentTerm",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Premium Payment Term",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 2,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": {
                  "minValue": 1,
                  "maxValue": 12,
                  "required": true
                },
                "fieldType": "Dropdown",
                "parentValues": {
                  "Limited Pay": {
                    "values": [
                      {
                        "value": "5",
                        "key": "5"
                      },
                      {
                        "value": "6",
                        "key": "6"
                      },
                      {
                        "value": "7",
                        "key": "7"
                      },
                      {
                        "value": "8",
                        "key": "8"
                      },
                      {
                        "value": "9",
                        "key": "9"
                      },
                      {
                        "value": "10",
                        "key": "10"
                      },
                      {
                        "value": "11",
                        "key": "11"
                      },
                      {
                        "value": "12",
                        "key": "12"
                      }
                    ]
                  },
                  "Single Pay": {
                    "values": [
                      {
                        "value": "1",
                        "key": "1"
                      }
                    ]
                  }
                }
              },
              {
                "parent": [
                  "annuityType",
                  "premiumType"
                ],
                "valueDependency": "Yes",
                "fieldName": "modeOfPayment",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Mode of Payment",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 4,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": {
                  "required": true
                },
                "fieldType": "Dropdown",
                "parentValues": {
                  "Limited Pay": {
                    "values": [
                      {
                        "value": "Annual",
                        "key": "Annual"
                      },
                      {
                        "value": "Semi-Annual",
                        "key": "Semi-Annual"
                      },
                      {
                        "value": "Quarterly",
                        "key": "Quarterly"
                      },
                      {
                        "value": "Monthly",
                        "key": "Monthly"
                      }
                    ]
                  },
                  "Immediate": {
                    "values": [
                      {
                        "value": "Single",
                        "key": "Single"
                      }
                    ]
                  }
                }
              },
              {
                "parent": [
                  "maximumVestingAge",
                  "defermentPeriod"
                ],
                "valueDependency": "Yes",
                "fieldName": "defermentPeriod",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Deferment Period",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Single Pay",
                          "operation": "EQUALS",
                          "key": "premiumType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Deferred Annuity",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Deferred Annuity",
                          "operation": "EQUALS",
                          "key": "annuityType"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 5,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {
                  "tempValue2": {
                    "values": [
                      {
                        "value": "yearly deferment until 12th year",
                        "key": "yearly deferment until 12th year"
                      }
                    ]
                  }
                }
              },
              {
                "parent": "premiumType",
                "valueDependency": "Yes",
                "fieldName": "annuityType",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Annuity Type",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 6,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {
                  "Limited Pay": {
                    "values": [
                      {
                        "value": "Deferred Annuity",
                        "key": "Deferred Annuity"
                      }
                    ]
                  },
                  "Single Pay": {
                    "values": [
                      {
                        "value": "Immediate Annuity (IA)",
                        "key": "Immediate Annuity (IA)"
                      },
                      {
                        "value": "Increasing IA",
                        "key": "Increasing IA"
                      },
                      {
                        "value": "IA with Early ROP",
                        "key": "IA with Early ROP"
                      },
                      {
                        "value": "Deferred Annuity",
                        "key": "Deferred Annuity"
                      },
                      {
                        "value": "IA for Guaranteed Period and Life Thereafter",
                        "key": "IA for Guaranteed Period and Life Thereafter"
                      },
                      {
                        "value": "IA with Choosen Proportion of Annuity to Last Survivor",
                        "key": "IA with Choosen Proportion of Annuity to Last Survivor"
                      }
                    ]
                  }
                }
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "deathBenefitOption",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Death Benefit Option",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Immediate Annuity",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "OR"
                        },
                        {
                          "value": "IA with Choosen Proportion of Annuity to Last Survivor",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Single Life",
                          "operation": "EQUALS",
                          "key": "annuityOption",
                          "nextOperation": "OR"
                        },
                        {
                          "value": "Joint Life",
                          "operation": "EQUALS",
                          "key": "annuityOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 7,
                "defaultRender": "No",
                "disabled": false,
                "validations": {
                  "required": true
                },
                "fieldType": "Radio Button",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "annuityOption",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Annuity option",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 8,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {
                  "IA with Chosen Proportion of Annuity to Last Survivor": {
                    "values": [
                      {
                        "value": "Joint Life",
                        "key": "Joint Life"
                      }
                    ]
                  }
                }
              },
              {
                "valueDependency": "No",
                "fieldName": "buyingWithPurchasePrice",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Yes",
                    "key": "Yes"
                  },
                  {
                    "logic": false,
                    "value": "No",
                    "key": "No"
                  }
                ],
                "fieldDescription": "Are you buying with Purchase Price ?",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 9,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Radio Button"
              },
              {
                "valueDependency": "No",
                "fieldName": "annuityAmount",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Annuity Amount (Annually)",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 10,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "valueDependency": "No",
                "fieldName": "gstWaiverRequired",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Yes",
                    "key": "Yes"
                  },
                  {
                    "logic": false,
                    "value": "No",
                    "key": "No"
                  }
                ],
                "fieldDescription": "GST Waiver Required",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 11,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": {
                  "required": true
                },
                "fieldType": "Radio Button"
              },
              {
                "valueDependency": "No",
                "fieldName": "annuityPaymentFrequency",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Annual",
                    "key": "Annual"
                  },
                  {
                    "logic": false,
                    "value": "Semi-Annual",
                    "key": "Semi-Annual"
                  },
                  {
                    "logic": false,
                    "value": "Monthly",
                    "key": "Monthly"
                  },
                  {
                    "logic": false,
                    "value": "Quarterly",
                    "key": "Quarterly"
                  }
                ],
                "fieldDescription": "Annuity Payment Frequency",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 12,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown"
              },
              {
                "valueDependency": "No",
                "fieldName": "secondAnnuitantName",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "NA",
                    "key": "NA"
                  }
                ],
                "fieldDescription": "Second Annuitant Name ",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 13,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "valueDependency": "No",
                "fieldName": "gender",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Male",
                    "key": "Male"
                  },
                  {
                    "logic": false,
                    "value": "Female",
                    "key": "Female"
                  },
                  {
                    "logic": false,
                    "value": "Transgender",
                    "key": "Transgender"
                  }
                ],
                "fieldDescription": "Gender",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 14,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Radio Button"
              },
              {
                "valueDependency": "No",
                "fieldName": "abhaNumberOfSecondInsured",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Abha Number of Second Insured optional",
                "sectionName": "NA",
                "popup": "ABHA number is a 14-digit number that will uniquely identify us as a participant in Indiaâ€™s digital healthcare ecosystem.",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 15,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "valueDependency": "No",
                "fieldName": "secondAnnuitantDateOfBirth",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Second Annuitant Dateof Birth ",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 16,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Calender"
              },
              {
                "valueDependency": "No",
                "fieldName": "secondAnnuitantPanNumber",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Second Annuitant PAN Number",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 17,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "valueDependency": "No",
                "fieldName": "relationshipWithTheAnnuitant",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": [
                  {
                    "logic": false,
                    "value": "Brother",
                    "key": "Brother"
                  },
                  {
                    "logic": false,
                    "value": "Sister",
                    "key": "Sister"
                  },
                  {
                    "logic": false,
                    "value": "Grand Parent",
                    "key": "Grand Parent"
                  },
                  {
                    "logic": false,
                    "value": "Parent",
                    "key": "Parent"
                  },
                  {
                    "logic": false,
                    "value": "Spouse",
                    "key": "Spouse"
                  },
                  {
                    "logic": false,
                    "value": "Son",
                    "key": "Son"
                  },
                  {
                    "logic": false,
                    "value": "Grand Son",
                    "key": "Grand Son"
                  },
                  {
                    "logic": false,
                    "value": "Daughter",
                    "key": "Daughter"
                  },
                  {
                    "logic": false,
                    "value": "Grand Daughter",
                    "key": "Grand Daughter"
                  }
                ],
                "fieldDescription": "Relationship with the Annuitant",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Joint Life",
                      "operation": "EQUALS",
                      "key": "annuityOption"
                    }
                  ]
                },
                "fieldSequence": 18,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown"
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "rop%On1stAnnuitantDeath",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "ROP% on 1st Annuitant Death",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Immediate Annuity (IA)",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Joint Life",
                          "operation": "EQUALS",
                          "key": "annuityOption",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "yes",
                          "operation": "EQUALS",
                          "key": "deathBenefitOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 19,
                "defaultRender": "No",
                "disabled": false,
                "validations": {
                  "minValue": 0,
                  "maxValue": 100
                },
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "valueDependency": "No",
                "fieldName": "rop%On2ndAnnuitantDeath",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "0-100",
                "fieldDescription": "ROP% on 2nd Annuitant Death",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Immediate Annuity (IA)",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Joint Life",
                          "operation": "EQUALS",
                          "key": "annuityOption",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "yes",
                          "operation": "EQUALS",
                          "key": "deathBenefitOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 20,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "increasingAnnuityFrequency",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Increasing Annuity Frequency",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Increasing IA",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 21,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "increasingAnnuityFrequency",
                "valueDependency": "Yes",
                "fieldName": "increasingAnnuityPercentage",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Increasing Annuity Percentage ",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "each year",
                      "operation": "EQUALS",
                      "key": "increasingAnnuityFrequency"
                    }
                  ]
                },
                "fieldSequence": 22,
                "defaultRender": "No",
                "disabled": false,
                "validations": {
                  "minValue": 1,
                  "maxValue": 6
                },
                "fieldType": "Dropdown",
                "parentValues": {
                  "each year": {
                    "values": [
                      {
                        "value": "1",
                        "key": "1"
                      },
                      {
                        "value": "2",
                        "key": "2"
                      },
                      {
                        "value": "3",
                        "key": "3"
                      },
                      {
                        "value": "4",
                        "key": "4"
                      },
                      {
                        "value": "5",
                        "key": "5"
                      },
                      {
                        "value": "6",
                        "key": "6"
                      }
                    ]
                  }
                }
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "earlyROP%",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Early ROP %",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "IA with Early ROP",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 23,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "milestoneAge(years)",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Milestone Age (years)",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "IA with Early ROP",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 24,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "guaranteedAnnuityPeriod(years)",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Guaranteed Annuity Period (years)",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "IA for Guaranteed Period and Life Thereafter",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 25,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "annuityToLastSurvivorPercentage",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Annuity to Last Survivor Percentage",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "IA with Choosen Proportion of Annuity to Last Survivor",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Joint Life",
                          "operation": "EQUALS",
                          "key": "annuityOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 26,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "returnOfPremium",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Return of Premium %",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "conditions": [
                        {
                          "value": "Immediate Annuity (IA)",
                          "operation": "EQUALS",
                          "key": "annuityType",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Single Life",
                          "operation": "EQUALS",
                          "key": "annuityOption",
                          "nextOperation": "AND"
                        },
                        {
                          "value": "Yes",
                          "operation": "EQUALS",
                          "key": "deathBenefitOption"
                        }
                      ]
                    }
                  ]
                },
                "fieldSequence": 27,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {}
              },
              {
                "valueDependency": "No",
                "fieldName": "customerSignDate",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Customer Sign Date",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": "NA",
                "fieldSequence": 28,
                "defaultRender": "Yes",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Calender"
              },
              {
                "parent": "annuityType",
                "valueDependency": "Yes",
                "fieldName": "deathBenefitInDeferredPeriod",
                "isCustomField": "No",
                "defaultValue": "NA",
                "fieldDescription": "Death Benefit in Deferred Period",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Deferred Annuity",
                      "operation": "EQUALS",
                      "key": "annuityType"
                    }
                  ]
                },
                "fieldSequence": 29,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Dropdown",
                "parentValues": {
                  "Deferred Annuity": {
                    "values": [
                      {
                        "value": "For Life (With ROP)",
                        "key": "For Life (With ROP)"
                      },
                      {
                        "value": "Till Deferment Period(Without ROP)",
                        "key": "Till Deferment Period(Without ROP)"
                      }
                    ]
                  }
                }
              },
              {
                "valueDependency": "No",
                "fieldName": "purchasePrice",
                "isCustomField": "No",
                "defaultValue": "NA",
                "values": "NA",
                "fieldDescription": "Purchase Price (Rupee symbol)",
                "sectionName": "NA",
                "popup": "NA",
                "renderCondition": {
                  "conditions": [
                    {
                      "value": "Yes",
                      "operation": "EQUALS",
                      "key": "buyingWithPurchasePrice"
                    }
                  ]
                },
                "fieldSequence": 30,
                "defaultRender": "No",
                "disabled": false,
                "validations": "NA",
                "fieldType": "Text"
              }
            ]
          }
        ]
  } 
}

  export default products;





