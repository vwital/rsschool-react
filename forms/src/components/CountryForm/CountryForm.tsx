import React, { RefObject } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectCountries } from '../../state/slices/countrySlice';

interface CountryFormProps {
    reference?: RefObject<HTMLInputElement>;
}

const CountryForm = ({ reference }: CountryFormProps) => {
    const allCountries = useSelector(selectCountries);
    const [suggestions, setSuggestions] = useState<string[]>(allCountries);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        const currentSuggest = allCountries.filter((country) => country.toLowerCase().includes(input.toLocaleLowerCase()));
        setSuggestions(currentSuggest);
    };

    return (
        <>
            <input ref={reference} id="country" type="text" list="countries" onChange={handleChange} />
            <datalist id="countries">
                {suggestions.map((el) => (
                    <option value={el} key={el}>
                        {el}
                    </option>
                ))}
            </datalist>
        </>
    );
};

export default CountryForm;
