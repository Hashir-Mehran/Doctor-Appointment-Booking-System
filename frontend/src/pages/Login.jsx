import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
//  const onSubmitHandler = async (event) => { 
//  event.preventDefault(); 
//  }

  return (
    <form className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
      <div className="w-full max-w-sm bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-[0_8px_40px_rgb(0,0,0,0.08)] p-8 transition-transform duration-300 hover:scale-[1.02]">
        {/* Title */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            {state === "Sign Up" ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-500 mt-1">
            Please {state === "Sign Up" ? "sign up" : "log in"} to book your
            appointment
          </p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          {state === "Sign Up" && (
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 mt-6 text-white text-base font-medium rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Switch State */}
        <p className="text-center text-gray-600 mt-5 text-sm">
          {state === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-blue-600 font-medium hover:underline cursor-pointer"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-blue-600 font-medium hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  );
};

export default Login;
