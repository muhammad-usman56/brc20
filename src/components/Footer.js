import {
  Box,
  Typography,

  Grid
} from "@mui/material";
import React from "react";

const Footer = () => {

  return (
    <>
      <Box
        sx={{
          background: "#0A0A11",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Galano Classic",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: { md: "16px", sm: "14px", xs: "12px" },
            color: "#FFFFFF",
            textAlign: "center",
            p: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={3} md={4} xs={6} >
              <Typography
                variant="h6"
                sx={{ 
                    background:
                    "linear-gradient(45deg, #6f19ac 20%, #a40d63 50%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight:'bold'
                }}
               
              >
                Help
              </Typography>
              <Typography 
              sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
                <a href="" style={{textDecoration:'none',color:'white'}}>
                Community
                </a>
                </Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
                 <a href="" style={{textDecoration:'none',color:'white'}}>
                Knowledge base</a></Typography><br/>
              <Typography 
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
              <a href="" style={{textDecoration:'none',color:'white'}}> 
                Contact  </a></Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p"> <a href="" style={{textDecoration:'none',color:'white'}}>List Coin</a></Typography><br/>
            </Grid>
            <Grid item lg={3} md={4} xs={6}>
            <Typography
                variant="h6"
                sx={{ 
                    background:
                    "linear-gradient(45deg, #6f19ac 20%, #a40d63 50%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight:'bold'
                }}
               
              >
        Company 
              </Typography>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
                <a href="" style={{textDecoration:'none',color:'white'}}>
                About </a> </Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
                 <a href="" style={{textDecoration:'none',color:'white'}}>
                Affiliate Program</a></Typography><br/>
              <Typography 
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
              <a href="" style={{textDecoration:'none',color:'white'}}>
                Career   </a></Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
                 <a href="" style={{textDecoration:'none',color:'white'}}>
                Blogs</a></Typography>
            </Grid>
            <Grid item lg={3} md={4} xs={6}>
            <Typography
                variant="h6"
                sx={{ 
                    background:
                    "linear-gradient(45deg, #6f19ac 20%, #a40d63 50%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight:'bold'
                }}
               
              >
                Product
              </Typography>
              <Typography 
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
                 <a href="" style={{textDecoration:'none',color:'white'}}>
                Exchange</a>
                
                </Typography><br/>
              <Typography 
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
                 <a href="" style={{textDecoration:'none',color:'white'}}>
                Stake</a></Typography><br/>
              <Typography 
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
                  <a href="" style={{textDecoration:'none',color:'white'}}>
                Swap</a></Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">
                 <a href="" style={{textDecoration:'none',color:'white'}}>
                Store</a></Typography>
            </Grid>
            <Grid item lg={3} md={4} xs={6}>
            <Typography
                variant="h6"
                sx={{ 
                    background:
                    "linear-gradient(45deg, #6f19ac 20%, #a40d63 50%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight:'bold'
                }}
               
              >
              User Agreement
              </Typography>
            </Grid>
           
        
          </Grid>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
