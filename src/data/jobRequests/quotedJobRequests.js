// src/data/quotedJobRequests.js

export const quotedJobRequests = [
  {
    id: 3,
    homeownerName: "Bob Smith",
    postCode: "NE2 2HZ",
    jobDate: "2025-05-05",
    jobTime: "10:00",
    propertyType: "Apartment",
    numberOfFloors: 1,
    numberOfWindows: 5,
    windowTypes: "bay",
    additionalInfo: "Please use the side entrance.",
    quote: 120,  // The quoted price from the cleaner
    status: "Pending",  // Status could be "Pending", "Accepted", or "Rejected"
    photos: []
  },
  {
    id: 4,
    homeownerName: "Emily Davis",
    postCode: "NE2 3CD",
    jobDate: "2025-05-06",
    jobTime: "14:00",
    propertyType: "House",
    numberOfFloors: 2,
    numberOfWindows: 12,
    windowTypes: "standard",
    additionalInfo: "Please be careful with the landscaping.",
    quote: 150,
    status: "Pending",
    photos: []
  }
];
