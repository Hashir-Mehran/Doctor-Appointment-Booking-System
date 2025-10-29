import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Hashir Mehran",
    image: assets.profile_pic,
    email: "hashirmehran1002@gmail.com",
    phone: "+92 316 8606867",
    address: {
      line1: "Iqbal Colony, Sargodha",
      line2: "Punjab, Pakistan",
    },
    gender: "Male",
    dob: "2005-10-10",
  });
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl border border-gray-100">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
          <img
            className="w-36 h-36 object-cover rounded-full ring-4 ring-blue-100 shadow-md"
            src={userData.image}
            alt="Profile"
          />
          <div className="text-center sm:text-left">
            {isEdit ? (
              <input
                className="bg-gray-100 text-3xl font-semibold max-w-[250px] text-center sm:text-left px-3 py-1 rounded-md"
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            ) : (
              <h2 className="text-3xl font-semibold text-gray-800">
                {userData.name}
              </h2>
            )}
            <p className="text-blue-500 mt-1">{userData.email}</p>
            <p className="text-gray-500">{userData.phone}</p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
            📞 Contact Information
          </h3>
          <div className="grid grid-cols-[1fr_2fr] gap-y-3 text-gray-700 text-sm">
            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 rounded-md px-3 py-1"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-500">{userData.phone}</p>
            )}

            <p className="font-medium">Address:</p>
            {isEdit ? (
              <div className="flex flex-col gap-1">
                <input
                  className="bg-gray-100 rounded-md px-3 py-1"
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
                <input
                  className="bg-gray-100 rounded-md px-3 py-1"
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </div>
            ) : (
              <p className="text-gray-600">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </section>

        {/* Basic Info */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
            ⚙️ Basic Information
          </h3>
          <div className="grid grid-cols-[1fr_2fr] gap-y-3 text-gray-700 text-sm">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                className="bg-gray-100 rounded-md px-2 py-1"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            ) : (
              <p className="text-gray-600">{userData.gender}</p>
            )}

            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 rounded-md px-3 py-1"
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p className="text-gray-600">
                {new Date(userData.dob).toLocaleDateString()}
              </p>
            )}
          </div>
        </section>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              💾 Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="border border-blue-500 text-blue-600 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              ✏️ Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
