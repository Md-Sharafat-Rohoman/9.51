import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PriveteRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }


    return <Navigate to='/login'></Navigate>
};

export default PriveteRoute;

PriveteRoute.PropTypes = {
    children: PropTypes.node,
}