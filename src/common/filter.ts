import { ICountry } from "./types";

export interface FilterCountriesProps {
    onFilter: (filteredCountries: ICountry[]) => void;
}