import React from 'react';
import { Box } from '@mui/material';
import myImage from './assets/PbaLogo.png';

function Header() {


//HeaderMainButton text="pls work"/>

    return <header>
        <Box
            display="flex"
            justifyContent="space-between" // One box on the left, one on the right
            alignItems="center"
            height="80px"
            width="100%"
            padding="0 20px"
            sx={{ backgroundColor: '#282c34', color: 'white' }}
        >
            {/* Left Box with Background Image */}
            <Box
                sx={{
                    backgroundImage: `url(${myImage})`,  // Use the imported image for the background
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                height="220%"  // Match the header height
                width="10%"
            ></Box>

            {/* Right Box - Now centered correctly */}
            <Box
                display="flex"  // Required for centering content inside
                justifyContent="flex-start"
                alignItems="center"
                height="100%" // Match header height
                flex="1" // Allows it to take up available space
            >
                <h2>Welcome to the PBA</h2>
            </Box>
        </Box>
    </header>

} export default Header
