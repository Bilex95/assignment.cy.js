import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && password && termsAccepted) {
      // alert("Signup successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Please fill all fields and accept terms.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6 homepage-title"
          id="homepage-title-id">Sign Up</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border p-3 rounded-md mb-3 focus:ring-2 focus:ring-blue-400 email"
          id="email-id"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full border p-3 rounded-md mb-3 focus:ring-2 focus:ring-blue-400 password"
          id="password-id"
        />
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full border p-3 rounded-md mb-3 focus:ring-2 focus:ring-blue-400 select-user"
          id="select-user-id"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <div className="flex items-center gap-2 mb-4 accept-check">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="w-5 h-5 accent-blue-500 check-me"
            id="check-me"
          />
          <span className="text-gray-700">Accept Terms and Conditions</span>
        </div>
        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition btn-submit"
          id="btn-submit-id"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
