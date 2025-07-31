import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faCog, faSignOutAlt);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
