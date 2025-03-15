import CountryItem from "./CountryItem";

interface Country {
    name: {
        common: string;
    };
    cca2: string;
    flags: {
        png: string;
    };
}

interface CountryListProps {
    countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
    return (
        <div className="country-list">
            {countries.length > 0 ? (
                countries.map((country) => (
                    <CountryItem key={country.cca2} country={country} />
                ))
            ) : (
                <p className="country-list__empty">Страны не найдены</p>
            )}
        </div>
    );
};

export default CountryList;
