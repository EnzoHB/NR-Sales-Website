import React from 'react'
import Entry from './Entry';
import EntriesDisplay from './EntriesDisplay';
import { ledger } from '../App/ledger.js';
import { Paper, Box, IconButton, Typography, Divider, Button } from '@mui/material';
import { createTheme } from '@mui/system';
import { AccountCircle, Settings } from '@mui/icons-material';

function Screen() {
    const focus = 'Caixa';
    const width = 315;
    const height = 667;
    const padding = 3;  
    const defaultItems = 4;

    // ---------- Items ------------ //

    const profile = ledger.profile.get(focus);

    return (
        <Paper
            elevation={2}
            sx={{
                width: `${width}px`,
                height:`${height}px`,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Paper 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '35%',
                    width: '100%',
                    padding: '10px',
                    background: 'linear-gradient(107.4deg, #0100EC 0%, #F836F4 100.01%)',
                    borderRadius: '0 0 50px 50px',
                    boxSizing: 'border-box'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <IconButton>
                        <Settings 
                            sx={{
                                color: 'white'
                            }}
                        />
                    </IconButton>
                    <IconButton>
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
                        color: 'white'
                    }}
                >
                    <Typography 
                        sx={{
                            fontSize: 40,
                            fontWeight: 600,
                        }}
                    >
                        R$ 205,00
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
                        gap: '10px'
                    }}
                >
                    <Button
                        sx={{
                            color: 'white',
                        }}
                    >
                        Profits
                    </Button>
                    <Button
                        sx={{
                            color: 'white'
                        }}
                    >
                        Stores
                    </Button>
                </Box>
            </Paper>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                    padding: '25px',
                    width: '100%',
                    height: '65%'
                }}
            >   
                <Box
                    sx={{
                        width: '100%',
                        height: '60%',
                    }}
                >

                </Box>
                <EntriesDisplay profile={profile} focus={focus} />
            </Box>
        </Paper>
    )
/*             
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '65%',
                    backgroundColor: 'blue',
                }}
            >
                <Box
                    square
                    sx={{
                        width: `100%`,
                        maxHeight: '50%',
                        display: 'flex',
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column-reverse',
                        overflow: 'auto',
                        overflowX: 'hidden',
                        '::-webkit-scrollbar': {
                            visibility: 'hidden'
                        }
                    }}
                >
                    {items}
                </Box>
            </Box> */
}

export default Screen;
