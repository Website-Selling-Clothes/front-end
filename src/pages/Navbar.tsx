import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { FaRegBell } from 'react-icons/fa6';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegStar } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout, cart, isAdmin } = useApp();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#000000]">
            Fashion Store
          </Link>

          {/* Search Bar */}
          <div className="flex-1 mx-4 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="w-full border rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#181818]"
                placeholder={isMobile ? "Tìm kiếm..." : "Tìm kiếm sản phẩm..."}
              />
              <button className="absolute right-0 top-0 h-full px-4 text-black rounded-r-full hover:bg-[#c7bfbf] flex items-center">
                <IoIosSearch size={25} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#000000]">
              <FaRegBell size={25} />
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-[#000000]">
              <IoPersonCircleOutline size={25} />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-[#000000]">
              <LuShoppingCart size={25} />
            </Link>
            <Link to="/Like" className="text-gray-600 hover:text-[#000000]">
              <FaRegStar size={25} />
            </Link>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center text-gray-600 hover:text-[#000000] focus:outline-none"
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
              <Link to="/login" className="text-gray-600 hover:text-[#000000]">
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
              className="block text-gray-600 hover:text-[#000000]"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/products"
              className="block text-gray-600 hover:text-[#000000]"
              onClick={() => setIsMenuOpen(false)}
            >
              Sản phẩm
            </Link>
            <Link
              to="/cart"
              className="block text-gray-600 hover:text-[#000000]"
              onClick={() => setIsMenuOpen(false)}
            >
              Giỏ hàng ({cart.length})
            </Link>
            {user ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="block text-gray-600 hover:text-[#000000]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Quản trị
                  </Link>
                )}
                <Link
                  to="/profile"
                  className="block text-gray-600 hover:text-[#000000]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Thông tin cá nhân
                </Link>
                <Link
                  to="/orders"
                  className="block text-gray-600 hover:text-[#000000]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đơn hàng của tôi
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-600 hover:text-[#000000]"
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block text-gray-600 hover:text-[#000000]"
                onClick={() => setIsMenuOpen(false)}
              >
                Đăng nhập
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;