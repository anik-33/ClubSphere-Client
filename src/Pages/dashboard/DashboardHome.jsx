import UseRole from '@/Hooks/UseRole';
import React from 'react';
import AdminHome from './adminHome/AdminHome';
import ManagerHome from './managerHome/ManagerHome';
import UserHome from './userHome/UserHome';

const DashboardHome = () => {
    const {role}= UseRole();

if(role==='admin'){
    return <AdminHome></AdminHome>
}
else if(role==='manager'){
    return <ManagerHome></ManagerHome>
}

else{
    return <UserHome></UserHome>
}

    
};

export default DashboardHome;