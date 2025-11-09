import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    education: {
      qualification: "",
      institution: "",
      passingYear: "",
    },
    skills: "",
    about: "",
  });

  const navigate = useNavigate();

  // handle input field change (for both normal + nested)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // handle nested education fields
    if (name.startsWith("education.")) {
      const field = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        education: { ...prev.education, [field]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // convert skills from comma-separated string to array
    const formattedData = {
      ...form,
      skills: form.skills.split(",").map((s) => s.trim()),
    };

    try {
      await axios.post("http://localhost:8000/api/auth/signup", formattedData);
      alert("✅ Account created successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("❌ Signup failed. Please check your details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-10 px-4 text-white">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left column */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
            />
            <select
              name="gender"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <label className="block text-gray-400 text-sm mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
            />
          </div>

          {/* Right column */}
          <div>
            <input
              type="text"
              name="education.qualification"
              placeholder="Qualification (e.g., B.Tech)"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
            />
            <input
              type="text"
              name="education.institution"
              placeholder="Institution Name"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
            />
            <input
              type="text"
              name="education.passingYear"
              placeholder="Passing Year"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
            />
            <input
              type="text"
              name="skills"
              placeholder="Skills (comma separated)"
              onChange={handleChange}
              className="w-full p-2 mb-3 bg-gray-700 rounded outline-none"
            />
            <textarea
              name="about"
              placeholder="About yourself"
              onChange={handleChange}
              className="w-full p-2 h-24 bg-gray-700 rounded outline-none"
            />
          </div>

          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold text-lg transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
