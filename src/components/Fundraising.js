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

import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState, useEffect } from "react";
import main from "../assets/3.png";
import bg from "../assets/bg4.png";
import Fade from "react-reveal/Fade";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red", // Set the border color
    },
  },
}));

export default function Fundraising() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(0.01);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth, password);
  }
  const boxStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
  

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px"
  };

  const iconStyle = {
    width: "50px",
    height: "50px",
  };
  const max = () => {
    console.log("max-ing");
    setValue(0);
  };
  const inputStyle = {
    border: "1px solid gray", // Set the border color
    borderRadius: "20px",
    padding: "8px",
    width: "95%",
    height: "30px",
    marginTop: "3%",
    backgroundColor: "#110C1F",
    color: "white",
    fontSize: "20px",
    paddingLeft: "2%",
  };
  return (
    <Container maxWidth="xl">
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
          Fundraising For BRC20 Fragmentation Features
        </Typography>
      </Fade>

      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={5} lg={5}>
          <form>
            <Grid item xs={12} md={12} style={boxStyles}>
              <Typography
                sx={{
                  fontFamily: "Futura Italic, Arial, sans-serif",
                  fontWeight: 100,
                  fontSize: { md: "54px", sm: "40px", xs: "30px" },
                  background:
                    "linear-gradient(45deg, #6f19ac 20%, #a40d63 50%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  margintTop: "3%",
                  textAlign:'center'
                }}
              >
                $BRC20DEX <br/>
                <span style={{fontSize:'20px'}}>June 15 2023, 13:00 UTC</span>
              </Typography>
            
            </Grid>
            <Grid item xs={12} md={12}>
              <Stack spacing={2} direction="row">
                <Grid container style={{marginLeft:'3%',marginRight:'3%'}} spacing={2} justifyContent="space-between">
                  <Grid item>
                    <p style={{ color: "white" }}>Status</p>
                    <p style={{ color: "white" }}>Opening</p>
                    <p style={{ color: "white" }}>Closing</p>
                  </Grid>
                  <Grid item>
                    <p style={{ color: "white" }}>Coming Soon</p>
                    <p style={{ color: "white" }}>June 15 2023, 13:00 UTC</p>
                    <p style={{ color: "white" }}>June 25 2023, 13:00 UTC</p>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </form>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          style={{
            background: "linear-gradient(45deg, #110C1F 20%, #09091B 50%)",
            padding: "2%",
            border: "2px solid #13121D",
            borderRadius: 7,
            color: "white",
          }}
        >
          <div>
            <Typography
              sx={{
                fontFamily: "Futura Italic, Arial, sans-serif",
                fontWeight: 100,

                fontSize: { md: "24px", sm: "15px", xs: "10px" },

                background: "white",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "3%",
                textAlign: "center",
              }}
            >
              Progress
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className="wallet-field">
                <ProgressBar
                  completed={0}
                  bgColor={"#643789"}
                  baseBgColor={"#352662"}
                  isLabelVisible={false}
                />
                <div className="claim">
                  <p>0%</p>
                </div>
              </div>
              <Typography
                sx={{
                  fontFamily: "Futura Italic, Arial, sans-serif",
                  fontWeight: 100,

                  fontSize: { md: "24px", sm: "15px", xs: "10px" },

                  background: "white",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",

                  textAlign: "center",
                }}
              >
                Contribute with WBTC
              </Typography>

              <input
                type="text"
                id="custom-input"
                value={value}
                style={inputStyle}
                // Add any additional desired props and styles
              />
              <Box
                sx={{
                  border: "1px solid",
                  background:
                    "linear-gradient(45deg, #a40d63 20%, #6f19ac 80%)",
                  color: "black",
                  height: "50px", // Set the desired height
                  minWidth: "250px", // Set the minimum width
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                  marginTop: "5%",
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
                    Connect Wallet
                  </Button>
                </a>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Futura Italic, Arial, sans-serif",
                  fontWeight: 100,

                  fontSize: { md: "24px", sm: "15px", xs: "10px" },

                  background: "white",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginTop: "3%",
                  textAlign: "center",
                }}
              >
                Contribute with BTC
              </Typography>
              <Box
                sx={{
                  border: "1px solid",
                  background:
                    "linear-gradient(45deg, #ECAA3B 20%, #ECAA3B 80%)",
                  color: "black",
                  height: "50px", // Set the desired height
                  minWidth: "250px", // Set the minimum width
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                  marginTop: "5%",
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
                    Connect BTC Wallet
                  </Button>
                </a>
              </Box>
              <Divider light />
              <Stack spacing={2} direction="row">
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item>
                    <p style={{ color: "white" }}>My Contribution</p>
                    <p style={{ color: "white" }}>My Reserve Token</p>
                  </Grid>
                  <Grid item>
                    <p style={{ color: "white" }}>0 BTC</p>
                    <p style={{ color: "white" }}>0 BRC20</p>
                  </Grid>
                </Grid>
              </Stack>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
