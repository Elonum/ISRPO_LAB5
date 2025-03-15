import { useState, useEffect } from "react";

export interface Country {
    name: {
        common: string;
    };
    cca2: string;
    flags: {
        png: string;
    };
    capital?: string[];
    region?: string;
    population?: number;
}

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Country[]>([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem("favorites");
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    const addToFavorites = (country: Country) => {
        // Добавляем страну только если её ещё нет в избранном
        if (!favorites.some((fav) => fav.cca2 === country.cca2)) {
            const updatedFavorites = [...favorites, country];
            setFavorites(updatedFavorites);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        }
    };

    const removeFromFavorites = (cca2: string) => {
        const updatedFavorites = favorites.filter((fav) => fav.cca2 !== cca2);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return { favorites, addToFavorites, removeFromFavorites };
};
