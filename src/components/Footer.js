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
            <Grid item lg={2} md={4} xs={6}>
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
              variant="p">Community</Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">Knowledge base</Typography><br/>
              <Typography 
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">Contact</Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">List Coin</Typography><br/>
            </Grid>
            <Grid item lg={2} md={4} xs={6}>
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
              variant="p">About</Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">Affiliate Program</Typography><br/>
              <Typography 
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">Career</Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">Blogs</Typography>
            </Grid>
            <Grid item lg={2} md={4} xs={6}>
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
              variant="p">Exchange</Typography><br/>
              <Typography 
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">Stake</Typography><br/>
              <Typography 
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">Swap</Typography><br/>
              <Typography
               sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
              }}
              variant="p">Store</Typography>
            </Grid>
            <Grid item lg={2} md={4} xs={6}>
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
            <Grid item lg={2} md={4} xs={6}>
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
        Privacy Policy
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
