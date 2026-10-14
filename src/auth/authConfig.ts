import { type Configuration, LogLevel, PublicClientApplication } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authority:"https://login.microsoftonline.com/XXXXXXXXXXXXXXXXXXXXXXXX",
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,

  },
  cache: {
    cacheLocation: "localStorage",
  },
  system: {
    allowRedirectInIframe: true,
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) return;
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
        }
      },
      logLevel: LogLevel.Warning,
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};

export const apiRequest = {
  scopes: ["api://XXXXXXXXXXXXXXXXXXXXX/acces_as_user"],
};
export const msalInstance = new PublicClientApplication(msalConfig);