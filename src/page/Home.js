import React from "react";

import Header from "../components/Header";
import Exchange from "../components/Exchange";
import Main from "../components/Main";
import Explorer from "../components/Explorer";
import Fundraising from "../components/Fundraising";
import Portfolio from "../components/Portfolio";
import Currency from "../components/Currency";
import bg from "../assets/background-images.png";
import expl from "../assets/bg3.png";
import Footer from "../components/Footer";
import { Box } from "@mui/system";
import Graph from "../components/Graph";
import Marquees from "../components/Marguee"
import Round from "../components/Round";
export default function Home() {
  const boxStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%", // Set the desired height of the box
  };
  const boxEStyles = {
    backgroundImage: `url(${expl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%", // Set the desired height of the box
  };
  return (
    <div style={{ backgroundColor: "#0A0A11" }}>
      <Box sx={boxStyles}>
        <Header />
        <Main />
      </Box>
      <Fundraising />
      <Marquees/>
      <Currency />
{/* <Round/> */}

      <Graph />
      <Box sx={boxEStyles}>
        <Portfolio />
        <Exchange />
        <Explorer />
        <Footer />
      </Box>
    </div>
  );
}
