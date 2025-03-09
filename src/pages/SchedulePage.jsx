import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import ShowPokemon from './components/ShowPokemon.jsx';
import { useParams } from 'react-router-dom';

function SchedulePage() {
    return (<Box
        sx={{
            width: '100vw',
            height: 'calc(100vh - 120px)', // Adjust for header height
            marginTop: '120px', // Push down to avoid header overlap
            display: 'flex',
            justifyContent: 'center', // Center leaderboards horizontally
            alignItems: 'center', // Align the leaderboard at the top
            gap: '5%', // Space between the two leaderboards
            fontFamily: 'Courier New, monospace',  // Apply Courier New font
        }}
    >
        <Box
            sx={{

                display: 'flex',

                width: '80%',
                height: '80%',
                justifyContent: 'flex-start', // Center leaderboards horizontally
                alignItems: 'center', // Align the leaderboard at the top
                backgroundColor: '#1b263b',
                borderRadius: '40px', // Rounded corners
                boxShadow: '2px 2px 10px rgba(0,0,0,0.2)', // Light shadow
                flexDirection: 'column',


                overflowY: 'auto',
                /* Scrollbar Styling */
                "&::-webkit-scrollbar": {
                    width: "8px", // Makes scrollbar thinner
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(255,255,255,0.5)", // Adjust color
                    borderRadius: "10px",
                    minHeight: "50px", // Forces scrollbar thumb to be at least 50px long
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "transparent",
                    marginTop: "35px", // Adds space at top
                    marginBottom: "35px", // Adds space at bottom
                },

            }}
        >
            <Typography variant="h4" fontWeight="bold" fontFamily='Courier New, monospace' marginTop='20px'>
                PBA Schedule
            </Typography>

            <Typography variant="h6" fontWeight="bold" fontFamily='Courier New, monospace' marginTop='30px'>
                Week 1
            </Typography>

            <Box

                display="grid"
                gridTemplateColumns="repeat(3, 1fr)" // Three equal columns
                gap={2} // Space between items
                sx={{
                    fontFamily: 'Courier New, monospace',
                    justifyContent: 'center',
                }}

            >
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Marana Kabutops</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Beanboyblue Platypunks</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >UCF</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Athenian Absols</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Tuscon Tauros</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Seattle Scizor</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Staunton Sableye</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">South Tucson Tyranitars</Typography>

                <Typography fontWeight="bold" variant="h6" fontFamily="Courier New, monospace" >Fiji Furrets</Typography>
                <Typography fontWeight="bold" variant="h6" fontFamily="Courier New, monospace">vs</Typography>
                <Typography fontWeight="bold" variant="h6" fontFamily="Courier New, monospace">Atlanta Altaria</Typography>

                <Typography fontWeight="bold" variant="h6" fontFamily="Courier New, monospace" >Saguaro Sudowoodo</Typography>
                <Typography fontWeight="bold" variant="h6" fontFamily="Courier New, monospace">vs</Typography>
                <Typography fontWeight="bold" variant="h6" fontFamily="Courier New, monospace">Eastern Shore Specters</Typography>

            </Box>

            {/* Week 2 */}

            <Typography variant="h6" fontWeight="bold" fontFamily='Courier New, monospace' marginTop='30px'>
                Week 2
            </Typography>

            <Box

                display="grid"
                gridTemplateColumns="repeat(3, 1fr)" // Three equal columns
                gap={2} // Space between items
                sx={{
                    fontFamily: 'Courier New, monospace',
                    justifyContent: 'center',
                }}

            >
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Marana Kabutops</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Fiji Furrets</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >UCF</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">South Tucson Tyranitars</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Tuscon Tauros</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Eastern Shore Specters</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Staunton Sableye</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Beanboyblue Platypunks</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Fiji Furrets</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Marana Kabutops</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Seattle Scizors</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Atlanta Altaria</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Saguaro Sudowoodo</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Athenian Absols</Typography>

            </Box>

            {/* Week 3 */}

            <Typography variant="h6" fontWeight="bold" fontFamily='Courier New, monospace' marginTop='30px'>
                Week 3
            </Typography>

            <Box

                display="grid"
                gridTemplateColumns="repeat(3, 1fr)" // Three equal columns
                gap={2} // Space between items
                sx={{
                    fontFamily: 'Courier New, monospace',
                    justifyContent: 'center',
                }}

            >
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Marana Kabutops</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Seattle Scizor</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >UCF</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Beanboyblue Platypunks</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Athenian Absols</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Tuscon Tauros</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Staunton Sableye</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Eastern Shore Specters</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Fiji Furrets</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">South Tucson Tyranitars</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Saguaro Sudowoodo</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Atlanta Altaria</Typography>


            </Box>

            {/* Week 4 */}

            <Typography variant="h6" fontWeight="bold" fontFamily='Courier New, monospace' marginTop='30px'>
                Week 4
            </Typography>

            <Box

                display="grid"
                gridTemplateColumns="repeat(3, 1fr)" // Three equal columns
                gap={2} // Space between items
                sx={{
                    fontFamily: 'Courier New, monospace',
                    justifyContent: 'center',
                }}

            >
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Marana Kabutops</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Tucson Tauros</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >UCF</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Seattle Scizor</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Beanboyblue Platypunks</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Athenian Absols</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Staunton Sableye</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Saguaro Sudowoodo</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Fiji Furrets</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Eastern Shore Specters</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >South Tucson Typhlosion</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Atlanta Altaria</Typography>


            </Box>

            {/* Week 5 */}

            <Typography variant="h6" fontWeight="bold" fontFamily='Courier New, monospace' marginTop='30px'>
                Week 5
            </Typography>

            <Box

                display="grid"
                gridTemplateColumns="repeat(3, 1fr)" // Three equal columns
                gap={2} // Space between items
                sx={{
                    fontFamily: 'Courier New, monospace',
                    justifyContent: 'center',
                }}

            >
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Marana Kabutops</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Staunton Sableye</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >UCF</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Fiji Furrets</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Beanboyblue Platypunks</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">South Tucson Typhlosion</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Tucson Tauros</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Saguaro Sudowoodo</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Seattle Scizor</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Eastern Shore Specters</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Athenian Absols</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Atlanta Altaria</Typography>


            </Box>


            {/* Week 6 */}

            <Typography variant="h6" fontWeight="bold" fontFamily='Courier New, monospace' marginTop='30px'>
                Week 6
            </Typography>

            <Box

                display="grid"
                gridTemplateColumns="repeat(3, 1fr)" // Three equal columns
                gap={2} // Space between items
                sx={{
                    fontFamily: 'Courier New, monospace',
                    justifyContent: 'center',
                }}

            >
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Marana Kabutops</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Athenian Absols</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >UCF</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Tucson Tauros</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Beanboyblue Platypunks</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Seattle Scizor</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >South Tucson Typhlosion</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Atlanta Altaria</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Fiji Furrets</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Saguaro Sudowoodo</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >South Tucson Typhlosion</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Eastern Shore Specters</Typography>


            </Box>


            {/* Week 7 */}

            <Typography variant="h6" fontWeight="bold" fontFamily='Courier New, monospace' marginTop='30px'>
                Week 7
            </Typography>

            <Box

                display="grid"
                gridTemplateColumns="repeat(3, 1fr)" // Three equal columns
                gap={2} // Space between items
                sx={{
                    fontFamily: 'Courier New, monospace',
                    justifyContent: 'center',
                }}

            >
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Marana Kabutops</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">UCF</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Seattle Scizor</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Athenian Absols</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Beanboyblue Platypunks</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Tucson Tauros</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Eastern Shore Specters</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Atlanta Altaria</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Fiji Furrets</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Staunton Sableye</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >South Tucson Typhlosion</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Saguaro Sudowoodo</Typography>


            </Box>


            {/* Week 8 */}

            <Typography variant="h6" fontWeight="bold" fontFamily='Courier New, monospace' marginTop='30px'>
                Week 8
            </Typography>

            <Box

                display="grid"
                gridTemplateColumns="repeat(3, 1fr)" // Three equal columns
                gap={2} // Space between items
                sx={{
                    fontFamily: 'Courier New, monospace',
                    justifyContent: 'center',
                }}

            >
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Marana Kabutops</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">South Tucson Typhlosion</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Seattle Scizor</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Saguaro Sudowoodo</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Beanboyblue Platypunks</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Fiji Furretss</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Eastern Shore Specters</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Athenian Absols</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >UCF</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Staunton Sableye</Typography>

                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace" >Atlanta Altaria</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">vs</Typography>
                <Typography variant="h6" fontWeight="bold" fontFamily="Courier New, monospace">Tucson Tauros</Typography>


            </Box>


        </Box>
    </Box>);
}

export default SchedulePage;
