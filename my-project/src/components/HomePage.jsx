import { useEffect, useState } from "react";
import {useUserInfo} from "../hooks/useUserInfo.jsx";
import {useAuthContext} from "../hooks/useAuthContext.jsx";
import {useProfileInfo} from "../hooks/useProfileInfo.jsx";

function HomePage() {
    const {token} = useAuthContext();
    const { getUserInfo } = useUserInfo();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            await getUserInfo(token, setUser);
        }
        fetchData();
        setLoading(false);
    }, [token]);

    if (loading) return <p>Loading...</p>;
    // const { token } = useAuthContext(); // your user context
    // const [file, setFile] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState("");
    // const [user, setUser] = useState({});
    //
    // const handleUpload = async () => {
    //     if (!file) return;
    //
    //     setLoading(true);
    //     setError("");
    //
    //     try {
    //         const formData = new FormData();
    //         formData.append("image", file);
    //
    //         const res = await fetch("http://localhost:5000/api/setprofilepicture", {
    //             method: "PUT",
    //             headers: {
    //                 "Authorization": `Bearer ${token}`,
    //             },
    //             body: formData,
    //         });
    //         const data = await res.json();
    //
    //         if (!res.ok) throw new Error(data.message || "Upload failed");
    //         else{
    //             console.log("file uploaded!");
    //         }
    //         // Update user context/state with new profile picture
    //         setUser(prev => ({ ...prev, profilePictureUrl: data.profilePicture }));
    //
    //         setFile(null); // reset input
    //     } catch (err) {
    //         console.error(err);
    //         setError(err.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    //
    //
    // return (
    //     <div>
    //         <h2>Update Profile Picture</h2>
    //
    //         <input
    //             type="file"
    //             accept="image/*"
    //             onChange={(e) => setFile(e.target.files[0])}
    //         />
    //
    //         {file && (
    //             <div>
    //                 <p>Preview:</p>
    //                 <img
    //                     src={URL.createObjectURL(file)}
    //                     alt="preview"
    //                     width={150}
    //                     height={150}
    //                 />
    //             </div>
    //         )}
    //
    //         <button onClick={handleUpload} disabled={!file || loading}>
    //             {loading ? "Uploading..." : "Upload"}
    //         </button>
    //
    //         {error && <p style={{ color: "red" }}>{error}</p>}
    //     </div>
    // );



    return (
        <div>
            <h3>User Info</h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
};

export default HomePage;
