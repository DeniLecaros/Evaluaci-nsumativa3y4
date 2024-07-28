import { useState } from 'react';
//import React, { useState } from 'react';
import './PokemonCRUD.css';

const PokemonCRUD = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonName, setPokemonName] = useState('');
    const [error, setError] = useState('');

    // Maneja el cambio en el campo de texto
    const handleInputChange = (event) => {
        setPokemonName(event.target.value);
    };

    // Función para obtener los detalles del Pokémon
    const fetchPokemonData = async (name) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon');
            }
            const data = await response.json();
            return {
                name: data.name,
                image: data.sprites.other.dream_world.front_default,
            };
        } catch (error) {
            setError('No se encontró el Pokémon');
            return null;
        }
    };

    // Maneja el push
    const handlePush = async () => {
        if (pokemonName) {
            const pokemonData = await fetchPokemonData(pokemonName);
            if (pokemonData) {
                setPokemonList([...pokemonList, pokemonData]);
                setPokemonName('');
                setError('');
            }
        }
    };

    // Maneja el pop
    const handlePop = () => {
        setPokemonList(pokemonList.slice(0, -1));
    };

    // Maneja el unshift
    const handleUnshift = async () => {
        if (pokemonName) {
            const pokemonData = await fetchPokemonData(pokemonName);
            if (pokemonData) {
                setPokemonList([pokemonData, ...pokemonList]);
                setPokemonName('');
                setError('');
            }
        }
    };

    // Maneja el shift
    const handleShift = () => {
        setPokemonList(pokemonList.slice(1));
    };

    return (
        <div className="pokemon-crud-container">
            <h1 className="pokemon-crud-header">CRUD de Pokémon</h1>
            <h2 className="pokemon-crud-header">Pon a prueba tu conocimiento Pokémon.</h2>
            <p className="pokemon-crud-subtitle">¡Introduce los nombres de los Pokémon que conozcas y completa tu Pokédex!</p>
            <input type="text" value={pokemonName} onChange={handleInputChange} placeholder="Nombre del Pokémon" className="pokemon-crud-input" />
            <div className="pokemon-crud-buttons">
                <button onClick={handlePush}>Agregar al final (Push)</button>
                <button onClick={handlePop}>Eliminar del final (Pop)</button>
                <button onClick={handleUnshift}>Agregar al inicio (Unshift)</button>
                <button onClick={handleShift}>Eliminar del inicio (Shift)</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul className="pokemon-list">
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>
                        <div>
                            <h5>{pokemon.name}</h5>
                            {pokemon.image && <img src={pokemon.image} alt={pokemon.name} style={{ width: '100px', height: '100px' }} />}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonCRUD;
