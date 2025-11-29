import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext.jsx";

export default function RequireAuthRoute({ children }) {
    const { token, loading } = useAuthContext();

    if (loading) return <div>Loading...</div>;

    return token ? children : <Navigate to="/" />;
}