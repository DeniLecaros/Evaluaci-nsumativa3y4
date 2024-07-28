import { useEffect, useState } from 'react';
import { Card } from '../../ui/components/Card';

const JugadorsPage = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Obtener la lista de Pokémon
        fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
            .then((response) => response.json())
            .then((data) => {
                const fetches = data.results.map((pokemon) =>
                    fetch(pokemon.url)
                        .then((response) => response.json())
                        .then((details) => ({
                            name: details.name,
                            image: details.sprites.other.dream_world.front_default,
                            description: '', // Esto se completará más adelante
                        }))
                );

                Promise.all(fetches).then((pokemonDetails) => {
                    setPokemonList(pokemonDetails);
                    setLoading(false);
                });
            })
            .catch((error) => {
                console.error('Error al obtener la lista de Pokémon:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        // Obtener las descripciones de cada Pokémon
        const fetchDescriptions = pokemonList.map((pokemon) =>
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
                .then((response) => response.json())
                .then((data) => {
                    const enDescription = data.flavor_text_entries.find((entry) => entry.language.name === 'es');
                    return {
                        ...pokemon,
                        description: enDescription ? enDescription.flavor_text : 'Descripción no disponible.',
                    };
                })
                .catch((error) => {
                    console.error(`Error al obtener la descripción de ${pokemon.name}:`, error);
                    return { ...pokemon, description: 'Error al cargar la descripción.' };
                })
        );

        Promise.all(fetchDescriptions).then((updatedPokemonList) => setPokemonList(updatedPokemonList));
    }, [pokemonList]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container">
            <div className="row">
                {pokemonList.map((pokemon) => (
                    <Card
                        key={pokemon.name}
                        titulo={pokemon.name}
                        subtitulo={pokemon.description}
                        img={pokemon.image}
                        onVerMas={() => console.log(`Ver más de ${pokemon.name}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default JugadorsPage;
