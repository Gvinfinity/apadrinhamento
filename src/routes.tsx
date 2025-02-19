import { BrowserRouter, Routes, Outlet, Navigate, Route } from "react-router-dom"

import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";

import { SignupPage, LoginPage, HomePage } from "./pages";


const PrivateRoutes = () => {
    const auth = useAuth();
    
    useEffect(() => {
        try {
            auth.verify();
        } catch (error: unknown) {
            console.error(error)
        }
    })

    return (
      auth.token ? <Outlet/> : <Navigate to='/Login'/>
    )
}

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes/>}>
                    <Route path="*" element={<Navigate to='/'/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/singup" element={<SignupPage/>}/>
                </Route>

                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}