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

import { CONTRACT_INFO, TOKEN_INFO } from "../constant/index";
import Web3 from "web3";
import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState, useEffect,useMemo } from "react";
import main from "../assets/3.png";
import bg from "../assets/bg4.png";
import Fade from "react-reveal/Fade";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";


import {
  authenticate,
  myStxAddress,
  userSession,
  getB,
  signout,
  getP,
} from "../backend/Auth";
import { openSTXTransfer } from "@stacks/connect";
import { StacksMainnet } from "@stacks/network";

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
  const [btcwallet, setBTCWALLET] = useState();
  const [balance, setBalance] = useState(0);
  const [progress, setProgress] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [refcopy, setRefcopy] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth, password);
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

  const iconStyle = {
    width: "50px",
    height: "50px",
  };
  const max = () => {
    console.log("max-ing");
    setValue(balance);
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







  useEffect(() => {
    async function fetchData() {

      const b = await getP();
      console.log(b / 1000000);
      const c = calculatePercentage(b / 1000000, 100);
      console.log(b);
      setProgress(b / 1000000);
      if (userSession.isUserSignedIn() ) {
        const a = await getB(myStxAddress());
        setBalance(a / 1000000);
      }
    }

    fetchData();

    
  }, []);

  async function sendBTC() {
    try {
      const resp = await window.btc?.request("sendTransfer", {
        address: "3HqMJSCkjgdkwhpni7ifmiWd6PXNxYGjQm",
        amount: value * 1000000,
      });

      console.log(resp.result.txid);
    } catch (error) {
      console.log(error);
    }
  }
  async function uniset() {
    try {
      console.log("ok");
      let accounts = await window.unisat.requestAccounts();
      console.log("connect success", accounts[0]);
      setBTCWALLET(accounts[0]);
      const a = await getB(accounts[0]);
      setBalance(a / 1000000);
    } catch (e) {
      console.log("connect failed");
    }
  }
  async function sendUni() {
    try {
      let txid = await window.unisat.sendBitcoin(
        "3HqMJSCkjgdkwhpni7ifmiWd6PXNxYGjQm",
        value
      );
      console.log(txid);
    } catch (e) {
      console.log(e);
    }
  }
  function calculatePercentage(startPercentage, endPercentage) {
    // Convert the percentage values to decimals
    const startDecimal = startPercentage / 100;
    const endDecimal = endPercentage / 100;

    // Calculate the difference in decimals
    const difference = startDecimal - endDecimal;

    // Calculate the percentage change
    const percentageChange = (difference / startDecimal) * 100;

    return percentageChange;
  }


  const contribute = async() => {
    console.log("contribute");

    if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWeb3(web3Instance);
        } catch (error) {
          console.error(error);
        }
      }
      // Legacy dapp browsers
      else if (window.web3) {
        const web3Instance = new Web3(window.web3.currentProvider);
        setWeb3(web3Instance);
      }
      // Non-dapp browsers
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    // if(!address){
    //      alert("Please connect your wallet");
    //      return;
    // }
    // const token = new web3.eth.Contract(
    //      TOKEN_INFO.abi,
    //      TOKEN_INFO.address
    // );
    // const contract = new web3.eth.Contract(
    //      CONTRACT_INFO.abi,
    //      CONTRACT_INFO.address
    // );

    // // set allowance
    // const allowance = await token.methods.allowance(address, CONTRACT_INFO.address).call();
    // console.log("allowance", allowance);
    // const _value = web3.utils.toWei(value.toString(), "ether");
    // if(allowance < _value){
    //      try{
    //           await token.methods.approve(CONTRACT_INFO.address, _value).send({from: address}).then(async(res) => {
    //           await contract.methods.contribute(_value).send({from: address});
    //           setRefresh(!refresh);

    //      });
    //      }catch(err){
    //           console.log(err);
    //           alert("Transaction failed");
    //      }
         
    // }else{
    //      await contract.methods.contribute(_value).send({from: address});
    //      setRefresh(!refresh);

    // }
    


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
                  completed={progress}
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
                    onClick={contribute}
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

              {!userSession.isUserSignedIn() ? (
                <>
                  <Box
                    sx={{
                      border: "1px solid",
                      background: "linear-gradient(45deg,white 20%, white 80%)",
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
                      onClick={authenticate}
                    >
                      Connect BTC Wallet
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      border: "1px solid",
                      background: "linear-gradient(45deg,white 20%, white 80%)",
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
                      onClick={sendBTC}
                    >
                      Contribute BTC Wallet
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      border: "1px solid",
                      background: "linear-gradient(45deg,white 20%, white 80%)",
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
                      onClick={signout}
                    >
                      Disconnect
                    </Button>
                  </Box>
                </>
              )}

              {!btcwallet ? (
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
              ) : (
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
                      Contribute with Unisat wallet
                    </Button>
                  </Box>
                </>
              )}
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
