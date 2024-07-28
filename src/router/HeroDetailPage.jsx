import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './HeroDetailPage.css';

const HeroDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnimeData = async () => {
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
                const data = await response.json();

                if (data.data) {
                    setAnime(data.data);
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: 'El anime no existe.',
                        icon: 'error',
                        showCancelButton: true,
                        confirmButtonText: 'Ir a Animes',
                        cancelButtonText: 'Ir a Comics',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/animes');
                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                            navigate('/comics');
                        }
                    });
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching anime data:', error);
                setLoading(false);
            }
        };

        fetchAnimeData();
    }, [id, navigate]);

    if (loading) return <p>Cargando...</p>;
    if (!anime) return null;

    return (
        <div className="detail-container">
            <div className="detail-header">
                <h2>{anime.title}</h2>
            </div>
            <div className="detail-image-container">
                <img className="detail-image" src={anime.images.jpg.image_url} alt={anime.title} />
            </div>
            <div className="detail-info">
                <p>
                    <strong>Género:</strong> {anime.genres.map((genre) => genre.name).join(', ')}
                </p>
                <p>
                    <strong>Episodios:</strong> {anime.episodes}
                </p>
                <p>
                    <strong>Fecha de lanzamiento:</strong> {anime.aired.string}
                </p>
                <p>
                    <strong>Descripción:</strong> {anime.synopsis}
                </p>
            </div>
            <div className="back-button-container">
                <button onClick={() => navigate(-1)} className="back-button">
                    Volver
                </button>
            </div>
        </div>
    );
};

export default HeroDetailPage;
