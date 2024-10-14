import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import { LoaderProvider } from './utils/LoaderUtil';
import { Layout } from './components/Layout';
import App from './App';
import { CountryPage } from './pages/CountryPage';
import { SighInPage } from './pages/SignInPage';
import { SighUpPage } from './pages/SignUpPage';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    )
  },
  {
    path: "/country/:country",
    element: (
      <Layout>
        <CountryPage />
      </Layout>
    )
  },
  {
    path: "/login",
    element: (
      <Layout>
        <SighInPage />
        {/* <ThemeSwitch /> */}
      </Layout>
    )
  },
  {
    path: "/register",
    element: (
      <Layout>
        <SighUpPage />
        {/* <ThemeSwitch /> */}
      </Layout>
    )
  },
])

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <QueryClientProvider client={queryClient}>
      <LoaderProvider>
        <RouterProvider router={router} />
      </LoaderProvider>
    </QueryClientProvider >
  );
}
