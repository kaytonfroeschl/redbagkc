import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';

import awsExports from './aws-exports';
import ChildCreate from './ui-components/ChildCreate';
import Childlist from './ui-components/ChildList';
=======
import UseKidsContext from './hooks/use-kids-context';
import { useEffect } from 'react';
import ChildTable from './components/ChildTable';
>>>>>>> Bill

function App({ user }) {
  //console.log("App.js Begin");

<<<<<<< HEAD
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
=======
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
>>>>>>> Bill
