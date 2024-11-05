import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import { LoaderProvider } from './provider/LoaderUtil';
import { Layout } from './components/Layout';
import { App } from './App';
import { Routes } from './common/routes';
import { CountryPage } from './pages/CountryPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { NotAuthorized } from './pages/NotAuthorized';
import { Navbar } from './components/Navbar';
// import { UndefinedPage, CountryPage, SignInPage, SignUpPage } from './pages/index'; //TODO imports to 1 stroke

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: (
      <Layout>
        <App />
      </Layout>
    )
  },
  {
    // path: `${Routes.Country}/:countryName`,
    path: 'country/:countryName',
    element: (
      <Layout>
        <CountryPage />
      </Layout>
    )
  },
  {
    path: Routes.SignIn,
    element: (
      <>
        <Navbar isDark={true} />
        <SignInPage />
      </>
    )
  },
  {
    path: Routes.SignUp,
    element: (
      <>
        <Navbar isDark={true} />
        <SignUpPage />
      </>
    )
  },
  {
    path: '*',
    element: <NotAuthorized />
  }
])

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <QueryClientProvider client={queryClient}>
      <LoaderProvider>
        <RouterProvider router={router} /> {/*TODO RouterProvider to other component*/}
      </LoaderProvider>
    </QueryClientProvider >
  );
}
