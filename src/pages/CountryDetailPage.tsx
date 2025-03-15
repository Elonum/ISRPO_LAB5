import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CountryDetailPage.css';

interface Country {
    name: {
        common: string;
    };
    capital: string[];
    region: string;
    population: number;
    flags: {
        png: string;
    };
}

const CountryDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [country, setCountry] = useState<Country | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountryDetails = async () => {
            try {
                const response = await axios.get(
                    `https://restcountries.com/v3.1/alpha/${id}`
                );
                setCountry(response.data[0]);
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
            }
        };
        if (id) {
            fetchCountryDetails();
        }
    }, [id]);

    if (!country) return <p>Загрузка...</p>;

    return (
        <div className="country-detail">
            <h2 className="country-detail__title">{country.name.common}</h2>
            <img
                className="country-detail__flag"
                src={country.flags.png}
                alt={country.name.common}
            />
            <p className="country-detail__info">Столица: {country.capital}</p>
            <p className="country-detail__info">Регион: {country.region}</p>
            <p className="country-detail__info">Население: {country.population}</p>
            <button className="back-button" onClick={() => navigate(-1)}>
                Назад
            </button>
        </div>
    );
};

export default CountryDetailPage;