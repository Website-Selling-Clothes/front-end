import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useApp } from '../contexts/AppContext'

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { user, logout } = useApp()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <Link
            to="/admin"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700"
          >
            <span className="mx-3">Dashboard</span>
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700"
          >
            <span className="mx-3">Quản lý sản phẩm</span>
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700"
          >
            <span className="mx-3">Quản lý đơn hàng</span>
          </Link>
          <Link
            to="/admin/users"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700"
          >
            <span className="mx-3">Quản lý người dùng</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`min-h-screen ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } transition-margin duration-200 ease-in-out`}
      >
        {/* Header */}
        <header className="bg-white shadow">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 hover:text-gray-600"
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
            <div className="flex items-center">
              <span className="text-gray-800 mr-4">{user?.name}</span>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-800"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout 