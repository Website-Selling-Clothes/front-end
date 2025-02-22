import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'

  
const MainLayout = () => {
  
  return (
    <div className="main-layout">

      <Navbar />

    
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