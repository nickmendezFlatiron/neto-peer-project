import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import App from "./App";
import Error from './components/Error/Error';
import HabitDashboard from './components/HabitDashboard/HabitDashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <UserDashboard />
      },
      {
        path: "/habits/:id",
        element: <HabitDashboard />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
