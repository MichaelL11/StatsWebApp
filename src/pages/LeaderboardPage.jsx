import React from 'react';
import { Box, Typography } from '@mui/material';
import TeamBoard from './components/TeamBoard.jsx';
import Athens from '../assets/PBA_ICONS/Athens.png';
import Atlanta from '../assets/PBA_ICONS/Atlanta.png';
import Bean from '../assets/PBA_ICONS/Bean.png';
import Fiji from '../assets/PBA_ICONS/Fiji.png';
import Marana from '../assets/PBA_ICONS/Marana.png';
import Poki from '../assets/PBA_ICONS/Poki.png';
import Saguaro from '../assets/PBA_ICONS/Saguaro.png';
import Scizor from '../assets/PBA_ICONS/Scizor.png';
import Shore from '../assets/PBA_ICONS/Shore.png';
import Staunton from '../assets/PBA_ICONS/Staunton.png';
import Tauros from '../assets/PBA_ICONS/Tauros.png';
import UCF from '../assets/PBA_ICONS/UCF.png';
import IndigoImage from '../assets/Indigo_League_Logo.png';
import AdvanceImage from '../assets/Advanced_League_Logo.png';

function LeaderboardPage() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: 'calc(100vh - 120px)', // Adjust for header height
                backgroundColor: '#1b263b',
                marginTop: '120px', // Push down to avoid header overlap
                display: 'flex',
                justifyContent: 'center', // Center leaderboards horizontally
                alignItems: 'center', // Align the leaderboard at the top
                gap: '5%', // Space between the two leaderboards
                fontFamily: 'Courier New, monospace',  // Apply Courier New font
            }}
        >
            {/* Left Leaderboard */}
            <Box
                sx={{
                    width: '40vw', // Relative width based on viewport width
                    height: '70vh', // Relative height based on viewport height
                    backgroundColor: '#c1c6fc',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start', // Keep text at the top
                    alignItems: 'center', // Center text horizontally
                    borderRadius: '10px', // Rounded corners
                    boxShadow: '2px 2px 10px rgba(0,0,0,0.2)', // Light shadow
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '30%',
                        display: 'flex',
                        justifyContent: 'center', // Center text horizontally
                        alignItems: 'center', // Center text vertically (in its box)
                        backgroundImage: `url(${IndigoImage})`, // Use the passed image
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <TeamBoard
                    teamName="Marana Kabutops"
                    record="0-0"
                    image={Marana}
                />
                <TeamBoard
                    teamName="UCF"
                    record="0-0"
                    image={UCF}
                />
                <TeamBoard
                    teamName="Beanboyblue Platypunks"
                    record="0-0"
                    image={Bean}
                />
                <TeamBoard
                    teamName="Athenian Absols"
                    record="0-0"
                    image={Athens}
                />
                <TeamBoard
                    teamName="Tuscon Tauros"
                    record="0-0"
                    image={Tauros}
                />
                <TeamBoard
                    teamName="Seattle Scizor"
                    record="0-0"
                    image={Scizor}
                />
            </Box>

            {/* Right Leaderboard */}
            <Box
                sx={{
                    width: '40vw', // Relative width based on viewport width
                    height: '70vh', // Relative height based on viewport height
                    backgroundColor: '#faa307',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start', // Keep text at the top
                    alignItems: 'center', // Center text horizontally
                    borderRadius: '10px', // Rounded corners
                    boxShadow: '2px 2px 10px rgba(0,0,0,0.2)', // Light shadow
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '30%',
                        display: 'flex',
                        justifyContent: 'center', // Center text horizontally
                        alignItems: 'center', // Center text vertically (in its box)
                        backgroundImage: `url(${AdvanceImage})`, // Use the passed image
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <TeamBoard
                    teamName="Staunton Sableye"
                    record="0-0"
                    image={Staunton}
                />
                <TeamBoard
                    teamName="Fiji Furrets"
                    record="0-0"
                    image={Fiji}
                />
                <TeamBoard
                    teamName="South Tucson Typhlosion"
                    record="0-0"
                    image={Poki}
                />
                <TeamBoard
                    teamName="Atlanta Altaria"
                    record="0-0"
                    image={Atlanta}
                />
                <TeamBoard
                    teamName="Saguaro Sudowoodo"
                    record="0-0"
                    image={Saguaro}
                />
                <TeamBoard
                    teamName="Eastern Shore Specters"
                    record="0-0"
                    image={Shore}
                />
            </Box>
        </Box>
    );
}

export default LeaderboardPage;
