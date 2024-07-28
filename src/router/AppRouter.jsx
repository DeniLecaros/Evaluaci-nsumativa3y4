import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../auth/page/LoginPage';
import HomePage from '../jugadores/page/HomePage';
import Contacto from '../jugadores/page/Contacto';
import AnimesPage from '../jugadores/page/AnimesPage';
import HeroDetailPage from './HeroDetailPage';
import ComicPage from '../jugadores/page/ComicPage';
import { Footer } from '../ui/components/Footer';
import { Navbar } from '../ui/components/Navbar';
import PokemonCRUD from '../ui/components/PokemonCRUD'; // Ajusta la ruta según tu estructura

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/animes" element={<AnimesPage />} />
                <Route path="/animes/:id" element={<HeroDetailPage />} />
                <Route path="/comics" element={<ComicPage />} />
                <Route path="/pokemon-crud" element={<PokemonCRUD />} />
            </Routes>
            <Footer />
        </>
    );
};
