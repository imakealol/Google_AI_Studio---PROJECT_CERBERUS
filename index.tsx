import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalErrorBoundary } from './components/GlobalErrorBoundary';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
        <App />
    </GlobalErrorBoundary>
  </React.StrictMode>
);

// Signal that React has mounted (for splash/boot sequence)
if (typeof window !== 'undefined' && (window as any).signalAppReady) {
  // Small delay to allow initial renders
  setTimeout(() => {
    (window as any).signalAppReady();
  }, 100);
}