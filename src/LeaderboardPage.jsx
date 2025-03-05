import React from 'react';
import { Box } from '@mui/material';
import TeamBoard from './TeamBoard.jsx';
import Athens from './assets/PBA_ICONS/Athens.png'
import Atlanta from './assets/PBA_ICONS/Atlanta.png'
import Bean from './assets/PBA_ICONS/Bean.png'
import Fiji from './assets/PBA_ICONS/Fiji.png'
import Marana from './assets/PBA_ICONS/Marana.png'
import Poki from './assets/PBA_ICONS/Poki.png'
import Saguaro from './assets/PBA_ICONS/Saguaro.png'
import Scizor from './assets/PBA_ICONS/Scizor.png'
import Shore from './assets/PBA_ICONS/Shore.png'
import Staunton from './assets/PBA_ICONS/Staunton.png'
import Tauros from './assets/PBA_ICONS/Tauros.png'
import UCF from './assets/PBA_ICONS/UCF.png'


function LeaderboardPage() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: 'calc(100vh - 120px)', // Adjust for header height
                backgroundColor: 'white',
                marginTop: '120px', // Push down to avoid header overlap
                display: 'flex',
                justifyContent: 'center', // Center leaderboards horizontally
                alignItems: 'center', // Align the leaderboard at the top
                gap: '5%', // Space between the two leaderboards
            }}
        >
            {/* Left Leaderboard */}
            <Box
                sx={{
                    width: '40%', // Adjust as needed
                    height: '70%', // Adjust as needed
                    backgroundColor: 'grey',
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
                    }}
                >
                    Indigo League
                </Box>
                <TeamBoard
                    teamName="Marana"
                    record="0-0"
                    image={Marana}
                >
                </TeamBoard>
                <TeamBoard
                    teamName="UCF"
                    record="0-0"
                    image={UCF}
                >
                </TeamBoard>
                <TeamBoard
                    teamName="Bean"
                    record="0-0"
                    image={Bean}
                >
                </TeamBoard>
                <TeamBoard
                    teamName="Marana"
                    record="0-0"
                    image={Marana}
                >
                </TeamBoard>
                <TeamBoard
                    teamName="Marana"
                    record="0-0"
                    image={Marana}
                >
                </TeamBoard>
                <TeamBoard
                    teamName="Marana"
                    record="0-0"
                    image={Marana}
                >
                </TeamBoard>
            </Box>

            {/* Right Leaderboard */}
            <Box
                sx={{
                    width: '40%', // Adjust as needed
                    height: '70%', // Adjust as needed
                    backgroundColor: 'grey',
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
                    }}
                >
                    Advanced League
                </Box>

            </Box>
        </Box>
    );
}

export default LeaderboardPage;
