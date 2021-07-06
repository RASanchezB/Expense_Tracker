import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {useHistory} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0Providerhs = ({children}) =>{
    const history = useHistory();
    const {isLoading} = useAuth0();

    const onRedirectCallback = (appState) =>{
        history.push(appState?.returnTo || window.location.pathname);
    }
    return(
        <Auth0Provider 
            domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}  
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''} 
            redirect_Uri={`${window.location.origin}`}
            onRedirectCallback={onRedirectCallback}
            >
            {children}
        </Auth0Provider>
    )
};
export default Auth0Providerhs;
