import { ICountry } from "./types";

export interface FilterCountriesProps {
    region: string;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    setRegion: (region: string) => void;
    onFilter: (countries: ICountry[]) => void;
  }