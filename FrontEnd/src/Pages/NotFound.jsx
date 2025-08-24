import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-yellow-500">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link 
          to="/" 
          className="inline-flex items-center bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
        >
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound