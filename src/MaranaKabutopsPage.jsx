// InfoBox.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import ShowPokemon from './ShowPokemon.jsx';

function MaranaKabutopsPage() {

    const pokemon = [
        { name: 'Skarmory', color: '#000080' }, // Gold
        { name: 'Tyranitar', color: '#000080' }, // Orange Red
        { name: 'Latios', color: '#000080' }, // Dodger Blue
        { name: 'Latias', color: '#000080' }, // Lime Green
        { name: 'Charizard', color: '#000080' }, // Blue Violet
        { name: 'Ditto', color: '#000080' }, // Hot Pink
    ];


    return (        <Box
        sx={{
            width: '100vw',
            height: 'calc(100vh - 120px)', // Adjust for header height
            marginTop: '120px', // Push down to avoid header overlap
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Comic Sans MS, cursive, sans-serif',

        }}
    >Marana Kabutops
        {
            /* Content goes here */}

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                width: '80%',
                gap: '20px',
            }}
        >
            {/* Render multiple components */}
            {pokemon.map((mon, index) => (
                <ShowPokemon key={index} name={mon.name} color={mon.color} />
            ))}
        </Box>
    </Box>);
}

export default MaranaKabutopsPage;
