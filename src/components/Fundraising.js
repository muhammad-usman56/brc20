import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  Divider,
} from "@mui/material";


import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState,useEffect } from "react";

import bg from "../assets/bg4.png";
import Fade from "react-reveal/Fade";
import axios from "axios";


export default function Fundraising() {
  
  const [value, setValue] = useState(0.01);
 
  const [balance, setBalance] = useState(0);
  const [btcwallet , setBTCWALLET] = useState()
  const [progress, setProgress] = useState(0);


  useEffect(()=>{
    async function getP() {
     const a =  await getBalance("3HqMJSCkjgdkwhpni7ifmiWd6PXNxYGjQm")
     setProgress( a/1000000); 
      } 
     getP();

      

  },[])

  const max = () => {
    console.log("max-ing");
    setValue(balance);

}

  const boxStyles = {
    // position: "relative",
    width: "100%",
    height: "0",
    paddingBottom: "56.25%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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


//uniset wallet integration

async function uniset(){
  try {
       console.log('ok')
       let accounts = await window.unisat.requestAccounts();
       console.log('connect success', accounts[0]);
       setBTCWALLET(accounts[0]);
       const a  = await getBalance(accounts[0]);
       setBalance(a/1000000);
     } catch (e) {
       console.log('connect failed');
     }
}
async function sendUni(){
  try {
       let txid = await window.unisat.sendBitcoin("3HqMJSCkjgdkwhpni7ifmiWd6PXNxYGjQm",value);
       console.log(txid)
     } catch (e) {
       console.log(e);
     }
}


async function getBalance(btcAddress) {
  const url = `https://api.blockcypher.com/v1/btc/main/addrs/${btcAddress}`;
  const response = await axios.get(url);
  const balance = response.data.final_balance;

  return balance;
}




 








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
                  marginTop: "53%",
                  textAlign: "center",
                }}
              >
                $BRC20DEX <br />
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Stack spacing={2} direction="row">
                <Grid
                  container
                  style={{ marginLeft: "3%", marginRight: "3%" }}
                  spacing={2}
                  justifyContent="space-between"
                >
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
            marginLeft:'5%',
            marginRight:'5%'
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
            <form >
              <div className="wallet-field">
                <ProgressBar
                  completed={0}
                  bgColor={"#643789"}
                  baseBgColor={"#352662"}
                  isLabelVisible={false}
                />
                <div className="claim">
                  <p>{progress}%</p>
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
              <div className="claim">
                <span
            onClick={max}
                  style={{
                    cursor: "pointer",
                    marginTop: "5%",
                  }}
                >
                  MAX
                </span>
              </div>
              <input
                type="text"
                id="custom-input"
                value={value}
                style={inputStyle}
                onChange={(e) => setValue(e.target.value)}
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
              
                  <Button
                  type="button"
                    sx={{
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                   
                  >
                    Connect Wallet
                  </Button>
                
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

                 
             


          
             {btcwallet ? 
             <>
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
                    <Button
                      type="button"
                 onClick={uniset}
                      sx={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Connect Unisat  Wallet
                    </Button>
                  </Box>
                  </>
                  :
                  <>
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
                    <Button
                      type="button"
                 onClick={sendUni}
                      sx={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Contribute
                    </Button>
                  </Box>
                  </>
}
              <Divider light />
              <Stack spacing={2} direction="row">
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item>
                    <p style={{ color: "white" }}>My Balance</p>
                  </Grid>
                  <Grid item>
                    <p style={{ color: "white" }}>{balance} BTC</p>
                 
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
