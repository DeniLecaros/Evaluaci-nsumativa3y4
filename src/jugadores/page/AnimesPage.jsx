import { useEffect, useState } from 'react';
import { Card } from '../../ui/components/Card';

const AnimesPage = () => {
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = 'https://api.jikan.moe/v4/anime?page=1&limit=24';

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const animeDetails = data.data.map((anime) => ({
                    id: anime.mal_id,
                    name: anime.title,
                    image: anime.images.jpg.large_image_url,
                    description: anime.synopsis ? truncateText(anime.synopsis, 100) : 'Descripción no disponible.',
                }));
                setAnimeList(animeDetails);
                localStorage.setItem('animeList', JSON.stringify(animeDetails)); // Guardar datos en localStorage
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al obtener la lista de animes:', error);
                setLoading(false);
            });
    }, []);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container">
            <div className="row">
                {animeList.map((anime) => (
                    <Card key={anime.id} id={anime.id} titulo={anime.name} subtitulo={anime.description} img={anime.image} />
                ))}
            </div>
        </div>
    );
};

export default AnimesPage;
