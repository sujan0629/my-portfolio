import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App';
import './index.css';

// Get the root element
const rootElement = document.getElementById('root');

// Ensure the root element exists before rendering
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
