import { Box, Container, Grid,  Typography, Button } from "@mui/material";
import React from "react";
import main from "../assets/4.png";
import Fade from "react-reveal/Fade";
export default function Main() {
  
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
              <Grid item xs={12} sm={12} md={6}>
                <Box>
                  <Fade top duration={1000}>
                    <Typography
                      sx={{
                        fontFamily: "Futura Italic, Arial, sans-serif",
                        fontWeight: 700,
                        fontStyle: "italic",
                        fontSize: { md: "54px", sm: "40px", xs: "30px" },
                        marginTop: "17%",
                        background:
                          "linear-gradient(45deg, #6f19ac 20%, #a40d63 50%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-2px",
                      }}
                    >
                      Buy Trade and hold Brc20 Ordinals on Brc20
                    </Typography>
                  </Fade>
                  <Fade right duration={1400}>
                    <Typography
                      sx={{
                        // fontWeight: 400,
                        fontSize: { md: "20px", sm: "20px", xs: "17px" },
                        color: "#FFFFFF",
                        fontFamily: "Inter, Arial, sans-serif",
                      }}
                    >
                      The Brc20 Dex Exchange is an innovative decentralized
                      exchange built on the brc20 protocol.Fractional ordinals
                      emerged as a response to the need for increased
                      accessibilty and liquidity in high-value assets
                    </Typography>
                  </Fade>
                  <Grid container spacing={2} style={{ marginTop: "5%" }}>
                    <Grid item>
                      <Box
                        sx={{
                          border: "1px solid",
                          background:
                            "linear-gradient(45deg, #a40d63 20%, #6f19ac 80%)",
                          color: "black",
                          height: "60px", // Set the desired height
                          minWidth: "200px", // Set the minimum width
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 7,
                        }}
                      >
                        <a
                          href=""
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          <Button
                            sx={{
                              color: "#000",
                              fontWeight: "bold",
                              fontSize: 20,
                            }}
                          >
                            OPEN DEX
                          </Button>
                        </a>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box
                        sx={{
                          border: "1px solid white",
                          transition: 'background-color 0.3s ease', // transition effect
                          '&:hover': {
                            background:
                            "linear-gradient(45deg, #a40d63 20%, #6f19ac 80%)",
                            color:'black'
                          },
                          color: "black",
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 7,

                          height: "60px", // Set the desired height
                          minWidth: "200px", // Set the minimum width
                        }}
                      >
                        <a
                          href=""
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          <Button
                            sx={{
                              color: "white",
                              transition: 'background-color 0.3s ease', // transition effect
                              '&:hover': {
                                color: "black",
                              },
                              fontWeight: "bold",
                              fontSize: 20,
                            }}
                          >
                            WhitePaper
                          </Button>
                        </a>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                item
                xs={7}
                sm={12}
                md={4.5}
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
                      style={{ width: "180%", height: "180%" }}
                    />
                  </Fade>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
