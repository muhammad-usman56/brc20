import React from 'react'
import {
    Box,
    Container,
    Grid,
    Stack,
    Typography,
    Button,
    LinearProgress,
    FormControl,
    TextField,
    styled,
    Divider,
  } from "@mui/material";

import one from "../assets/11.png"
import two from "../assets/12.png"
import three from "../assets/13.png"
import four from "../assets/14.png"
export default function Graph() {
  return (
    <Container maxWidth="xl" style={{marginTop:'5%'}}>
    <Grid container spacing={2}>
    <Grid item lg={6} md={12} xs={12}>
    <img style={{maxWidth: '100%',
    height: 'auto'}} src={one} alt="Image 1"/>
    </Grid>
    <Grid item lg={6} md={12} xs={12}>
    <img 
    style={{maxWidth: '100%',
    height: 'auto'}}
    src={two} alt="Image 1" />
    </Grid>
    <Grid item lg={6} md={12} xs={12}>
    <img
    style={{maxWidth: '100%',
    height: 'auto'}}
    src={three} alt="Image 1" />
    </Grid>
    <Grid item lg={6} md={12} xs={12}>
    <img 
    style={{maxWidth: '100%',
    height: 'auto'}}
    src={four} alt="Image 1" />
    </Grid>
  </Grid>
  </Container>
  )
}
