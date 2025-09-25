"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = login({
      email: formData.email,
      password: formData.password,
    });

    if (result.ok) {
      setMessage(`✅ Welcome back!`);
      setFormData({ email: "", password: "" });
    } else {
      setMessage(`❌ ${result.message}`);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (message.startsWith("✅")) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ab886d]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#493628] p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#493628]/30"
      >
        <h2 className="text-2xl font-bold mb-6 text-center !text-[#fffbe9]">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#fffbe9]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-[#a27b5c]/60 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#a27b5c] bg-white"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-[#fffbe9]">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-[#a27b5c]/60 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#a27b5c] bg-white"
            required
          />
        </div>

        <div className="flex w-full justify-end mb-4 !text-[#fffbe9] items-center gap-2">
          <p className="m-0">Don't have an account?</p>
          <Link
            className="!text-[#fffbe9] !font-bold transition !no-underline"
            href={"/signup"}
          >
            Sign-up
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="!rounded-2xl w-full bg-[#ab886d] text-white py-2 hover:bg-[#a27b5c] transition disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && (
          <p
            className={`text-center mt-4 text-sm ${
              message.startsWith("✅") ? "text-green-700" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
