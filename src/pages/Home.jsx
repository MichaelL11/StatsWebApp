import React from 'react';
import { Box, Typography } from '@mui/material';
import myImage from '../assets/PbaLogo2.png';

function Home() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            sx={{
                height: '100vh', // Full viewport height
                padding: '0 5%',
            }}
        >
            {/* Image container */}
            <Box
                sx={{
                    width: '50%', // Adjusted for better balance
                    maxWidth: '40rem', // Prevents image from getting too wide
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={myImage}
                    alt="Logo"
                    style={{
                        width: '100%', // Responsive to parent container
                        height: 'auto', // Maintain aspect ratio
                        maxHeight: '80vh', // Prevents excessive height
                    }}
                />
            </Box>

            {/* Text Content */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack text vertically
                    justifyContent: 'center',
                    alignItems: 'flex-start', // Align text to the left
                    paddingLeft: '2rem', // Adjusted for better spacing
                    flex: 1, // Makes text take up available space
                    maxWidth: '30rem', // Prevents text from stretching too wide
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    fontFamily="Courier New, monospace"
                    sx={{ fontSize: '2rem' }} // Responsive text size
                >
                    Welcome to the PBA
                </Typography>
                <Typography
                    variant="h6"
                    fontFamily="Courier New, monospace"
                    sx={{ fontSize: '1.5rem' }}
                >
                    Season 7: Gen 3 OU
                </Typography>
            </Box>
        </Box>
    );
}

export default Home;
