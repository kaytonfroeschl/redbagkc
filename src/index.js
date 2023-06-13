
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; // Ensure React UI libraries are styled correctly
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
import { Provider } from './context/kids.js';

//console.log("index.js Begin");
Amplify.configure(awsconfig) // Configures the Amplify libraries with the cloud backend set up via the Amplify CLI

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <ThemeProvider>
        <Provider>
          <App />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
);