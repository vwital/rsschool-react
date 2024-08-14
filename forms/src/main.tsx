import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactForm from './pages/ReactForm/ReactForm.tsx';
import UncontrolledForm from './pages/UncontrolledForm/UncontrolledForm.tsx';
import './index.css';

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/react-form', element: <ReactForm /> },
    { path: '/uncontrolled-form', element: <UncontrolledForm /> },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
