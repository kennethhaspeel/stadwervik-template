import { loginRequest } from "@/auth/authConfig";
import { Button } from "@/components/ui/button";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import GetAvatar from "./avatar/GetAvatar";
const Header = () => {
  const isAuthenticated = useIsAuthenticated();

  const { instance } = useMsal();
  const handleLogin = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: "create",
      })
      .catch((error) => console.log(error))
  };

  const handleLogout = () => {
    instance.logoutRedirect().catch((error) => console.log(error));
  };
  return (
    <div className="sticky top-0 z-50 flex h-16 w-full items-center border-b border-base-300 bg-base-100 px-4 shadow-sm">
      <div className="grid h-full w-full max-w-7xl grid-cols-2 items-center mx-auto">
        <div>Wervik Identity & Access Portal</div>
        <div className="flex justify-end">
          {isAuthenticated ? (
            <Button variant="ghost" onClick={handleLogout}>
              <GetAvatar /> Log Uit
            </Button>
          ) : (
            <Button type="button" onClick={handleLogin}>
              Log in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
