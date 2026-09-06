import { useState } from "react";
import axios from "axios";

function LoginPage({token , setToken}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e, token) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/api/auth/login", {
                email,
                password,
            });
            console.log(response);
            setToken(response.data.token);

        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin} className="flex flex-col gap-3 items-start">
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        className="border"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        className="border"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button onClick={() => handleLogin(token)}>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
