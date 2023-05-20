import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import ChildCreate from './ui-components/ChildCreate';
import Childlist from './ui-components/ChildList';

Amplify.configure(awsExports);

export default function App({ user }){
  return(
    <Authenticator hideSignUp={true}>
    {
      (
        { signOut, user }
      ) => (
        <main>
          <h1>Welcome to Red Bag</h1>
          <button onClick={signOut}>Sign out</button>
          <Childlist /> 
          <ChildCreate />
        </main>
      )
    }
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

