import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ChildCreate from './components/ChildCreate';
import UseKidsContext from './hooks/use-kids-context';
import { useEffect } from 'react';
import ChildTable from './components/ChildTable';

function App({ user }) {
  console.log("App.js Begin");

  const { fetchKids } = UseKidsContext();
  console.log("App.js A");  
  useEffect(() => {fetchKids()}, [fetchKids]);  
  console.log("App.js B");

  return (
      <Authenticator hideSignUp={true}>
      {
        (
          { signOut, user }
        ) => (
          <main>
            <h1>Welcome to Red Bag</h1>
            <button onClick={signOut}>Sign out</button>
            {console.log("App.js Before ChildTable")}
            <ChildTable /> 
            {console.log("App.js Before ChildCreate")}
            <ChildCreate />
            {console.log("App.js End")}
          </main>
        )
      }
    </Authenticator>
  );
}

export default App;