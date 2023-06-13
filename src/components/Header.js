import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {
    Container,
    Box,
    IconButton,
    Stack,
    Drawer,
    Hidden,
    Typography,
    useTheme,
    Button,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Header = () => {
    const [state, setState] = useState(false);

    const theme = useTheme();
    const toggleDrawer = () => {
        setState((prev) => (prev === true ? false : true));
    };

    let data = [
        {
            name: 'Home',
            url: 'https://brc-20dex.io/',
        },
        {
            name: 'Trade',
            url: 'https://brc-20dex.io/Trade',
        },
        {
            name: 'Swap',
            url: 'https://brc-20dex.io/Swap',
        },
        {
            name: 'Invest',
            url: 'https://brc-20dex.io/Invest',
        },
        {
            name: 'Airdrop',
            url: 'https://brc-20dex.io/Airdrop',
        },
        {
            name: 'Mining',
            url: 'https://brc-20dex.io/Mining',
        },
        {
            name: 'ICO',
            url: 'https://brc-20dex.io/ICO',
        },
    ];

    return (
        <Box
            sx={{
               
                py: { md: 2, xs: 1 },
                color: '#fff',
             
                width: '100%',
                zIndex: 1000,
            }}
        >
            <Container maxWidth="xl">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    px={{ md: 7, sm: 5, xs: 0 }}
                >
                    <img src={logo} alt="logo" style={{ maxWidth: '30%',minWidth:'15%' }} />
                    <Hidden lgDown>
                        <Box display="flex" justifyContent="flex-end" width="100%">
                            <Box display="flex" alignItems="center" mr={5} gap={4}>
                                {data?.map(({ name, url }, i) => {
                                    return (
                                        <Box key={i}>
                                          
                                          <a href={url} style={{textDecoration:'none',color:'white'}}>
                                                <Typography
                                                    sx={{
                                                        color: `${theme.palette.text.lightblue}`,
                                                        fontFamily: "Futura Italic, Arial, sans-serif",
                                                        fontWeight: '500',
                                                        fontSize: '16px',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    {name}
                                                </Typography>
                                                </a>
                                               
                                        </Box>
                                    );
                                })}
                            </Box>

                            <Box
                                sx={{
                                    border: '1px solid ',
                                    borderRadius:5,
                                    background: 'white',
                                    color:'black',
                                    width: '150px',
                                    textAlign: 'center',
                                }}
                            >
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: '#fff', textDecoration: 'none' }}
                                >
                                    <Button sx={{ color: '#000' }}>Connect Wallet</Button>
                                </a>
                            </Box>
                        </Box>
                    </Hidden>
                    <Hidden lgUp>
                        <IconButton onClick={() => toggleDrawer()}>
                            <MenuIcon
                                sx={{
                                    fontSize: '28px',
                                    color: '#fff',
                                }}
                            />
                        </IconButton>
                    </Hidden>
                </Stack>
            </Container>
            <Drawer anchor="left" open={state} onClose={() => toggleDrawer()}>
                <Box
                    sx={{
                        width: 250,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: 'black',
                        color: '#fff',
                        alignItems: 'center',
                        gap: 3,
                        px: 2,

                        pt: 4,
                    }}
                >
                    <Box>
                        <Box component="img" src={logo} alt="logo" sx={{ width: '120px' }} />
                    </Box>

                    <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
                        {data?.map(({ name, url }, i) => {
                            return (
                                <Box key={i}>
                                  <a href={url}>
                                        <Typography
                                            sx={{
                                                fontSize: '16px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {name}
                                        </Typography>
                                    </a>
                                </Box>
                            );
                        })}
                        <Box
                                sx={{
                                    border: '1px solid ',
                                    borderRadius:5,
                                    background: 'white',
                                    color:'black',
                                    width: '150px',
                                    textAlign: 'center',
                                }}
                            >
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: '#fff', textDecoration: 'none' }}
                                >
                                    <Button sx={{ color: '#000' }}>Connect Wallet</Button>
                                </a>
                            </Box>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Header;
