import React, { Component } from 'react';
import Flex from './Flex';
import { styled } from '@mui/material/styles';
import { Avatar, Paper, Typography } from '@mui/material';

function Entry ({ 

    // ----------------- Default Values ----------------- //

    name = 'Someone', 
    onClick = null,

    src = '',
    flow = '',
    amount = '',

    timestamp = new Date,  

}) {

    // ----------------- Styling Components ----------------- //

    const Body = styled(Paper)(({ theme }) => ({
        display: 'flex',
        padding: '10px',
        justifyContent: 'space-between',
        minWidth: 'max-content'
    }));

    const Name = styled(Typography)(({ theme }) => ({
        fontWeight: 'bold',
        padding: 0
    }));

    const Time = styled(Typography)(({ theme }) => ({
        fontWeight: '300',
        fontSize: 14
    }));

    const Amount = styled(Typography)(({ theme }) => ({
        fontWeight: 'bold',
        padding: 0
    }));

    const Profile = styled(Avatar)(({ theme }) => ({ 
        backgroundColor: 'white', 
        color: 'black', 
        fontWeight: '300',
    }));

    const Circle = styled(Paper)(({ theme }) => ({
        borderRadius: '50%',
        minBlockSize: 'fit-content'
    }));

    // --------------- CSS Variables ------------------ //

    const center = 'center';
    const column = 'column';
    const gap = '10';

    // ------------------- Values ----------------------- //

    const date = new Date(timestamp).toLocaleDateString('pt-br').replaceAll('/', '.')
    const value = new Number(amount * flow).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    // ------------------- Render ----------------------- //

    return (
        <Body onClick={onClick} elevation={0} square>
            <Flex align={center} gap={gap}>
                <Circle elevation={3}>
                    <Profile alt={name} src={src} />
                </Circle>
                <Flex justify={center} direction={column}>
                    <Name>{name}</Name>
                    <Time>{date}</Time>
                </Flex>
            </Flex>
            <Flex>
                <Amount>{value}</Amount>
            </Flex>
        </Body>
    );
};

export default Entry;