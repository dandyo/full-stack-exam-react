import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PostsContextProvider } from './context/PostContext';

import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostsContextProvider>
      <App />
    </PostsContextProvider>
  </React.StrictMode>
);
