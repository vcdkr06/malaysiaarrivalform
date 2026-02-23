// Non-commercial category codes
export const nonCommercialCodes = ["AMB", "CGO", "CHT", "DIP", "MIL", "PVT", "OTH"];

// Arrival airlines (with flight numbers)
export const airlines = [
  // Commercial airlines
  { code: "AA", name: "American Airlines" },
  { code: "B6", name: "JetBlue" },
  { code: "DL", name: "Delta Airlines" },
  { code: "UA", name: "United Airlines" },
  { code: "WN", name: "Southwest Airlines" },
  { code: "NK", name: "Spirit Airlines" },
  { code: "AC", name: "Air Canada" },
  { code: "WS", name: "WestJet" },
  { code: "CM", name: "Copa Airlines" },
  { code: "AV", name: "Avianca" },
  { code: "P5", name: "Wingo" },
  { code: "LA", name: "LATAM Airlines" },
  { code: "KL", name: "KLM" },
  { code: "OR", name: "TUI Fly NL" },
  { code: "PY", name: "Surinam Airways" },
  { code: "WM", name: "Winair" },
  { code: "3R", name: "Divi Divi Air" },
  { code: "7Z", name: "EZ Air" },
  { code: "G3", name: "GOL" },
  { code: "AG", name: "Aruba Airlines" },
  // Non-commercial categories
  { code: "AMB", name: "Ambulance" },
  { code: "CGO", name: "Cargo" },
  { code: "CHT", name: "Charter" },
  { code: "DIP", name: "Diplomatic" },
  { code: "MIL", name: "Military" },
  { code: "PVT", name: "Private" },
  { code: "OTH", name: "Others" },
];

// Departure airlines
export const departureAirlines = [
  // Commercial airlines
  { code: "AA", name: "American Airlines" },
  { code: "AC", name: "Air Canada" },
  { code: "AG", name: "Aruba Airlines" },
  { code: "AR", name: "Aerolineas Argentinas" },
  { code: "AV", name: "Avianca" },
  { code: "B6", name: "JetBlue" },
  { code: "CM", name: "Copa Airlines" },
  { code: "DL", name: "Delta Airlines" },
  { code: "3R", name: "Divi Divi Air" },
  { code: "7Z", name: "EZ Air" },
  { code: "KL", name: "KLM" },
  { code: "LA", name: "LATAM Airlines" },
  { code: "NK", name: "Spirit Airlines" },
  { code: "OR", name: "TUI Fly NL" },
  { code: "P5", name: "Wingo" },
  { code: "UA", name: "United Airlines" },
  { code: "WM", name: "Winair" },
  { code: "WN", name: "Southwest Airlines" },
  { code: "WS", name: "WestJet Airlines" },
  // Non-commercial categories
  { code: "AMB", name: "Ambulance" },
  { code: "CGO", name: "Cargo" },
  { code: "CHT", name: "Charter" },
  { code: "DIP", name: "Diplomatic" },
  { code: "MIL", name: "Military" },
  { code: "PVT", name: "Private" },
  { code: "OTH", name: "Others" },
];

// Flight numbers for commercial airlines (arrival)
export const airlineFlightNumbers: Record<string, string[]> = {
  "AA": ["870", "874", "1028", "1257", "1346", "2217"],
  "B6": ["273", "373", "473", "573", "757", "1057", "1457", "1611", "2219", "6557"],
  "DL": ["582", "613", "1751", "1762", "1868", "1880"],
  "UA": ["1035", "1040", "1042", "1203", "1674", "1804"],
  "WN": ["1443", "1804", "8816", "8817"],
  "NK": ["885"],
  "AC": ["1826"],
  "WS": ["2196", "2750"],
  "CM": ["348", "768", "886"],
  "AV": ["232", "242"],
  "P5": ["7004", "7452", "7456"],
  "LA": ["2440", "4968"],
  "KL": ["765", "767", "779"],
  "OR": ["361"],
  "PY": ["361"],
  "WM": ["805"],
  "3R": ["260", "262", "268", "274", "276", "280", "284", "286", "292"],
  "7Z": ["670", "672", "674", "676", "680", "683"],
  "G3": ["7716"],
  "AG": ["902"],
};

// Flight numbers for departure
export const departureFlightNumbers: Record<string, string[]> = {
  "AA": ["030", "870", "874", "1028", "1747", "2525"],
  "B6": ["74", "158", "474", "1058", "1612", "1858", "2420", "6074", "6158", "6474", "6558", "6574"],
  "DL": ["581", "612", "1752", "1761", "1799", "1839", "9897"],
  "UA": ["1032", "1039", "1043", "1171", "1648", "1650"],
  "WN": ["1641", "8817"],
  "NK": ["886"],
  "AC": ["1827"],
  "WS": ["2197", "2751"],
  "CM": ["349", "767", "877"],
  "AV": ["233", "243"],
  "P5": ["7005", "7453", "7457"],
  "LA": ["2441", "4969"],
  "KL": ["765", "767"],
  "OR": ["361"],
  "WM": ["806"],
  "3R": ["261", "263", "269", "275", "281", "285", "287", "293", "969"],
  "7Z": ["674", "677", "683"],
  "AR": ["1395"],
};
