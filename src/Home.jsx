import React from 'react';
import { Box, Button } from '@mui/material';
import myImage from './assets/PbaLogo2.png';
import { Link } from "react-router-dom";

function Home() {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height="100%" // Header height
            width="100%"
            padding="0 20px"
        >
            <Box
                sx={{
                    display: 'block',
                    width: '100%', // Set the width of the logo box
                    height: '100%', // Ensure it fills the full height of the header
                    backgroundImage: `url(${myImage})`, // Background image
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', // Prevent repetition of the image
                }}
            />
            {/* Content of the homepage */}
            <Box>
                Poki Sucks
            </Box>
        </Box>
    );
}

export default Home;
