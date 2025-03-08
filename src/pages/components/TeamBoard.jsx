// InfoBox.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import {Link} from "react-router-dom";

function TeamBoard({ image, teamName, record, color }) {
    return (
        <Box
            sx={{
                width: '90%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: color,
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
                marginBottom: '20px', // Add spacing between boxes
            }}
        >
            {/* Left Box (Image) */}
            <Box
                component={Link}
                to={`/team/${teamName.replace(/\s+/g, '')}`}
                sx={{
                    width: '20%', // Adjust size of the image box
                    height: '100%',
                    backgroundImage: `url(${image})`, // Use the passed image
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    cursor: 'pointer',
                }}
            />

            {/* Center Box (Text 1) */}
            <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold',
                    fontFamily: 'Courier New, monospace',  }}>
                    {teamName} {/* Display the title */}
                </Typography>
            </Box>

            {/* Right Box (Text 2) */}
            <Box sx={{ width: '20%' }}>
                <Typography variant="body1" sx={{ fontSize: '20px',fontFamily: 'Courier New, monospace', }}>
                    {record} {/* Display the description */}
                </Typography>
            </Box>
        </Box>
    );
}

export default TeamBoard;
