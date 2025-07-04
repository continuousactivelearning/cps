/*Author: Nakshatra Bhandary on 17/6/25*/
/*Modified by Nakshatra Bhandary on 23/6/25*/

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  useAuth();
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
