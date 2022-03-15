import { useContext } from "react";
import { SubsContext } from "../../context/subsContext";
import {Outlet,Navigate} from "react-router-dom"

const PrivateSubs = ({element:Component, ...rest}) =>{

    const [state,dispacth]= useContext(SubsContext)

    return state.isSubs ? <Outlet/> : <Navigate to="/home"/>;
};

export default PrivateSubs