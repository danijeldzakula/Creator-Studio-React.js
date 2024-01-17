import { Routes, Route, Navigate } from 'react-router-dom';
// Routes
import SignIn from '../pages/signin-page';
import SignUp from '../pages/signup-page';
import Home from '../pages/home-page';
import Admin from '../pages/admin-page';
import NotFoundError from '../pages/error-page';
import ProtectedRoute from '../layouts/protectedRoute/ProtectedRoute';

export default function Router({ pathname }) {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="" element={<Navigate replace to="/sign-in" />} />

      <Route element={<ProtectedRoute pathname={pathname} redirectPath="/" />}>
        <Route path="dashboard" element={<Home />} />

        <Route path="dashboard">
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<Navigate replace to="admin" />} />
        </Route>
      </Route>

      {/* Catch all error */}
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
}
