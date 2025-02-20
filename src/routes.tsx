import { BrowserRouter, Routes, Outlet, Navigate, Route } from "react-router-dom"

import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";

import { SignupPage, LoginPage, LandPage, HomePage } from "./pages";


const PrivateRoutes = () => {
    const auth = useAuth();
    
    useEffect(() => {
        try {
            auth.verify();
        } catch (error: unknown) {
            console.error(error)
        }
    }, [auth])

    return (
      auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes/>}>
                {/* <Route element={<Outlet/>}> */}
                    <Route path="*" element={<Navigate to='/'/>}/>
                    <Route path="/signup" element={<SignupPage/>}/>
                    <Route path="/dashboard" element={<HomePage/>}/>
                </Route>

                <Route path="/" element={<LandPage />}/>

                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}