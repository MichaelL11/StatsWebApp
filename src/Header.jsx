import React from 'react';
import { Box, Button } from '@mui/material';
import myImage from './assets/PbaLogo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="120px" // Header height
                width="100%"
                padding="0 20px"
                sx={{ backgroundColor: '#6c85bd', color: 'white' }}
            >
                {/* Left Box with Background Image */}
                <Box
                    component={Link}
                    to="/"
                    sx={{
                        display: 'block',
                        width: '10%', // Set the width of the logo box
                        height: '100%', // Ensure it fills the full height of the header
                        backgroundImage: `url(${myImage})`, // Background image
                        backgroundSize: 'contain', // Make the image fit without cropping
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat', // Prevent repetition of the image
                        cursor: 'pointer',
                        backgroundColor: '#6c85bd', // Set the background color to match the header
                    }}
                />

                {/* Right Box - Now centered correctly */}
                <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    height="100%" // Full height of the header
                    flex="1"
                >
                    <h2></h2>
                </Box>

                {/* Button Box */}
                <Box sx={{display: 'flex',  // Make sure buttons are inside a flex container
                    gap: '10px',      // Add spacing between buttons
                    mr: '65%' }}>
                    <Button
                        component={Link}
                        to="/leader"
                        variant="contained"
                        color="primary"
                        sx={{
                            outline: 'none', // Remove focus outline
                            border: 'none', // Remove border
                            backgroundColor: '#f2cdd5',
                            color: 'black',
                            fontFamily: 'Comic Sans MS, cursive, sans-serif',
                        }}
                    >
                        Team Standings
                    </Button>
                    <Button
                        component={Link}
                        to="/schedule"
                        variant="contained"
                        color="primary"
                        sx={{
                            outline: 'none', // Remove focus outline
                            border: 'none', // Remove border
                            backgroundColor: '#f2cdd5',
                            color: 'black',
                            fontFamily: 'Comic Sans MS, cursive, sans-serif',
                        }}
                    >
                        Schedule
                    </Button>
                    <Button
                        component={Link}
                        to="/pokemon"
                        variant="contained"
                        color="primary"
                        sx={{
                            outline: 'none', // Remove focus outline
                            border: 'none', // Remove border
                            backgroundColor: '#f2cdd5',
                            color: 'black',
                            fontFamily: 'Comic Sans MS, cursive, sans-serif',
                        }}
                    >
                        Stat Leaders
                    </Button>
                </Box>

            </Box>
        </header>
    );
}

export default Header;
