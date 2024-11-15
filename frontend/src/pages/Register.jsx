import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Wallet,
  Lock,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real application, you would validate credentials here
      if (email && walletAddress && password) {
        setSuccessMessage("Sign in successful!");
        setErrorMessage("");
        // Redirect to the desired page after successful sign-in
        setTimeout(() => {
          router.push("/dashboard"); // Replace with your desired route
        }, 1500);
      } else {
        throw new Error("Please fill in all fields");
      }
    } catch (err) {
      setErrorMessage(err.message || "Failed to sign in. Please try again.");
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
        <div className="rounded-2xl shadow-2xl p-8 border border-black-800">
          <motion.h1
            className="text-center text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sign In
          </motion.h1>

          <motion.h2
            className="text-center text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Enter your credentials to access your account
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

          <form onSubmit={handleSignIn}>
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
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 pl-10"
                  required
                />
                <Mail
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <label
                className="block text-gray-300 text-sm font-semibold mb-2"
                htmlFor="walletAddress"
              >
                Wallet Address
              </label>
              <div className="relative">
                <input
                  id="walletAddress"
                  type="text"
                  placeholder="Enter your wallet address"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 pl-10"
                  required
                />
                <Wallet
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
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
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 pl-10"
                  required
                />
                <Lock
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </motion.div>

            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="submit"
                className="w-full bg-black-600 hover:bg-black-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Sign In
                <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>
          </form>

          <motion.div
            className="text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Sign up
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
