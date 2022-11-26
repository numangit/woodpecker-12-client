import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../Contexts/AuthProvider';
import useRoleCheck from '../../hooks/useRoleCheck';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [role, isRoleLoading] = useRoleCheck(user?.email);
    const location = useLocation();

    if (loading || isRoleLoading) {
        return <Loader></Loader>
    }

    if (user && role === "seller") {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;