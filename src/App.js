import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ChildCreate from './components/ChildCreate';
import Childlist from './components/ChildList';
import UseKidsContext from './hooks/use-kids-context';
import { useEffect } from 'react';

function App({ user }) {
  const { fetchKids } = UseKidsContext();
  
  useEffect(() => {fetchKids()}, [fetchKids]);

  return (
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
  );
}

export default App;