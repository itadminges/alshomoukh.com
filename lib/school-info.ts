/**
 * Single Source of Truth for Al Shomoukh International Private School
 * Official contact information, address details, hours, and structured data.
 */

export const SCHOOL_INFO = {
  name: "Al Shomoukh International Private School",
  shortName: "Al Shomoukh International Private School",
  establishedYear: 2015,
  
  address: {
    street: "Road 106, Way 208, Building 323",
    area: "Hay Al Hail, Al Jadeed Al Hail South",
    postal: "P.O. Box 1756, PC: 111, Airport Heights",
    city: "Muscat",
    country: "Sultanate of Oman",
    fullSingleLine: "Road 106, Way 208, Building 323, Hay Al Hail, Al Jadeed Al Hail South, P.O. Box 1756, PC: 111, Airport Heights, Muscat, Sultanate of Oman",
    lines: [
      "Road 106, Way 208, Building 323",
      "Hay Al Hail, Al Jadeed Al Hail South",
      "P.O. Box 1756, PC: 111, Airport Heights",
      "Muscat, Sultanate of Oman"
    ]
  },

  contact: {
    phone: "+968 24 284771",
    phoneTel: "tel:+96824284771",
    phoneRaw: "+96824284771",
    emailAdmissions: "admission@alshomoukh.com",
    emailAdmissionsMailto: "mailto:admission@alshomoukh.com",
    emailGeneral: "info@alshomoukh.com",
    emailGeneralMailto: "mailto:info@alshomoukh.com",
    whatsappUrl: "https://wa.me/96824284771",
  },

  hours: {
    days: "Sunday – Thursday",
    time: "7:30 AM – 3:30 PM",
    full: "Sunday – Thursday: 7:30 AM – 3:30 PM",
  },

  social: {
    facebook: "https://www.facebook.com/sismuscat/",
    instagram: "https://www.instagram.com/alshomoukhschool/",
    twitter: "https://x.com/ShomoukhSchool",
    linkedin: "https://www.linkedin.com/in/al-shomoukh-international-school-953aa0171/",
    youtube: "https://www.youtube.com/channel/UC7ftr6kS9rUbVWTL-3f_NOw",
    parentPortal: "https://portal.alshomoukh.com/",
  }
} as const;

export const SCHOOL_SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": SCHOOL_INFO.name,
  "alternateName": "Al Shomoukh International Private School",
  "url": "https://alshomoukh.com",
  "logo": "https://alshomoukh.com/SIS%20Logo-01.png",
  "telephone": SCHOOL_INFO.contact.phone,
  "email": SCHOOL_INFO.contact.emailAdmissions,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Road 106, Way 208, Building 323, Hay Al Hail, Al Jadeed Al Hail South",
    "postOfficeBoxNumber": "1756",
    "postalCode": "111",
    "addressLocality": "Airport Heights, Muscat",
    "addressCountry": "OM"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    "opens": "07:30",
    "closes": "15:30"
  },
  "sameAs": [
    SCHOOL_INFO.social.facebook,
    SCHOOL_INFO.social.instagram,
    SCHOOL_INFO.social.twitter,
    SCHOOL_INFO.social.linkedin,
    SCHOOL_INFO.social.youtube
  ]
};
