import React from "react";
import { Typography, Container } from "@mui/material";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <Container maxWidth="xl" style={{marginTop:'4%'}}>
 

      <div className="coincarp-marquee marquee-div" data-type="marquee" data-currencycode="bitcoin,ethereum,tether,usdc,cardano,dogecoin,matictoken,binanceusd,wrapped-bitcoin,leotoken" data-base="usd" data-theme="dark" data-showicon="true" />
    </Container>
  );
};

export default Marquees;
