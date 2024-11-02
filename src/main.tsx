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
import { UndefinedPage } from './pages/UndefinedPage'; //TODO imports to 1 stroke
import { AuthRouter } from './route/AuthRouter';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <AuthRouter> {/*TODO AuthRouter to Layout */} 
          <App />
        </AuthRouter>
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
  {
    path: '*',
    element: <UndefinedPage />
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
//TODO ADD COMMON FOLDER AND ADD ROUTES,TYPES TO IT

//TODO UTILS NAMES TO LOWERCASE