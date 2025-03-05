import React from 'react';
import { Box } from '@mui/material';
import myImage from './assets/PbaLogo2.png';

function Home() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            sx={{
                height: '100vh',  // Full viewport height
                padding: '0 5%',
            //backgroundColor: 'lightgray',} // Debugging color
            }}
        >
            {/* Image container */}
            <Box
                sx={{
                    width: '60%', // Adjust the width as needed
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={myImage}
                    alt="Logo"
                    style={{
                        width: '100%', // Make it responsive to parent container
                        height: 'auto', // Maintain aspect ratio
                        maxHeight: '80vh', // Ensure it doesn't get too tall
                    }}
                />
            </Box>

            {/* Text Content */}
            <Box sx={{ flex: 1, textAlign: 'center' }}>
                <h2></h2>
            </Box>
        </Box>
    );
}

export default Home;
