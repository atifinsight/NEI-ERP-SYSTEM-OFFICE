"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";



const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileDropdownOpen && !event.target.closest(".profile-dropdown")) {
        setIsProfileDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isProfileDropdownOpen])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 lg:px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 min-w-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.92 0C20.16 27 24 22.55 24 17V7l-10-5zM12 4.44L20 8.44v8.56c0 4.52-3.16 8.24-7 8.96-.84.16-2.16.16-3 0-3.84-.72-7-4.44-7-8.96V8.44l8-4z" />
                <path d="M8 10v6l4-2 4 2v-6l-4-2-4 2z" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-800 truncate">NEI ERP System</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-6 px-3 space-y-1">
          <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="truncate">Dashboard</span>
          </a>

          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            <span className="truncate">Admission</span>
          </a>

          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 11a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zM7 10a1 1 0 100 2h1a1 1 0 100-2H7z" />
            </svg>
            <span className="truncate">Finance</span>
          </a>

          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate">Examination</span>
          </a>

          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="truncate">Reports</span>
          </a>

          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate">Settings</span>
          </a>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleSidebar}></div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-0 min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-3 sm:px-4 lg:px-8">
            <div className="flex items-center min-w-0">
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 mr-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Bar */}
              <div className="hidden md:block relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-48 lg:w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Mobile Search Button */}
              <button className="md:hidden p-2 text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Notification */}
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 10-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>

              {/* User Profile */}
              <div className="relative profile-dropdown">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-2 p-1 sm:p-2 rounded-md hover:bg-gray-100"
                >
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                        src="https://images.peopleimages.com/picture/202307/2702002-laptop-it-and-man-with-glasses-in-studio-white-background-and-programming-digital-code.-happy-asian-male-model-software-developer-and-computer-engineer-typing-on-technology-for-coding-website-data-zoom_90.jpg"
                        alt="User Profile"
                        className="w-full h-full object-cover"
                    />
                    </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700 truncate max-w-24 lg:max-w-none">
                    Admin User
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Settings
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        // Close the dropdown
                        setIsProfileDropdownOpen(false);

                        // Clear user login data
                        localStorage.removeItem("userLogin");
                        localStorage.removeItem("isLoggedIn");

                        // Navigate to login page
                        navigate("/");
                      }}
                    >
                      <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Sign Out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-3 sm:p-4 lg:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {/* Total Students */}
            <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs lg:text-sm text-gray-600">Total Students</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl lg:text-2xl font-bold text-gray-900">2,543</p>
                  <span className="text-xs lg:text-sm font-medium text-green-600">+12%</span>
                </div>
              </div>
            </div>

            {/* Today's Admissions */}
            <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs lg:text-sm text-gray-600">Today's Admissions</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl lg:text-2xl font-bold text-gray-900">28</p>
                  <span className="text-xs lg:text-sm font-medium text-green-600">+5%</span>
                </div>
              </div>
            </div>

            {/* Pending Payments */}
            <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h6zM4 11a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zM7 10a1 1 0 100 2h1a1 1 0 100-2H7z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs lg:text-sm text-gray-600">Pending Payments</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg lg:text-2xl font-bold text-gray-900">PKR 12.5M</p>
                  <span className="text-xs lg:text-sm font-medium text-red-600">-3%</span>
                </div>
              </div>
            </div>

            {/* Active Applications */}
            <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs lg:text-sm text-gray-600">Active Applications</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl lg:text-2xl font-bold text-gray-900">156</p>
                  <span className="text-xs lg:text-sm font-medium text-green-600">+8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Overview and Recent Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {/* Revenue Overview */}
            <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 lg:mb-6">Revenue Overview</h3>
              <div className="h-48 lg:h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="flex justify-center items-end space-x-1 lg:space-x-2 mb-4">
                    <div className="w-3 lg:w-4 h-12 lg:h-16 bg-gray-300 rounded"></div>
                    <div className="w-3 lg:w-4 h-16 lg:h-20 bg-gray-300 rounded"></div>
                    <div className="w-3 lg:w-4 h-8 lg:h-12 bg-gray-300 rounded"></div>
                    <div className="w-3 lg:w-4 h-20 lg:h-24 bg-gray-300 rounded"></div>
                    <div className="w-3 lg:w-4 h-12 lg:h-16 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 lg:mb-6">Recent Activities</h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">New admission approved</p>
                    <p className="text-xs lg:text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Fee payment received</p>
                    <p className="text-xs lg:text-sm text-gray-500">3 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Payment overdue alert</p>
                    <p className="text-xs lg:text-sm text-gray-500">5 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Examinations */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-4 lg:px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Examinations</h3>
            </div>
            
            {/* Desktop/Tablet Table View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        EXAMINATION
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        DATE
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        DEPARTMENT
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        STATUS
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Mid-Term Examination
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">15 Mar 2024</td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">Computer Science</td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Scheduled
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Final Examination
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">25 Mar 2024</td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Electrical Engineering
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                        </span>
                    </td>
                    </tr>
                    <tr>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Practical Assessment
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">10 Apr 2024</td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Mechanical Engineering
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Scheduled
                        </span>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden divide-y divide-gray-200">
                {/* Card 1 */}
                <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                    <h4 className="text-sm font-medium text-gray-900 flex-1 pr-2">Mid-Term Examination</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 flex-shrink-0">
                    Scheduled
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Date</p>
                    <p className="text-gray-900">15 Mar 2024</p>
                    </div>
                    <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Department</p>
                    <p className="text-gray-900">Computer Science</p>
                    </div>
                </div>
                </div>

                {/* Card 2 */}
                <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                    <h4 className="text-sm font-medium text-gray-900 flex-1 pr-2">Final Examination</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 flex-shrink-0">
                    Pending
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Date</p>
                    <p className="text-gray-900">25 Mar 2024</p>
                    </div>
                    <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Department</p>
                    <p className="text-gray-900">Electrical Engineering</p>
                    </div>
                </div>
                </div>

                {/* Card 3 */}
                <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                    <h4 className="text-sm font-medium text-gray-900 flex-1 pr-2">Practical Assessment</h4>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 flex-shrink-0">
                    Scheduled
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Date</p>
                    <p className="text-gray-900">10 Apr 2024</p>
                    </div>
                    <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Department</p>
                    <p className="text-gray-900">Mechanical Engineering</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
