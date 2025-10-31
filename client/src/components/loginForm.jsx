import { useState, useEffect } from "react";
import { Home, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import UserDetailsForm from "./userDetails.jsx";

export default function LoginForm() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [userDet, setUserDet] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/userDetails");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();

      if (user) {
        const mail = JSON.parse(user);
        const olduser = fetchedData.details.filter(
          (emails) => emails.email == mail.userDetails.email
        );
        if (olduser.length !=0) {
          localStorage.setItem("user", JSON.stringify({
          userDetails: mail.userDetails,
          status: true,
        }));
        }
        
        setUser(olduser);
        setUserDet(olduser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);
      localStorage.setItem(
        "user",
        JSON.stringify({ userDetails: userInfo, status: false })
      );
      const response = await fetch("http://localhost:5000/userDetails");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();
      const olduser = fetchedData.details.filter(
        (emails) => emails.email == userInfo.email
      );
      setUser(olduser);
      setUserDet(olduser);
      if (olduser.length != 0) {
        localStorage.setItem(
          "user",
          JSON.stringify({ userDetails: userInfo, status: true })
        );
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

  // Login Page

  return (
    <>
      {!user ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">
                Sign in to continue to your account
              </p>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </button>

            <div className="text-center text-sm text-gray-500">
              By signing in, you agree to our Terms of Service and Privacy
              Policy
            </div>
          </div>
        </div>
      ) : userDet.length == 0 ? (
        <UserDetailsForm></UserDetailsForm>
      ) : (
        (window.location.href = "http://localhost:5173/")
      )}
    </>
  );
}
