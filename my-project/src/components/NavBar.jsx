import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext.jsx";

export default function NavBar() {
    const { token, dispatch } = useAuthContext();

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
    };

    return (

        <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    MyApp
                </Link>

                {/* Links */}
                <div className="flex gap-6 text-lg">

                    {!token ? (
                        <>
                            <Link
                                to="/"
                                className="hover:text-blue-400 transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="hover:text-blue-400 transition"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/home"
                                className="hover:text-blue-400 transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/edituser"
                                className="hover:text-blue-400 transition"
                            >
                                Edit User
                            </Link>

                            <Link
                                to="/profilepicture"
                                className="hover:text-blue-400 transition"
                            >
                                Change Avatar
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="hover:text-red-400 transition"
                            >
                                Logout
                            </button>
                        </>
                    )}

                </div>
            </div>
        </nav>
    );
}
