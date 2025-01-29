import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'

const Cart = () => {
  const { cart, updateCartItemQuantity, removeFromCart } = useApp()
  const [loading, setLoading] = useState(false)

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    updateCartItemQuantity(id, newQuantity)
  }

  const handleRemoveItem = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      removeFromCart(id)
    }
  }

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseInt(item.price.replace(/\D/g, ''))
        return total + price * item.quantity
      }, 0)
      .toLocaleString('vi-VN')
  }

  const handleCheckout = async () => {
    setLoading(true)
    try {
      // TODO: Thực hiện gọi API thanh toán
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert('Đặt hàng thành công!')
    } catch (error) {
      alert('Có lỗi xảy ra khi đặt hàng')
    } finally {
      setLoading(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Giỏ hàng trống</h2>
        <p className="text-gray-600 mb-8">
          Bạn chưa có sản phẩm nào trong giỏ hàng
        </p>
        <Link
          to="/products"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors"
        >
          Tiếp tục mua sắm
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Giỏ hàng</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-4 border-b last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600 mb-2">Kích thước: {item.size}</p>
                  <p className="text-pink-600 font-bold">{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-3 py-1 border rounded-lg disabled:opacity-50"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={loading}
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity}</span>
                    <button
                      className="px-3 py-1 border rounded-lg disabled:opacity-50"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                      disabled={loading}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 disabled:opacity-50"
                  disabled={loading}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Tổng đơn hàng</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{calculateTotal()}đ</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span>30.000đ</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Tổng cộng:</span>
                  <span className="text-pink-600">
                    {(parseInt(calculateTotal().replace(/\D/g, '')) + 30000).toLocaleString(
                      'vi-VN'
                    )}
                    đ
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Đang xử lý...' : 'Tiến hành thanh toán'}
            </button>
            <Link
              to="/products"
              className="block text-center text-gray-600 hover:text-gray-800 mt-4"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart 