import React from 'react';
import { Box, Typography } from '@mui/material';
import ShowPokemon from './components/ShowPokemon.jsx';
import { useParams } from 'react-router-dom';

function TeamPage() {
     var pokemon = [
        { name: 'Skarmory', color: '#000080' },
        { name: 'Tyranitar', color: '#000080' },
        { name: 'Latios', color: '#000080' },
        { name: 'Latias', color: '#000080' },
        { name: 'Charizard', color: '#000080' },
        { name: 'Ditto', color: '#000080' },
        { name: 'Scizor', color: '#000080' },
        { name: 'Swampert', color: '#000080' },
    ];

    const { teamName } = useParams(); // Get teamName from the URL
    const teamColor = "#000080"; // You can map colors based on teamName if needed

    switch (teamName) {
        case "MaranaKabutops":
            pokemon = [
                { name: 'Metagross', color: '#000080' },
                { name: 'Dugtrio', color: '#000080' },
                { name: 'Swampert', color: '#000080' },
                { name: 'Magneton', color: '#000080' },
                { name: 'Starmie', color: '#000080' },
                { name: 'Jirachi', color: '#000080' },
                { name: 'Aerodactyl', color: '#000080' },
                { name: 'Jynx', color: '#000080' },
                { name: 'Heracross', color: '#000080' },
                { name: 'Misdreavus', color: '#000080' },
            ];
            break;
        case "UCF":
            pokemon = [
                { name: 'Tyranitar', color: '#000080' },
                { name: 'Snorlax', color: '#000080' },
                { name: 'Gengar', color: '#000080' },
                { name: 'Salamence', color: '#000080' },
                { name: 'Celebi', color: '#000080' },
                { name: 'Moltres', color: '#000080' },
                { name: 'Forretress', color: '#000080' },
                { name: 'Gyarados', color: '#000080' },
                { name: 'Jolteon', color: '#000080' },
                { name: 'Crobat', color: '#000080' },
            ];

            break;

        case "BeanboybluePlatypunks":
            pokemon = [
                { name: 'Skarmory', color: '#000080' },
                { name: 'Blissey', color: '#000080' },
                { name: 'Zapdos', color: '#000080' },
                { name: 'Suicune', color: '#000080' },
                { name: 'Flygon', color: '#000080' },
                { name: 'Charizard', color: '#000080' },
                { name: 'Breloom', color: '#000080' },
                { name: 'Claydol', color: '#000080' },
                { name: 'Dusclops', color: '#000080' },
                { name: 'Marowak', color: '#000080' },
            ];

            break;

        case "AthenianAbsols":
            pokemon = [
                { name: 'Blissey', color: '#000080' },
                { name: 'Zapdos', color: '#000080' },
                { name: 'Swampert', color: '#000080' },
                { name: 'Dugtrio', color: '#000080' },
                { name: 'Celebi', color: '#000080' },
                { name: 'Moltres', color: '#000080' },
                { name: 'Breloom', color: '#000080' },
                { name: 'Medicham', color: '#000080' },
                { name: 'Jirachi', color: '#000080' },
                { name: 'Absol', color: '#000080' },
            ];

            break;

        case "TusconTauros":
            pokemon = [
                { name: 'Skarmory', color: '#000080' },
                { name: 'Gengar', color: '#000080' },
                { name: 'Salamence', color: '#000080' },
                { name: 'Suicune', color: '#000080' },
                { name: 'Claydol', color: '#000080' },
                { name: 'Jolteon', color: '#000080' },
                { name: 'Starmie', color: '#000080' },
                { name: 'Alakazam', color: '#000080' },
                { name: 'Umbreon', color: '#000080' },
                { name: 'Blaziken', color: '#000080' },
            ];

            break;

        case "SeattleScizor":
            pokemon = [
                { name: 'Tyranitar', color: '#000080' },
                { name: 'Metagross', color: '#000080' },
                { name: 'Snorlax', color: '#000080' },
                { name: 'Aerodactyl', color: '#000080' },
                { name: 'Magneton', color: '#000080' },
                { name: 'Charizard', color: '#000080' },
                { name: 'Heracross', color: '#000080' },
                { name: 'Forretress', color: '#000080' },
                { name: 'Cloyster', color: '#000080' },
                { name: 'Gyarados', color: '#000080' },
            ];

            break;

        case "StauntonSableye":
            pokemon = [
                { name: 'Weezing', color: '#000080' },
                { name: 'Raikou', color: '#000080' },
                { name: 'Houndoom', color: '#000080' },
                { name: 'Medicham', color: '#000080' },
                { name: 'Regice', color: '#000080' },
                { name: 'Ludicolo', color: '#000080' },
                { name: 'Donphan', color: '#000080' },
                { name: 'Kingdra', color: '#000080' },
                { name: 'Sceptile', color: '#000080' },
                { name: 'Qwilfish', color: '#000080' },
            ];

            break;

        case "FijiFurrets":
            pokemon = [
                { name: 'Metagross', color: '#000080' },
                { name: 'Snorlax', color: '#000080' },
                { name: 'Heracross', color: '#000080' },
                { name: 'Dugtrio', color: '#000080' },
                { name: 'Furret', color: '#000080' },
                { name: 'Forretress', color: '#000080' },
                { name: 'Suicune', color: '#000080' },
                { name: 'Gardevoir', color: '#000080' },
                { name: 'Jirachi', color: '#000080' },
                { name: 'Zapdos', color: '#000080' },
            ];

            break;

        case "SouthTucsonTyphlosion":
            pokemon = [
                { name: 'Blissey', color: '#000080' },
                { name: 'Tyranitar', color: '#000080' },
                { name: 'Salamence', color: '#000080' },
                { name: 'Skarmory', color: '#000080' },
                { name: 'Claydol', color: '#000080' },
                { name: 'Milotic', color: '#000080' },
                { name: 'Celebi', color: '#000080' },
                { name: 'Swampert', color: '#000080' },
                { name: 'Gengar', color: '#000080' },
                { name: 'Starmie', color: '#000080' },
            ];

            break;



        case "AtlantaAltaria":
            pokemon = [
                { name: 'Skarmory', color: '#000080' },
                { name: 'Swampert', color: '#000080' },
                { name: 'Zapdos', color: '#000080' },
                { name: 'Suicune', color: '#000080' },
                { name: 'Claydol', color: '#000080' },
                { name: 'Charizard', color: '#000080' },
                { name: 'Celebi', color: '#000080' },
                { name: 'Gyarados', color: '#000080' },
                { name: 'Heracross', color: '#000080' },
                { name: 'Smeargle', color: '#000080' },
            ];

            break;


        case "SaguaroSudowoodo":
            pokemon = [
                { name: 'Tyranitar', color: '#000080' },
                { name: 'Blissey', color: '#000080' },
                { name: 'Aerodactyl', color: '#000080' },
                { name: 'Jirachi', color: '#000080' },
                { name: 'Snorlax', color: '#000080' },
                { name: 'Magneton', color: '#000080' },
                { name: 'Moltres', color: '#000080' },
                { name: 'Regirock', color: '#000080' },
                { name: 'Donphan', color: '#000080' },
                { name: 'Misdreavus', color: '#000080' },
            ];

            break;

        case "EasternShoreSpecters":
            pokemon = [
                { name: 'Metagross', color: '#000080' },
                { name: 'Gengar', color: '#000080' },
                { name: 'Salamence', color: '#000080' },
                { name: 'Forretress', color: '#000080' },
                { name: 'Flygon', color: '#000080' },
                { name: 'Milotic', color: '#000080' },
                { name: 'Starmie', color: '#000080' },
                { name: 'Dugtrio', color: '#000080' },
                { name: 'Cloyster', color: '#000080' },
                { name: 'Breloom', color: '#000080' },
            ];

            break;


    }


    return (
        <Box
            sx={{
                width: '100vw',
                minHeight: 'calc(100vh - 120px)', // Ensure it takes full space
                marginTop: '200px', // Push down to avoid header overlap
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Comic Sans MS, cursive, sans-serif',
                gap: '20px',
                padding: '20px',
            }}
        >
            {/* Header Box */}
            <Box
                sx={{
                    width: '80%',
                    backgroundColor: '#000080',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}
            >
                {teamName}
            </Box>

            {/* Pokémon Grid Container Box (Wide & Less Tall) */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '90%',  // Make this wider
                    maxHeight: '400px', // Decrease height
                    overflowY: 'auto', // Allows scrolling if content exceeds maxHeight
                    gap: '20px',
                    padding: '10px',
                }}
            >
                {/* Render Pokémon ShowPokemon components */}
                {pokemon.map((mon, index) => (
                    <ShowPokemon key={index} name={mon.name} color={mon.color} />
                ))}
            </Box>
        </Box>
    );
}

export default TeamPage;
