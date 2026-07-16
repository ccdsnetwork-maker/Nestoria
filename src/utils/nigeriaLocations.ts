import locations from "@/data/nigeriaLocations.json";

export interface CityLocation {
  name: string;
  lgas: string[];
}

export interface StateLocation {
  name: string;
  cities: CityLocation[];
}

export const nigeriaLocations: StateLocation[] =
  locations.states;
