export const arubaLocations = [
  "Oranjestad",
  "San Nicolas",
  "Noord",
  "Santa Cruz",
  "Savaneta",
  "Paradera",
  "Palm Beach",
  "Eagle Beach",
  "Malmok",
  "Pos Chiquito",
  "Tanki Leendert",
  "Dakota",
  "Piedra Plat",
  "Bushiribana",
  "Arikok",
  "Boca Grandi"
];

export const getLocationsForAruba = () => {
  return arubaLocations.map(location => ({
    value: location.toLowerCase().replace(/\s+/g, '-'),
    label: location
  }));
};
