import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import ProtectedRoute from './services/protectedRoute';
import ResetPasswordPage from './components/ResetPassword';
import InstructorPage from './components/InstructorPage';
import { ThemeProvider } from './components/ThemeProvider';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<HomePage/>
  },
  {
    path:'/reset-password',
    element:<ResetPasswordPage/>
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute allowedRoles={['student']}>
        <MainPage />
      </ProtectedRoute>
    )
  },
  {
    path: '/instructor',
    element: (
      <ProtectedRoute allowedRoles={['instructor']}>
        <InstructorPage />
      </ProtectedRoute>
    ),
  },
  
]);
function App() {

  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  )
}

export default App
