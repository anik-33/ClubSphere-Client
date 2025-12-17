import Loading from '@/components/loading/Loading';
import useAuth from '@/Hooks/useAuth';
import UseRole from '@/Hooks/UseRole';
import React from 'react';


const ManagerRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = UseRole()

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'manager') {
        return <div>Forbiden route boka***</div>
    }

    return children;
};

export default ManagerRoute;
