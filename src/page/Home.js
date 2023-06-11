import React from "react";

import Header from "../components/Header";
import Exchange from "../components/Exchange";
import Main from "../components/Main";
import Explorer from "../components/Explorer";
import Fundraising from "../components/Fundraising";
import Portfolio from "../components/Portfolio";
import bg from "../assets/background-images.png";
import expl from "../assets/bg3.png";

import { Box } from "@mui/system";
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
      <Box sx={boxEStyles}>
        <Portfolio />
        <Exchange />
        <Explorer />
      </Box>
    </div>
  );
}
