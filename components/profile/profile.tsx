"use client";

import { useAuth } from "@/context/AuthContext";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const { loggedIn, user, logout } = useAuth();

  if (!loggedIn)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#ab886d]">
        <p className="text-white text-lg">Please log in to see your profile.</p>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen w-[100%] bg-[#ab886d] p-4">
      <div className="bg-[#493628] p-8 rounded-2xl shadow-lg w-full max-w-md border border-[#493628]/30 text-[#fffbe9]">
        <div className="flex flex-col items-center mb-6">
          {/* Profile picture */}
          <img
            src="/images/default-profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 border-2 border-[#ab886d] object-cover"
          />
          <h2 className="text-2xl font-bold text-center">
            {user?.firstName} {user?.lastName}
          </h2>
        </div>

        {/* User details */}
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {user?.phone}
          </p>
          <p>
            <span className="font-semibold">Date of Birth:</span>{" "}
            {user?.dateOfBirth}
          </p>
        </div>

        {/* Logout button */}
        <button
          onClick={logout}
          className="mt-6 w-full bg-[#ab886d] hover:bg-[#a27b5c] text-white py-2 rounded-2xl flex items-center justify-center gap-2 transition"
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
