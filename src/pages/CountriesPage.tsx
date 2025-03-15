import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from '../components/CountryList';
import '../styles/CountriesPage.css';


interface Country {
    name: {
        common: string;
    };
    region: string;
    cca2: string; // Двухбуквенный код страны
    flags: {
        png: string;
        svg: string;
    }
}

const CountriesPage = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        axios.get<Country[]>('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => console.error('Ошибка загрузки данных:', error));
    }, []);

    const filteredCountries = countries.filter((country) => {
        const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
        const matchesRegion = region ? country.region === region : true;
        return matchesSearch && matchesRegion;
    });

    return (
        <div className="countries-page">
            <h1>Список стран</h1>
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Поиск страны..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="region-filter"
                >
                    <option value="">Все регионы</option>
                    <option value="Africa">Африка</option>
                    <option value="Americas">Америка</option>
                    <option value="Asia">Азия</option>
                    <option value="Europe">Европа</option>
                    <option value="Oceania">Океания</option>
                </select>
            </div>
            <CountryList countries={filteredCountries} />
        </div>
    );
};

export default CountriesPage;
