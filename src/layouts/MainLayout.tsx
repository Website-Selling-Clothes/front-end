import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, logout, cart, isAdmin } = useApp()

  const handleLogout = () => {
    logout()
    setIsUserMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              Fashion Store
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-pink-600">
                Trang chủ
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-pink-600">
                Sản phẩm
              </Link>
              <Link to="/cart" className="text-gray-600 hover:text-pink-600">
                Giỏ hàng ({cart.length})
              </Link>
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center text-gray-600 hover:text-pink-600 focus:outline-none"
                  >
                    <span>{user.name}</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Quản trị
                        </Link>
                      )}
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Thông tin cá nhân
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Đơn hàng của tôi
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="text-gray-600 hover:text-pink-600">
                  Đăng nhập
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-600 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                to="/products"
                className="block text-gray-600 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sản phẩm
              </Link>
              <Link
                to="/cart"
                className="block text-gray-600 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Giỏ hàng ({cart.length})
              </Link>
              {user ? (
                <>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="block text-gray-600 hover:text-pink-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Quản trị
                    </Link>
                  )}
                  <Link
                    to="/profile"
                    className="block text-gray-600 hover:text-pink-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Thông tin cá nhân
                  </Link>
                  <Link
                    to="/orders"
                    className="block text-gray-600 hover:text-pink-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đơn hàng của tôi
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-gray-600 hover:text-pink-600"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block text-gray-600 hover:text-pink-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng nhập
                </Link>
              )}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Về chúng tôi</h3>
              <p className="text-gray-300">
                Fashion Store - Nơi mang đến cho bạn những sản phẩm thời trang
                chất lượng và phong cách nhất.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
              <p className="text-gray-300">
                Email: contact@fashionstore.com
                <br />
                Điện thoại: (84) 123-456-789
                <br />
                Địa chỉ: 123 Đường ABC, Quận XYZ
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Theo dõi chúng tôi</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout 