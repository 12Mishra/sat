import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const Login = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(
        "http://your-backend-api.com/send-otp",
        { email }
      );
      setSuccessMessage(response.data.message || "OTP sent to your email.");
      setErrorMessage("");
      setStep(2); 
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || "Failed to send OTP. Please try again."
      );
      setSuccessMessage("");
    }
  };

  const handleVerifyOtpAndSignup = async () => {
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccessMessage("Account created successfully!");
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Failed to verify OTP. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className=" rounded-2xl shadow-2xl p-8 ">
          <motion.h1
            className="text-center text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sign up
          </motion.h1>

          <motion.h2
            className="text-center text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {step === 1
              ? "Enter your email to receive an OTP"
              : "Enter the OTP and set your password"}
          </motion.h2>

          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center text-green-400 mb-4 bg-green-900/30 p-3 rounded-lg"
            >
              <CheckCircle className="mr-2" size={20} />
              {successMessage}
            </motion.div>
          )}

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center text-red-400 mb-4 bg-red-900/30 p-3 rounded-lg"
            >
              <AlertCircle className="mr-2" size={20} />
              {errorMessage}
            </motion.div>
          )}

          {step === 1 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <label
                className="block text-gray-300 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-black-800 text-black border border-white-500 rounded-lg focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 pl-10"
                />
                <Mail
                  className="absolute left-3 top-2.5 text-blue-500"
                  size={20}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-300 text-sm font-semibold mb-2"
                  htmlFor="otp"
                >
                  OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-blue-500 rounded-lg focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-300 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-blue-500 rounded-lg focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 pl-10"
                  />
                  <Lock
                    className="absolute left-3 top-2.5 text-blue-500"
                    size={20}
                  />
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={step === 1 ? handleSendOtp : handleVerifyOtpAndSignup}
              className="w-full bg-black-600 hover:bg-balck-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              {step === 1 ? "Send OTP" : "Sign up"}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </motion.div>

          <motion.div
            className="text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Sign in
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
