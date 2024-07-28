import { useEffect, useState } from 'react';
import { Card } from '../../ui/components/Card';

const SuperheroesPage = () => {
    const [heroList, setHeroList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch('/public/heroes.json'); // Ajusta la ruta según tu estructura
                const data = await response.json();
                const heroDetails = data.map((hero) => ({
                    ...hero,
                    descripcion: truncateText(hero.descripcion, 100),
                }));
                setHeroList(heroDetails);
                localStorage.setItem('heroList', JSON.stringify(heroDetails)); // Guardar datos en localStorage
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener la lista de héroes:', error);
                setLoading(false);
            }
        };

        fetchHeroData();
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
                {heroList.map((hero) => (
                    <Card
                        key={hero.id}
                        titulo={hero.nombre}
                        subtitulo={hero.descripcion}
                        img={hero.foto}
                        onVerMas={() => console.log(`Ver más de ${hero.nombre}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SuperheroesPage;
