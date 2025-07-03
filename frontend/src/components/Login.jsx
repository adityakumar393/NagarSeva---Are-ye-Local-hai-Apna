import { signInWithGoogle } from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const token = await result.user.getIdToken();

      await axios.post(
        "http://localhost:5000/api/auth/google-login",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      alert("Logged in successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
