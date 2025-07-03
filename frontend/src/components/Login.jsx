import { signInWithGoogle } from "../firebase";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Login() {
  const handleLogin = async () => {
   try {
  const tokenId = await user.getIdToken();
  await axios.post("http://localhost:5000/api/auth/google-login", { tokenId }, {
    withCredentials: true,
  });

  toast.success("✅ Logged in successfully!");
  navigate("/submit-complaint");
} catch (error) {
  toast.error("❌ Login failed");
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
