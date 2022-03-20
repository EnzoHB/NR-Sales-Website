import React, { useState } from 'react';
import { Box } from '@mui/system';
import Entry from './Entry';
import { Button, IconButton, Menu, Typography, MenuItem } from '@mui/material';
import { Sort } from '@mui/icons-material';

export default function EntriesDisplay({ focus, profile, switchTab }) {

    const [anchorEl, setAnchorEl] = useState(null);
    const [ sortType, setSortType ] = useState(0);

    const open = Boolean(anchorEl);

    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = st => {

        setAnchorEl(null);
        setSortType(st);

    };

    var filter = {};
    var target = { target: () => focus }
    var subject = { subject: () => focus };

    if (sortType == 0) {
        Object.assign(filter, target);
        Object.assign(filter, subject);
    };

    if (sortType == 1) 
        filter = target;

    if (sortType == 2)
        filter = subject;

    const entries = profile.fetch().some(filter);
    const items = entries.map(({ id, subject, target, amount, timestamp}) => {

        const flow = subject === focus? -1 : 1;
        const name = subject === focus? target : subject;

        return <Entry key={id} name={name} flow={flow} amount={amount} timestamp={timestamp} />
    });

  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '45%',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Typography
                sx={{
                    fontWeight: 600,
                    color: '#9921F1'
                }}
            >
                Transactions
            </Typography>
            <IconButton
                id="sort-list"
                aria-controls={open ? 'sort-list' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Sort
                    sx={{
                        width: '20px',
                        height: '20px',
                        color: '#9921F1',
                        transform: 'scale(-1, 1)',
                    }}
                />
            </IconButton>
            <Menu
                id="sort-list"
                MenuListProps={{ 'aria-labelledby': 'sort-list' }}
                anchorEl={anchorEl}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                open={open}
                onClose={() => handleClose(sortType)}
            >
                <MenuItem onClick={() => handleClose(0)}><Typography sx={{ fontWeight: 600, fontSize: 10}}>All</Typography></MenuItem>
                <MenuItem onClick={() => handleClose(1)}><Typography sx={{ fontSize: 10}}>Income</Typography></MenuItem>
                <MenuItem onClick={() => handleClose(2)}><Typography sx={{ fontSize: 10}}>Outcome</Typography></MenuItem>
            </Menu>
        </Box>
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column-reverse',
                width: '100%',
                height: '100%',
                overflow: 'scroll',
                '::-webkit-scrollbar': {
                    position: 'absolute',
                    width: 0,
                    height: 0,
                    visibility: 'hidden'
                }
            }}
        >
            {items}
        </Box>
    </Box>
  )
}
