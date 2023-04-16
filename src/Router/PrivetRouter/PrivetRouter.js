import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className="radial-progress" style={{ "--value": 70 }}>70%</div>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivetRouter;