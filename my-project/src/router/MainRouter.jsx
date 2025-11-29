import LoginForm from "../components/LoginForm.jsx";
import {createBrowserRouter, Navigate} from "react-router-dom";
import RegisterForm from "../components/RegisterForm.jsx";
import HomePage from "../components/HomePage.jsx";
import EditUser from "../components/EditUser.jsx";
import RequireNotAuthRoute from "../components/RequireNotAuthRoute.jsx";
import RequireAuthRoute from "../components/RequireAuthRoute.jsx";
import ProfilePage from "../components/ProfilePage.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import UploadProfilePicture from "../components/UploadProfilePicture.jsx";


const router = createBrowserRouter([
    {
        element : <MainLayout />,
        children : [
            {
                path: '/',
                element: <RequireNotAuthRoute children={<LoginForm />} />
            },
            {
                path: '/register',
                element: <RequireNotAuthRoute children={<RegisterForm />}/>
            },
            {
                path: '/home',
                element: <RequireAuthRoute children={<HomePage/>}/>
            },
            {
                path: '/edituser',
                element: <RequireAuthRoute children={<EditUser/>}/>
            },
            {
                path: '/user/:username',
                element: <ProfilePage/>
            },
            {
                path: '/profilepicture',
                element: <RequireAuthRoute children={<UploadProfilePicture/>}/>
            }
        ]
    }

]);

export default router;