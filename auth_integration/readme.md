# Create an account on Auth0
Enter the Auth0 website: https://auth0.com/ and register or login.

# Create an application
Click the "Getting started" tab on the left-side panel. Here you will have the option of creating your application.

When prompted with the option about the app type, choose "Single Page Application"

# Setting up with React
Click on the "React" Icon, and a react application will be initiated for you and a guide will open. It is recommended and assumed that you will do this to follow the rest of the guide.


## Get Your Application Keys

You need the following information:

- **Domain**
- **Client ID**

You can get these details from the "Application" Settings section in the Auth0 dashboard on the left-hand side.

If you downloaded the sample from the top of this page, the details are filled out for you.

## Configure Callback URLs

If you scroll further down under the application settings, there are 3 places where we will be adding the url "http://localhost:3000".

Under: "Allowed Callback URLs", "Allowed Logout URLs" and "Allowed Web origins"


## Install the Auth0 React SDK

Run the following command within your project directory to install the Auth0 React SDK:

npm install @auth0/auth0-react

## Setting up index.js

In your index.js file in the src folder, replace the code with the code:

____________________________________________________________

```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="YOUR_DOMAIN"
    clientId="YOUR_CLIENT_ID"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);

```
____________________________________________________________

# Add login button

In the "components" folder add a file called "Loginbutton.js" and add the following code:


____________________________________________________________

```javascript
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
```
____________________________________________________________


# Add logout button

In the "components" folder add a file called "Logoutbutton.js" and add the following code:

____________________________________________________________

```javascript
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
```
____________________________________________________________


# Add a profile view

In the "components" folder add a file called "Profile.js" and add the following code:

____________________________________________________________

```javascript
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
```
____________________________________________________________


### Now from the root of the application (cd into <your_application_name>) and run "npm start" from the terminal