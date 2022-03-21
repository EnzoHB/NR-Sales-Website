import React from 'react';
import { Box, Avatar, Paper, Typography } from '@mui/material';

function Entry ({ 

    // ----------------- Default Values ----------------- //

    name = 'Someone', 
    onClick = null,

    src = '',
    flow = '',
    amount = '',

    timestamp = new Date,  

}) {

    // ------------------- Values ----------------------- //

    const date = new Date(timestamp).toLocaleDateString('pt-br').replaceAll('/', '.')
    const value = new Number(amount * flow).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    // ------------------- Render ----------------------- //

    return (
        <Paper
            square
            onClick={onClick}
            elevation={0}
            sx={{
                display: 'flex',
                padding: '10px',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <Paper
                    elevation = {2}
                    sx={{
                        borderRadius: '50%',
                        minBlockSize: 'fit-content'
                    }}
                >
                    <Avatar
                        alt={name}
                        src={src}
                        sx={{
                            height: 20,
                            width: 20,
                            backgroundColor: 'white', 
                            color: 'black', 
                            fontWeight: '300',      
                        }}
                    />
                </Paper>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            padding: 0,
                            textOverflow: 'ellipses',
                            fontSize: 12
                        }}
                    > 
                    {name}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: '300',
                            fontSize: 10
                        }}
                    > 
                    {date}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: 12,
                        padding: 0
                    }}
                >
                {value}
                </Typography>
            </Box>
        </Paper>
    );
};

export default Entry;