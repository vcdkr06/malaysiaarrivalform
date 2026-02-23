export const malaysiaLocations = [
  "Kuala Lumpur",
  "Petaling Jaya",
  "George Town",
  "Johor Bahru",
  "Ipoh",
  "Shah Alam",
  "Kota Kinabalu",
  "Kuching",
  "Melaka",
  "Langkawi",
  "Penang",
  "Cameron Highlands",
  "Genting Highlands",
  "Putrajaya",
  "Subang Jaya",
  "Cyberjaya"
];

export const getLocationsForMalaysia = () => {
  return malaysiaLocations.map(location => ({
    value: location.toLowerCase().replace(/\s+/g, '-'),
    label: location
  }));
};
