import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return  <progress className="progress w-56"></progress>
    }
    if(user){
        return children;

    }
    return <Navigate to='/login' state={location.pathName}></Navigate>;
};

export default PrivetRoutes;