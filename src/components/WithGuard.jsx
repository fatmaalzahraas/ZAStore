import React from 'react'
import useAuth from '../customHooks/useAuth';
import {Navigate} from 'react-router-dom';
import Loading from './Loading';
const WithGuard = (Component) => {
    const ProtectedRoute = () => {
        const {currentUser, load} = useAuth(); 
        return currentUser ? <Loading loading={load}><Component /></Loading> : <Navigate to='/login'/>
    }
    return ProtectedRoute;
}

export default WithGuard