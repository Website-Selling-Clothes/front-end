import { useState } from 'react'
import { useApp } from '../contexts/AppContext'

interface OrderItem {
  id: number
  name: string
  price: string
  size: string
  quantity: number
}

interface Order {
  id: number
  date: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  items: OrderItem[]
  total: string
  paymentMethod: string
}

const Orders = () => {
  useApp()

  // Mock data cho danh sách đơn hàng
  const [orders] = useState<Order[]>([
    {
      id: 1,
      date: '2024-03-20',
      status: 'delivered',
      items: [
        {
          id: 1,
          name: 'Đầm hoa nữ',
          price: '599.000đ',
          size: 'M',
          quantity: 1,
        },
        {
          id: 2,
          name: 'Áo sơ mi trắng',
          price: '399.000đ',
          size: 'L',
          quantity: 2,
        },
      ],
      total: '1.397.000đ',
      paymentMethod: 'COD',
    },
    {
      id: 2,
      date: '2024-03-18',
      status: 'processing',
      items: [
        {
          id: 3,
          name: 'Quần jean nữ',
          price: '499.000đ',
          size: 'M',
          quantity: 1,
        },
      ],
      total: '499.000đ',
      paymentMethod: 'Banking',
    },
  ])

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'shipped':
        return 'bg-purple-100 text-purple-800'
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
    }
  }

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'Chờ xác nhận'
      case 'processing':
        return 'Đang xử lý'
      case 'shipped':
        return 'Đang giao'
      case 'delivered':
        return 'Đã giao'
      case 'cancelled':
        return 'Đã hủy'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Đơn hàng của tôi</h1>

      {orders.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Bạn chưa có đơn hàng nào</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-600">
                    Mã đơn hàng: #{order.id}
                  </p>
                  <p className="text-sm text-gray-600">
                    Ngày đặt: {new Date(order.date).toLocaleDateString('vi-VN')}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                    order.status
                  )}`}
                >
                  {getStatusText(order.status)}
                </span>
              </div>

              <div className="border-t border-b py-4 my-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center mb-2 last:mb-0"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Size: {item.size} | Số lượng: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">{item.price}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Phương thức thanh toán: {order.paymentMethod}
                </div>
                <div className="text-lg font-bold">
                  Tổng tiền: {order.total}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders 