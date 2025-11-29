import {useAuthContext} from "../hooks/useAuthContext.jsx";
import {useState} from "react";
import {useUserProfilePictureUploader} from "../hooks/useUserProfilePictureUploader.jsx";


function UploadProfilePicture(){
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState({});
    const {uploadProfilePicture} = useUserProfilePictureUploader();


    return (
        <div>
            <h2>Update Profile Picture</h2>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
            />

            {file && (
                <div>
                    <p>Preview:</p>
                    <img
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        width={150}
                        height={150}
                    />
                </div>
            )}

            <button onClick={() => uploadProfilePicture(file, setLoading, setError, setUser, setFile)} disabled={!file || loading}>
                {loading ? "Uploading..." : "Upload"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default UploadProfilePicture;