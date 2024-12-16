import React from 'react';
import ReactDOM from 'react-dom/client';

import { Theme, ThemePanel } from "@radix-ui/themes";

import '@radix-ui/themes/styles.css';

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme appearance="dark" accentColor="jade">
      <App />
      <ThemePanel defaultOpen={false} />
    </Theme>
  </React.StrictMode>
);
