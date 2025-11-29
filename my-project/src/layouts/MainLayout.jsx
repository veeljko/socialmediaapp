import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

export default function MainLayout() {
    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4">
                <Outlet /> {/* child routes render here */}
            </div>
        </>
    );
}
