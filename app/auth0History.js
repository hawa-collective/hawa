import React from "react";
import { useRouter } from "next/router";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const router = useRouter();
    const domain = 'dev-b22zwjqma0zc7zbr.us.auth0.com';
    const clientId = 'lEcAftYEmGUBvq6ON60xjn9lOxdrUQri';

    const onRedirectCallback = (appState) => {
        router.push(appState?.returnTo || router.pathname);
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
}

export default Auth0ProviderWithHistory;
