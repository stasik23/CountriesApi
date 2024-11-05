import { ICountry } from "../common/types";

export const fetchCountries = async (): Promise<ICountry[]> => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching countries:", error);
        return [];
    }
};

export const fetchCountryByName = async (countryName: string): Promise<ICountry | undefined> => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();
        return data.find((c: ICountry) => 
            c.name.common.toLowerCase() === countryName?.toLowerCase()
        );
    } catch (error) {
        console.error("Error fetching country:", error);
        return undefined;
    }
};
