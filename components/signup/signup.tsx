"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  password: string;
}

const SignUp: React.FC = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
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

    const result = register({ ...formData, id: Date.now().toString() });

    if (result.ok) {
      setMessage(`✅ ${result.message}`);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        password: "",
      });
    } else {
      setMessage(`❌ ${result.message}`);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (message.startsWith("✅")) {
      const timer = setTimeout(() => {
        router.push("/login");
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
          Sign Up
        </h2>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#fffbe9]">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-[#a27b5c]/60 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#a27b5c] bg-white"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#fffbe9]">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-[#a27b5c]/60 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#a27b5c] bg-white"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#fffbe9]">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[#a27b5c]/60 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#a27b5c] bg-white"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#fffbe9]">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-[#a27b5c]/60 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#a27b5c] bg-white"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#fffbe9]">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full border border-[#a27b5c]/60 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#a27b5c] bg-white"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-[#fffbe9]">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-[#a27b5c]/60 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#a27b5c] bg-white"
            required
          />
        </div>

        {/* Redirect to login */}
        <div className="flex w-full justify-end mb-4 !text-[#fffbe9] items-center gap-2">
          <p className="m-0">Already have an account?</p>
          <Link
            className="!text-[#fffbe9] !font-bold transition !no-underline"
            href={"/login"}
          >
            Login
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="!rounded-2xl w-full bg-[#ab886d] text-white py-2 hover:bg-[#a27b5c] transition disabled:bg-gray-400"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {/* Message */}
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

export default SignUp;
