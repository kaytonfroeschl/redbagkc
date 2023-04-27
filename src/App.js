import CreateFrom from "./ui-components/RBLCreateForm.jsx";
import UpdateForm from "./ui-components/RBLUpdateForm.jsx";
import { NewChild } from './ui-components';
import { ChildCreateForm } from './ui-components';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';



import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App({ user }){
  return(
    <Authenticator hideSignUp={true}>
    {({ signOut, user }) => (
      <main>
        <h1>Hello</h1>
        <button onClick={signOut}>Sign out</button>
        <ChildCreateForm />
      </main>
    )}
  </Authenticator>
  )
};
  

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

