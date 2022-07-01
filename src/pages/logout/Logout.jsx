import './logout.scss'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext"
import { useContext, useState } from "react";

const Logout = () => {

    const [email] = useState("");
    const [password] = useState("");

    const auth = getAuth();
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext)


    signOut(auth, email, password)
      .then((userCredential) => {
        // Signed out
        //const user = userCredential.user;
        dispatch({type:"LOGOUT", payload:null})
        navigate("/")
      })
      .catch((error) => {
        console.log(error.message);
      });


  return (
    <div>Logout</div>
  )
}

export default Logout