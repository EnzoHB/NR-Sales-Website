import { Card, CardContent, Collapse, Box, Typography, Paper, CardMedia, Divider, IconButton, Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { ArrowDropDown, AttachMoney, MoneyOff } from "@mui/icons-material";
import { styled, width } from "@mui/system";
import React, { Component } from "react";

class Entry_ extends Component {
    constructor(props) {
        super(props);

        this.theme = createTheme({

        });
    };

    render() {
        const Indicator = styled(Paper)(({ theme }) => ({
            color: 'white',
            padding: '4.5px 10px',
            minWidth: 'max-content',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
        }));

        const Person = styled(Paper)(({ theme }) => ({
            color: 'black',
            padding: '5px 10px',
            minWidth: 'max-content',
            width: '100px',
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
        }));

        return (
            <ThemeProvider theme={this.theme}>
                <Card variant="elevation" sx={{ minWidth: 'max-content', backgroundColor: '#FBEEE4' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '15px', minHeight: 'max-content'}}>
                            <Person>
                                <Typography sx={{ fontWeight: 'bold'}}>Enzo</Typography>
                                <AttachMoney fontSize="large" sx={{ backgroundColor: 'blue', color: 'white', padding: '4px', borderRadius: '100px'}}/>
                            </Person>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', minBlockSize: 'max-content'}}>
                                <Indicator sx={{ backgroundColor: 'rgb(255, 165, 0);'}}>
                                    <Typography sx={{ fontWeight: 'bold'}}>Receipt</Typography>
                                </Indicator>
                                <Indicator sx={{ backgroundColor: 'rgb(0, 198, 126);'}}>
                                    <Typography sx={{ fontWeight: 'bold'}}>R$ 1560,77</Typography>
                                </Indicator>
                                <Indicator sx={{ backgroundColor: '#FFFFF', padding: 0}}>
                                    <IconButton size='small' sx={{ color: 'black' }}>
                                        <ArrowDropDown />
                                    </IconButton> 
                                </Indicator>
                            </Box>
                            <Person>
                                <Typography sx={{ fontWeight: 'bold'}}>Caixa</Typography>
                                <MoneyOff fontSize="large" sx={{ backgroundColor: 'blue', color: 'white', padding: '4px', borderRadius: '100px'}}/>
                            </Person>
                        </Box>
                    </CardContent>
                    <Collapse in={true}>
                        <Divider />
                        <CardContent>
                            <Paper square sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'self-end', padding: '5px 10px',}}>
                                <Box>
                                    <Typography variant='h6'sx={{ fontWeight: 'bold'}}>Receipt</Typography>
                                    <Typography variant='h6'sx={{ fontWeight: 'bold', fontSize: "14px", color: '#5c5c5c'}}>Vendas de Minipizzas - 14/03</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                                    <Typography variant='h6'sx={{ fontWeight: 'bold'}}>R$ 1560,77</Typography>
                                    <Typography variant='h6'sx={{ fontWeight: 'bold', fontSize: "14px", color: '#5c5c5c'}}>Tax: R$ 5,50</Typography>
                                </Box>
                            </Paper>
                            <TableContainer component={Paper} square>
                                <Table sx={{ maxWidth: 'fit-content'}}>
                                     <TableHead>
                                        <TableRow>
                                            <TableCell>Product</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Minipizzas</TableCell>
                                            <TableCell>R$ 5,00</TableCell>
                                            <TableCell>350 units</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Collapse>
                </Card>
            </ThemeProvider>
        );
    };
};

export default Entry_;