// Previous code remains the same, adding new compliance features:

interface RegulatoryConfig {
  US: {
    // Existing US config...
    regulatoryUpdates: {
      lastUpdate: Date;
      nextReview: Date;
      regBICompliance: boolean;
      form13FRequired: boolean;
    };
    documentationRequirements: {
      riskDisclosure: boolean;
      investmentPolicy: boolean;
      suitabilityAssessment: boolean;
    };
  };
  UK: {
    // Existing UK config...
    regulatoryUpdates: {
      lastUpdate: Date;
      nextReview: Date;
      consumerDutyCompliance: boolean;
      smcrCompliance: boolean;
    };
    documentationRequirements: {
      riskDisclosure: boolean;
      investmentPolicy: boolean;
      suitabilityAssessment: boolean;
      mifidDisclosure: boolean;
    };
  };
}

// Add to existing useRegulatoryStore:
interface RegulatoryState {
  // Existing state...
  checkCompliance: () => {
    isCompliant: boolean;
    issues: string[];
  };
  generateDisclosures: (jurisdiction: 'US' | 'UK') => string[];
  validateSuitability: (userProfile: any, recommendation: any) => boolean;
}