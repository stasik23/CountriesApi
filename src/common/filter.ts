import { ICountry } from "./types";

export interface FilterCountriesProps {
    onFilter: (filteredCountries: ICountry[]) => void;
    region: string;
    setRegion: (region: string) => void;
}