import { getAuth, onAuthStateChanged } from "firebase/auth";
import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../components/Login';
import {Registro} from '../components/Registro';
// import Home from '../containers/Home'

import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         //console.log(user)
         setIsLoggedIn(true)
        }
        else{
         setIsLoggedIn(false)
        }

        setChecking(false)
    })

 
}, [setIsLoggedIn,setChecking])


if(checking){
  return(
      <h1>Espere...</h1>
  )
}


return (
  <Router>
      <Routes>
       
      <Route path="/login" element={
                  <PublicRoute isAuthenticated={isLoggedIn}>
                      <Login/> 
                  </PublicRoute>
              } />



              <Route path="/registro" element={
                  <PublicRoute isAuthenticated={isLoggedIn}>
                      <Registro/>
                  </PublicRoute>
              } />

              
              <Route path="/*" element={
                  <PrivateRoute isAuthenticated={isLoggedIn}>
                      <DashboardRoutes/>
                  </PrivateRoute>
              }/>
      </Routes>
  </Router>
);
};

export default AppRouter;
