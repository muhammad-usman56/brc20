import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Storage } from "@stacks/storage";
import { StacksMainnet, StacksTestnet } from "@stacks/network";
import axios from "axios";

const appConfig = new AppConfig(["store_write", "publish_data"]);

// Set this to true if you want to use Mainnet
const isMainnetNetwork = true;

export const userSession = new UserSession({ appConfig });
export const storage = new Storage({ userSession });

export function networkType() {
  if (isMainnetNetwork) return new StacksMainnet();
  else return new StacksTestnet();
}



export function myStxAddress() {
    console.log(getUserData)
   if (isMainnetNetwork) return getUserData().profile.btcAddress.p2wpkh.mainnet;
   else return getUserData().profile.btcAddress.p2wpkh.testnet;
}

export function authenticate() {
  showConnect({
    appDetails: {
      name: "BlockTech",
      icon: window.location.origin + "/logo.svg",
    },

    async onFinish() {
     window.location.href = "/"
    },
    userSession: userSession,
  });
}

export function getUserData() {
    console.log(userSession.loadUserData())
  return userSession.loadUserData();
}


export function signout() {
   
  return   userSession.signUserOut('/');
}