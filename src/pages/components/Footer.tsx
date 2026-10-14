import { useIsAuthenticated, useMsal } from "@azure/msal-react";

const Footer = () => {
  const isAuthenticated = useIsAuthenticated();
const { accounts } = useMsal();
  if (!isAuthenticated) {
    return <p>Niet ingelogd</p>;
  }

  return <>
  Ingelogd als {accounts[0]?.name}
  </>;
};

export default Footer;
