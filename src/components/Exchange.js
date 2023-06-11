import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import React from "react";
import main from "../assets/2.png";
import Fade from "react-reveal/Fade";

export default function Exchange() {

    const iconStyle = {
        width: "50px",
        height: "50px",
      };
      return (
        <Box
          id="contact"
          sx={{
            backgroundSize: "100% 100%",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 12,
              }}
              px={{ md: 10, sm: 5, xs: 5 }}
            >
              <Box>
                <Grid container spacing={2}>
              
                <Grid
                    item
                    xs={12}
                                sm={12}
                                md={12}
                                lg={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Fade left duration={1200}>
                        <img
                          src={main}
                          alt="Image"
                     style={{width:'100%',height:'100%'}}
                        />
                      </Fade>
                    </Box>
                  </Grid>



                  <Grid item xs={12} sm={12} md={12} lg={8}  sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                   
                    }}>
                    <Box>
                      <Fade top duration={1000}>
                        <Typography
                          sx={{
                            fontFamily: "Futura Italic, Arial, sans-serif",
                            fontWeight: 700,
                          
                            fontSize: { md: "54px", sm: "40px", xs: "30px" },
                            marginTop: "17%",
                            marginLeft:'10%',
                            background:
                              "linear-gradient(45deg, #6f19ac 20%, #a40d63 50%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                       
                          }}
                        >
                        Ordinal Exchange
                        </Typography>
                      </Fade>
                      <Fade right duration={1400}>
                        <Typography
                          sx={{
                            // fontWeight: 400,
                            fontSize: { md: "26px", sm: "20px", xs: "17px" },
                            color: "#585772",
                            fontFamily: "Inter, Arial, sans-serif",
                            marginLeft:'10%',
                          }}
                        >
                          Trade, buy & sell. <br/> Make an impact
                        </Typography>
                      </Fade>
                      <Fade right duration={1400}>
                        <Typography
                          sx={{
                            // fontWeight: 400,
                            marginTop:'2%',
                            fontSize: { md: "20px", sm: "20px", xs: "17px" },
                            color: "white",
                            fontFamily: "Inter, Arial, sans-serif",
                        marginLeft:'10%'
                          }}
                        >
                     Assets protected with strict protocols and industry-leading technical measure
                        </Typography>
                      </Fade>
                    </Box>
                  </Grid>
                 
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
  )
}
