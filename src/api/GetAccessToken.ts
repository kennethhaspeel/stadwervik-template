import { apiRequest, msalInstance } from "../auth/authConfig";

export async function GetAccessToken(): Promise<string> {
  const account =
    msalInstance.getActiveAccount() ?? msalInstance.getAllAccounts()[0];
  try {
    if (!account) {
      throw new Error("Not authenticated");
    }

    const result = await msalInstance.acquireTokenSilent({
      ...apiRequest,
      account,
    });
    return result.accessToken;
  } catch (error) {
    console.error("AuthService: AcquireTokenSilent failed", error);
    throw error;
  }
}
