import {useAuthContext} from "./useAuthContext.jsx";


export const useUserProfilePictureUploader = ()=>{
    const { token } = useAuthContext();

    const uploadProfilePicture = async (file, setLoading, setError, setUser, setFile) => {
        if (!file) return;

        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("image", file);

            const res = await fetch("http://localhost:5000/api/setprofilepicture", {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData,
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Upload failed");
            else{
                console.log("file uploaded!");
            }
            // Update user context/state with new profile picture
            setUser(prev => ({ ...prev, profilePictureUrl: data.profilePicture }));

            setFile(null); // reset input
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return {uploadProfilePicture};
}
