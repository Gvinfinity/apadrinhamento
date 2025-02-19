import { useContext } from "react"
import { AuthContext } from "../context"

//Hook para Usuario
export const useAuth = () => {
    return useContext(AuthContext)
}