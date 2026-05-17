"use client";

import { useState } from "react";
import { LogIn, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

const SignIn2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    alert("Sign in successful! (Demo)");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm bg-gradient-to-b from-sky-50 to-white rounded-3xl shadow-xl p-8 flex flex-col items-center border border-blue-100 text-black">
        
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white mb-6 shadow-lg">
          <LogIn className="w-7 h-7 text-black" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2 text-center">
          Sign In
        </h2>

        <p className="text-gray-500 text-sm mb-6 text-center">
          Make a new doc to bring your words, data, and teams together.
        </p>

        {/* Inputs */}
        <div className="w-full flex flex-col gap-3 mb-2">
          
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-sm"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSignIn();
                }
              }}
            />
          </div>

          {/* Error + Forgot */}
          <div className="flex items-center justify-between">
            {error ? (
              <p className="text-sm text-red-500">{error}</p>
            ) : (
              <div />
            )}

            <button className="text-xs hover:underline font-medium">
              Forgot password?
            </button>
          </div>
        </div>

        {/* Sign In */}
        <button
          onClick={handleSignIn}
          className="w-full bg-gradient-to-b from-gray-700 to-gray-900 text-white font-medium py-2 rounded-xl shadow hover:brightness-105 transition mb-3 mt-2"
        >
          Get Started
        </button>

        {/* Signup Redirect */}
        <button
        onClick={()=> router.push("/signup")}
          className="w-full bg-gray-200 text-black font-semibold py-2 rounded-xl shadow hover:bg-gray-300 transition"
        >
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-5">
          <div className="flex-grow border-t border-dashed border-gray-200" />

          <span className="mx-2 text-xs text-gray-400">
            Or sign in with
          </span>

          <div className="flex-grow border-t border-dashed border-gray-200" />
        </div>

        {/* Social Login */}
        <div className="flex gap-3 w-full justify-center">
          
          <button className="flex items-center justify-center h-12 rounded-xl border bg-white hover:bg-gray-100 transition flex-1">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />
          </button>

          <button className="flex items-center justify-center h-12 rounded-xl border bg-white hover:bg-gray-100 transition flex-1">
            <img
              src="https://www.svgrepo.com/show/448224/facebook.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </button>

          <button className="flex items-center justify-center h-12 rounded-xl border bg-white hover:bg-gray-100 transition flex-1">
            <img
              src="https://www.svgrepo.com/show/511330/apple-173.svg"
              alt="Apple"
              className="w-6 h-6"
            />
          </button>

        </div>
      </div>
    </div>
  );
};

export default SignIn2;