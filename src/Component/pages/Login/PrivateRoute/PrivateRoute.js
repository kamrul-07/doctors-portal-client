import React from 'react';
import useAuth from '../../../../hooks/useAuth.js'
import { CircularProgress } from '@mui/material';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user,isLoading}=useAuth();
    const location = useLocation();
    if (isLoading) {
        return <CircularProgress color="info" />
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;