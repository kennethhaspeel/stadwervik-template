import { GetAccessToken } from "@/api/GetAccessToken";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const isAuthenticated = useIsAuthenticated();
    const [token, setToken] = useState<string | null>(null);
const { accounts } = useMsal();

useEffect(() => {

  async function getToken(){
    const token = await GetAccessToken();
    setToken(token);
    console.log("Access Token:", token);
  }
  if (isAuthenticated) {
        getToken();
  }
}, [isAuthenticated]);

  if (!isAuthenticated) {
    return <p>Niet ingelogd</p>;
  }

  return <>
  Ingelogd als {accounts[0]?.name} | Access Token: {token}
  </>;
};

export default Footer;
