import { Lock, User, Loader } from "lucide-react";
import { useContext, useState } from "react";

const Login = () => {
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleUserLogin = async () => {
        console.log("User login initiated");  
    }

    return (
        <div className="container mt-4">
            <div className="mb-4">
                <label htmlFor="loginUser" className="d-flex gap-2 mt-2">
                    <User /> Username
                </label>
                <input
                    type="text"
                    id="loginUser"
                    className="form-control mt-2 mb-2"
                    placeholder="Enter your username"
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="loginPassword" className="d-flex gap-2 mt-2">
                    <Lock /> Password
                </label>
                <input
                    type="password"
                    id="loginPassword"
                    className="form-control mt-2 mb-2"
                    placeholder="Enter your password"
                    onChange={handleChange}
                />
            </div>

            <button
                className="btn btn-primary mt-3 mb-2"
                type="button"
                onClick={handleUserLogin}
                style={{ cursor: "pointer", background: "#5d00dfc3", borderColor: "#5d00dfc3", width: "100%" }}
                disabled={loading}
            >
                {loading && <Loader className="me-2 spin-animation" />}
                {loading ? "Logging..." : "Login"}
            </button>

        </div>)
}
export default Login;