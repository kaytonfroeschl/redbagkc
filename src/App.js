import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ChildCreate from './components/ChildCreate';
import UseKidsContext from './hooks/use-kids-context';
import { useEffect } from 'react';
import ChildTable from './components/ChildTable';

function App({ user }) {
  //console.log("App.js Begin");

  const { fetchKids } = UseKidsContext();
  //console.log("App.js useEffect(fetchKids)");  
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
            <ChildTable />             
          </main>
        )
      }
    </Authenticator>
  );
}

export default App;