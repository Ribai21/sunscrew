import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaChevronRight } from 'react-icons/fa'

const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  const breadcrumbNames = {
    'products': 'Products',
    'about': 'About Us',
    'contact': 'Contact',
    'why-choose-us': 'Why Choose Us',
    'product': 'Product Details'
  }

  if (location.pathname === '/') return null

  return (
    <nav className="bg-gray-50 px-4 py-3 border-b">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="flex items-center text-yellow-600 hover:text-yellow-700">
              <FaHome className="mr-1" />
              Home
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
            const isLast = index === pathnames.length - 1
            const displayName = breadcrumbNames[name] || name

            return (
              <li key={name} className="flex items-center">
                <FaChevronRight className="mx-2 text-gray-400" size={12} />
                {isLast ? (
                  <span className="text-gray-600 font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-yellow-600 hover:text-yellow-700">
                    {displayName}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb