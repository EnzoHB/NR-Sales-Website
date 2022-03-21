import React, { useState } from 'react'
import Entry from './Entry';
import EntriesDisplay from './EntriesDisplay';
import AppHeader from './AppHeader';
import { ledger } from '../App/ledger.js';
import { Paper, Box, IconButton, Typography, Divider, Button } from '@mui/material';
import { createTheme } from '@mui/system';
import { AccountCircle, Settings } from '@mui/icons-material';

function Screen() {
    const focus = 'Caixa';
    const width = 315; // 315
    const height = 667; // 667
    const padding = 3;  
    const defaultItems = 4;

    // ---------- Items ------------ //

    const profile = ledger.profile.get(focus);
    const member = ledger.members.get(focus);

    profile.balance = member.balance.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

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
            <AppHeader profile={profile} onSettingsClick={handleClick}></AppHeader>
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
