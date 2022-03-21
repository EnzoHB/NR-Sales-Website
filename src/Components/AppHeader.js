import React from 'react';
import { Paper, Box, IconButton, Typography, Button } from '@mui/material';
import { Settings, AccountCircle } from '@mui/icons-material';

// profile
// onSettingsClick
// onAccountClick
// onProfitCLick
// onStoresClick

function AppHeader({

    profile, 
    onSettingsClick = () => {}, 
    onAccountClick = () => {}, 
    onProfitsClick = () => {}, 
    onStoresClick = () => {} 

}) {

    return (
        <Paper 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '35%',
                width: '100%',
                padding: '10px',
                background: 'linear-gradient(107.4deg, #0100EC 0%, #F836F4 100.01%)',
                borderRadius: `0 0 35px 35px`,
                boxSizing: 'border-box',
            }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <IconButton onClick={onSettingsClick}>
                        <Settings 
                            sx={{
                                color: 'white'
                            }}
                        />
                    </IconButton>
                    <IconButton
                        onClick={onAccountClick}
                    >
                        <AccountCircle 
                            sx={{
                                color: 'white'
                            }}
                        />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexGrow: 1.5,
                        color: 'white',
                    }}
                >
                    <Typography 
                        sx={{
                            fontSize: 40,
                            fontWeight: 600,
                        }}
                    >
                        {profile.balance}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 600,
                        }}
                    >
                        Total Balance
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <Button 
                        onClick={onProfitsClick}
                        sx={{
                            color: 'white',
                        }}
                    >
                        Profits
                    </Button>
                    <Button
                        onClick={onStoresClick}
                        sx={{
                            color: 'white'
                        }}
                    >
                        Stores
                    </Button>
                </Box>
            </Paper>
    );
};

export default AppHeader;