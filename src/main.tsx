import {StrictMode, Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';
import App from './App.tsx';
import { AppProvider } from './context/AppContext.tsx';
import './index.css';
import './styles/reveal.css';

const RootLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      <div className="text-xs font-mono font-bold text-red-600 animate-pulse uppercase tracking-[0.2em]">
        Initializing Academy...
      </div>
    </div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<RootLoader />}>
          <AppProvider>
            <App />
          </AppProvider>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

