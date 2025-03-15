import { useFavorites } from "../hooks/useFavorites";
import CountryItem from "../components/CountryItem";
import "../styles/FavoritesPage.css";

const FavoritesPage: React.FC = () => {
    const { favorites } = useFavorites();

    return (
        <div className="favorites-page">
            <h2>Избранные страны</h2>
            {favorites.length > 0 ? (
                <div className="favorites-list">
                    {favorites.map((country) => (
                        <CountryItem key={country.cca2} country={country} />
                    ))}
                </div>
            ) : (
                <p className="favorites-list__empty">Нет избранных стран</p>
            )}
        </div>
    );
};

export default FavoritesPage;