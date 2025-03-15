import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesPage from "../pages/CountriesPage";
import CountryDetailPage from "../pages/CountryDetailPage";
import FavoritesPage from "../pages/FavoritesPage";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<CountriesPage />} />
                    <Route path="/details/:id" element={<CountryDetailPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
