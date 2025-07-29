"use client"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
    agreeToTerms: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Store signup data in localStorage
    const signupData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      role: formData.role,
      signupTime: new Date().toISOString(),
    }

    // Get existing users or initialize empty array
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")

    // Check if user already exists
    const userExists = existingUsers.some((user) => user.email === formData.email)
    if (userExists) {
      setErrors({ email: "User with this email already exists" })
      return
    }

        // Prevent signup as Admin
    if (formData.role === "Admin") {
    alert("Admin account cannot be created via signup.")
    return
    }

    // Add password before saving
    const fullSignupData = {
    ...signupData,
    password: formData.password,
    }

    existingUsers.push(fullSignupData)
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers))

    alert(`Account created successfully! Welcome ${formData.firstName} ${formData.lastName}`)
    console.log("Signup data stored:", signupData)

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "Student",
      agreeToTerms: false,
    })
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

      {/* Right Side - Signup Form */}
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
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Sign Up</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-600">*</span>
                    </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>

                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-600">*</span>
                    </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500 ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder="Enter password"
                        className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500 ${
                            errors.password ? "border-red-500" : "border-gray-300"
                        }`}
                        />
                        <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                    </div>

                {/*Confirm Password Fields */}
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                        <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm password"
                        className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500 ${
                            errors.confirmPassword ? "border-red-500" : "border-gray-300"
                        }`}
                        />
                        <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                    </div>

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
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>

              {/* Terms and Conditions */}
              <div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
                    I agree to the{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                      onClick={() => alert("Terms and conditions would be displayed here")}
                    >
                      Terms and Conditions
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                      onClick={() => alert("Privacy policy would be displayed here")}
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>
                {errors.agreeToTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>}
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => (window.location.href = "/")}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
