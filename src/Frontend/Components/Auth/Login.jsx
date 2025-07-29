"use client"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { useNavigate } from "react-router-dom"; // Add this at the top

const ADMIN_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "admin123",
}


const Login = () => {
  const navigate = useNavigate(); // Initialize it inside your component
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "Admin",
    rememberMe: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

const handleSubmit = (e) => {
  e.preventDefault()

  const { email, password, role, rememberMe } = formData

  // 1. Check for hardcoded Admin
  if (role === "Admin") {
    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      const loginData = {
        email,
        role,
        loginTime: new Date().toISOString(),
        rememberMe,
      }
      localStorage.setItem("userLogin", JSON.stringify(loginData))
      localStorage.setItem("isLoggedIn", "true")
      navigate("/admindashboard") // ✅ Navigate ONLY if role is Admin
    } else {
      alert("Invalid Admin credentials!")
    }
    return // 🔒 Stop execution here if role is Admin
  }

  // 2. Check against registered users (Teacher/Student)
  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
  const user = registeredUsers.find(
    (u) => u.email === email && u.role === role && u.password === password
  )

  if (user) {
    const loginData = {
      email: user.email,
      role: user.role,
      loginTime: new Date().toISOString(),
      rememberMe,
    }
    localStorage.setItem("userLogin", JSON.stringify(loginData))
    localStorage.setItem("isLoggedIn", "true")
    alert(`Login successful! Welcome ${user.role}`)

    // ❌ Do NOT navigate to /dashboard if role is Teacher or Student
    // ✅ You can optionally navigate to different pages based on role like this:
    // if (role === "Teacher") navigate("/teacher-dashboard")
    // if (role === "Student") navigate("/student-dashboard")
    
  } else {
    alert("Invalid credentials or user not found.")
  }
}




  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1a365d] via-[#1a365d] to-[#1a365d] p-8 lg:p-12 flex-col justify-center relative overflow-hidden">
     {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg rotate-12"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/2 left-8 w-16 h-16 border border-white/20 rounded-lg rotate-45"></div>
        </div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-16 h-16 mb-6 relative">
              <div className="w-full h-full border-2 border-white rounded-lg flex items-center justify-center transform rotate-12">
                <div className="w-8 h-8 border border-white rounded transform -rotate-12"></div>
              </div>
            </div>

            <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-4">
              National Excellence
              <br />
              Institute
            </h1>

            <p className="text-blue-200 text-lg lg:text-xl font-light">Enterprise Resource Planning System</p>
          </div>

          {/* Image Card */}
          <div className="backdrop-blur-sm rounded-2xl p-4 max-w-md">
            <img
              src="login-image.jpg"
              alt="Students studying in library"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 relative">
              <div className="w-full h-full border-2 border-blue-900 rounded-lg flex items-center justify-center transform rotate-12">
                <div className="w-6 h-6 border border-blue-900 rounded transform -rotate-12"></div>
              </div>
            </div>
            <h2 className="text-blue-900 text-2xl font-bold">National Excellence Institute</h2>
            <p className="text-gray-600 text-sm">Enterprise Resource Planning System</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password <span className="text-red-600">*</span>
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>


              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  onClick={() => navigate("/signup")} // Navigate to signup page
                >
                  Forgot password?
                </button>
              </div>

              {/* Role Selection */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 bg-white"
                >
                  <option value="Admin">Admin</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Student">Student</option>
                </select>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
              >
                Login
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {"Don't have an account? "}
                <button
                  onClick={() => (window.location.href = "/signup")}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
