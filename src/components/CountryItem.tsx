import { Link } from "react-router-dom";
import { useFavorites, Country } from "../hooks/useFavorites";
import "../styles/CountryItem.css";

const CountryItem: React.FC<{ country: Country }> = ({ country }) => {
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    const isFavorite = favorites.some((fav) => fav.cca2 === country.cca2);

    return (
        <div className="country-item">
            <Link to={`/details/${country.cca2}`}>
                <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="country-item__flag"
                />
                <p className="country-item__name">{country.name.common}</p>
            </Link>
            <button
                className={`country-item__fav-btn ${isFavorite ? "remove" : "add"}`}
                onClick={() =>
                    isFavorite ? removeFromFavorites(country.cca2) : addToFavorites(country)
                }
            >
                {isFavorite ? "Удалить" : "Добавить"}
            </button>
        </div>
    );
};

export default CountryItem;
