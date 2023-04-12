import CreateFrom from "./ui-components/RBLCreateForm.jsx";
import UpdateForm from "./ui-components/RBLUpdateForm.jsx";


import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {
  NewChild 
 } from './ui-components';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

/*function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}


export default withAuthenticator(
  return (
    App,
    hideSignUp={true},
  ));
  */

  /*export default function App({ user }) {
    return (
      <Authenticator hideSignUp={true}>
        {({ signOut }) => <button onClick={signOut}>Sign out</button>}
        <button>hi</button>
      </Authenticator>
    );
  }*/



export default function App({ user }){
  return(
    <Authenticator hideSignUp={true}>
    {({ signOut, user }) => (
      <main>
        <h1>Hello</h1>
        <button onClick={signOut}>Sign out</button>
        <NewChild />
      </main>
    )}
  </Authenticator>
  )
};
  


