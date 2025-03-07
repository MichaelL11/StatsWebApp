import React from 'react';
import {Box, Typography} from '@mui/material';
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
            <Box sx={{ display: 'flex',
                flexDirection: 'column', // Stack text vertically
                justifyContent: 'center',
                alignItems: 'flex-start', // Align text to the left
                paddingLeft: '10px',

            }}>
                <Typography variant="h4" fontWeight="bold" fontFamily='Courier New, monospace'>
                    Welcome to the PBA
                </Typography>
                <Typography variant="h6" fontFamily='Courier New, monospace'>
                    Season 7: Gen 3 OU
                </Typography>
            </Box>
        </Box>
    );
}

export default Home;
