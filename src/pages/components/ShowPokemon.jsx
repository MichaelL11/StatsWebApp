import React from 'react';
import { Box, Typography } from '@mui/material';

function ShowPokemon({ name, color }) {
    const formattedName = name.toLowerCase(); // Convert to lowercase for the image URL

    return (
        <Box
            sx={{
                width: '30%', // Adjust so multiple fit per row
                height: '150px',
                backgroundColor: color,
                display: 'flex', // Row layout
                alignItems: 'center',
                borderRadius: '10px',
                boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
                margin: '10px',
                padding: '10px',
            }}
        >
            {/* Image on the Left */}
            <Box
                sx={{
                    width: '40%', // Adjust image width
                    height: '100%', // Match parent height
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={`https://img.pokemondb.net/sprites/ruby-sapphire/normal/${formattedName}.png`}
                    alt={name}
                    style={{
                        maxWidth: '100%', // Keep image within its box
                        maxHeight: '100%', // Keep image within its box
                        objectFit: 'contain', // Ensure full image is visible
                    }}
                />
            </Box>

            {/* Text on the Right */}
            <Box
                sx={{
                    width: '60%', // Remaining space for text
                    display: 'flex',
                    flexDirection: 'column', // Stack text vertically
                    justifyContent: 'center',
                    alignItems: 'flex-start', // Align text to the left
                    paddingLeft: '10px',
                }}
            >
                {/* Name (Bold & Bigger) */}
                <Typography variant="h6" fontWeight="bold">
                    {name}
                </Typography>

                {/* Stats */}
                <Typography variant="body1">
                    <strong>KO's:</strong> 0
                </Typography>
                <Typography variant="body1">
                    <strong>Deaths:</strong> 0
                </Typography>
            </Box>
        </Box>
    );
}

export default ShowPokemon;
