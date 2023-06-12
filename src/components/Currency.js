import React,{useState,useEffect} from 'react'
import {Box,Container,Grid, Table, TableHead, TableBody, TableRow, TableCell,Typography } from '@mui/material';
import { ApiCall } from "../backend/Auth"
import Fade from "react-reveal/Fade";
import axios from 'axios';
export default function Currency() {
    const [datas, setData] = useState(null);
  
    useEffect(() => {

     axios.get('https://api.coinranking.com/v2/coins?tags[]=brc-20')
    .then(response => {
      // Handle successful response

     setData(response.data.data.coins)
    })
    .catch(error => {
      // Handle error
      console.error(error);

    });

      },[datas]);
    const data = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 35 },
      ];
    
      return (
        <Box
          id="contact"
          sx={{
            backgroundSize: "100% 100%",
            marginTop:'5%'
          }}
        >
             <Fade top duration={1000}>
        <Typography
          sx={{
            fontFamily: "Futura Italic, Arial, sans-serif",
            fontWeight: 700,

            fontSize: { md: "44px", sm: "40px", xs: "30px" },

            background: "linear-gradient(45deg, #6f19ac 20%, #a40d63 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-2px",
            textAlign: "center",
            pt: 8,
            pb: 4,
            pl: { md: 6 },
          }}
        >
        Popular Ordinals
        </Typography>
      </Fade>
          <Container maxWidth="xl">
          <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            background: "linear-gradient(45deg, #110C1F 20%, #09091B 50%)",
            padding: "2%",
            border: "2px solid #13121D",
            borderRadius: 7,
            color: "white",
            
          }}
        >
            <Box overflow="auto"  style={{maxHeight: '800px'}}>
        <Table style={{color:'white'}}>
          <TableHead>
            <TableRow>
            <TableCell style={{ fontWeight:'bold', color: 'white' }}>Icon</TableCell>
              <TableCell style={{ fontWeight:'bold', color: 'white' }}>Name</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Symbol</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Rank</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Price</TableCell>
              <TableCell style={{fontWeight:'bold', color: 'white' }}>BTC Price</TableCell>
              <TableCell style={{fontWeight:'bold', color: 'white' }}>Market Cap</TableCell>
              <TableCell style={{ fontWeight:'bold',color: 'white' }}>Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas && datas.map((row) => (
              <TableRow key={row.name}>
                 <TableCell style={{ color: 'white' }}><img style={{width:'55px',height:'5%' , borderRadius:15}} src={row.iconUrl} />   </TableCell>
                <TableCell style={{ color: 'white' }}>{ row.name}</TableCell>
                <TableCell style={{ color: 'white' }}>{row.symbol}</TableCell>
                <TableCell style={{ color: 'white' }}>{row.rank}</TableCell>
                <TableCell style={{ color: 'white' }}>{row.price}</TableCell>
                <TableCell style={{ color: 'white' }}>{row.btcPrice}</TableCell>
                <TableCell style={{ color: 'white' }}>{row.marketCap}</TableCell>
                <TableCell style={{ color: 'white' }}>{row.change}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Box>
        </Grid>
  </Container>
  </Box>
  )
}
