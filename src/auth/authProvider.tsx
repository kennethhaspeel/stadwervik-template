import { EventType, PublicClientApplication, type AuthenticationResult } from '@azure/msal-browser';
import { msalConfig } from './authConfig.ts';
import { MsalProvider } from '@azure/msal-react';

interface AuthProviderProps {
    children: React.ReactNode;
}
export const AuthProvider=({children}:AuthProviderProps) => {
    const msalInstance = new PublicClientApplication(msalConfig);

    if(!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
        msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
    }

    msalInstance.addEventCallback((event) => {
        const authenticationResult = event?.payload as AuthenticationResult;
        if (event.eventType === EventType.LOGIN_SUCCESS && authenticationResult?.account) {
            const account = authenticationResult.account;
            msalInstance.setActiveAccount(account);
            window.location.reload();
        }
    });

  return (
    <MsalProvider instance={msalInstance}>
      {children}
    </MsalProvider>
  )
}

