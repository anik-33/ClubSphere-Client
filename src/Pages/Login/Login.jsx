import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import useAuth from "@/Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const { signInUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) return setError("Email and password are required");

    try {
      setLoading(true);
      const result = await signInUser(email, password);
      toast.success("Successfull!");

      console.log("Logged in user:", result.user);
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (err) {
      setError("Invalid email or password", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-transparent text-white
 min-h-screen flex items-center justify-center  p-4">
   <Toaster position="top-center" reverseOrder={false} />
      <div className=" dark:bg-gray-800 shadow-2xl rounded-3xl max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-center mb-6">
          Please login to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100 pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-900 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <SocialLogin></SocialLogin>
        </form>

        <p className="text-center text-xl mt-6">
          Don’t have an account?{" "}
          <Link to='registration'><span className="text-lime-500 cursor-pointer">Sign up</span></Link>
        </p>
      </div>
    </div>
  );
}
