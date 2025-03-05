// InfoBox.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function TeamBoard({ image, teamName, record }) {
    return (
        <Box
            sx={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#f0f0f0',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '20px', // Add spacing between boxes
            }}
        >
            {/* Left Box (Image) */}
            <Box
                sx={{
                    width: '20%', // Adjust size of the image box
                    height: '100%',
                    backgroundImage: `url(${image})`, // Use the passed image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Center Box (Text 1) */}
            <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {teamName} {/* Display the title */}
                </Typography>
            </Box>

            {/* Right Box (Text 2) */}
            <Box sx={{ width: '20%' }}>
                <Typography variant="body1" sx={{ fontSize: '14px' }}>
                    {record} {/* Display the description */}
                </Typography>
            </Box>
        </Box>
    );
}

export default TeamBoard;
