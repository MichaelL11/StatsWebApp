import React from 'react';
import { Box, Typography } from '@mui/material';
import ShowPokemon from './ShowPokemon.jsx';

function MaranaKabutopsPage() {
    const pokemon = [
        { name: 'Skarmory', color: '#000080' },
        { name: 'Tyranitar', color: '#000080' },
        { name: 'Latios', color: '#000080' },
        { name: 'Latias', color: '#000080' },
        { name: 'Charizard', color: '#000080' },
        { name: 'Ditto', color: '#000080' },
        { name: 'Scizor', color: '#000080' },
        { name: 'Swampert', color: '#000080' },
    ];

    return (
        <Box
            sx={{
                width: '100vw',
                minHeight: 'calc(100vh - 120px)', // Ensure it takes full space
                marginTop: '200px', // Push down to avoid header overlap
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Comic Sans MS, cursive, sans-serif',
                gap: '20px',
                padding: '20px',
            }}
        >
            {/* Header Box */}
            <Box
                sx={{
                    width: '80%',
                    backgroundColor: '#000080',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}
            >
                Marana Kabutops
            </Box>

            {/* Pokémon Grid Container Box (Wide & Less Tall) */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '90%',  // Make this wider
                    maxHeight: '400px', // Decrease height
                    overflowY: 'auto', // Allows scrolling if content exceeds maxHeight
                    gap: '20px',
                    padding: '10px',
                }}
            >
                {/* Render Pokémon ShowPokemon components */}
                {pokemon.map((mon, index) => (
                    <ShowPokemon key={index} name={mon.name} color={mon.color} />
                ))}
            </Box>
        </Box>
    );
}

export default MaranaKabutopsPage;
