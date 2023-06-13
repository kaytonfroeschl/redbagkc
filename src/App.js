import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

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
          <button type="button" class="btn btn-primary" onClick={signOut}>Sign out</button>
          <Childlist /> 
          <ChildCreate />
        </main>
      )
    }
  </Authenticator>
  )
};