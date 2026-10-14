import React from "react";
import { useMsal } from "@azure/msal-react";
import { AvatarGenerator } from "./AvatarGenerator";

const GetAvatar = () => {
  const { instance, accounts } = useMsal();
  const activeAccount = instance.getActiveAccount() ?? accounts[0];
  return <AvatarGenerator name={activeAccount?.name ?? ""} />;
};

export default GetAvatar;
