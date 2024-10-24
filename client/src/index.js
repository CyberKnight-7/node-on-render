import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider forceColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
);
