import { useState } from 'react'

interface OrderItem {
  id: number
  name: string
  price: string
  quantity: number
}

interface Order {
  id: number
  customer: {
    name: string
    email: string
    phone: string
    address: string
  }
  items: OrderItem[]
  total: string
  status: 'pending' | 'processing' | 'shipping' | 'delivered' | 'cancelled'
  date: string
  paymentMethod: string
}

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      customer: {
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        phone: '0123456789',
        address: '123 Đường ABC, Quận 1, TP.HCM',
      },
      items: [
        {
          id: 1,
          name: 'Đầm hoa nữ',
          price: '599.000đ',
          quantity: 1,
        },
        {
          id: 2,
          name: 'Áo sơ mi trắng',
          price: '399.000đ',
          quantity: 2,
        },
      ],
      total: '1.397.000đ',
      status: 'pending',
      date: '2024-01-28',
      paymentMethod: 'COD',
    },
    {
      id: 2,
      customer: {
        name: 'Trần Thị B',
        email: 'tranthib@example.com',
        phone: '0987654321',
        address: '456 Đường XYZ, Quận 2, TP.HCM',
      },
      items: [
        {
          id: 3,
          name: 'Quần jean nữ',
          price: '499.000đ',
          quantity: 1,
        },
      ],
      total: '499.000đ',
      status: 'delivered',
      date: '2024-01-27',
      paymentMethod: 'Banking',
    },
  ])

  const [showOrderDetails, setShowOrderDetails] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const handleStatusChange = (orderId: number, newStatus: Order['status']) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )
  }

  const OrderDetailsModal = () => {
    if (!selectedOrder) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Chi tiết đơn hàng #{selectedOrder.id}
            </h2>
            <button
              onClick={() => setShowOrderDetails(false)}
              className="text-gray-500 hover:text-gray-700"
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

          <div className="space-y-6">
            {/* Customer Information */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Thông tin khách hàng</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <span className="font-medium">Tên:</span>{' '}
                  {selectedOrder.customer.name}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  {selectedOrder.customer.email}
                </p>
                <p>
                  <span className="font-medium">Số điện thoại:</span>{' '}
                  {selectedOrder.customer.phone}
                </p>
                <p>
                  <span className="font-medium">Địa chỉ:</span>{' '}
                  {selectedOrder.customer.address}
                </p>
              </div>
            </div>

            {/* Order Items */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Sản phẩm</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Sản phẩm</th>
                      <th className="text-left">Giá</th>
                      <th className="text-left">Số lượng</th>
                      <th className="text-left">Tổng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2">{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          {(
                            parseInt(item.price.replace(/\D/g, '')) * item.quantity
                          ).toLocaleString('vi-VN')}
                          đ
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Tổng quan đơn hàng</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <span className="font-medium">Ngày đặt:</span>{' '}
                  {selectedOrder.date}
                </p>
                <p>
                  <span className="font-medium">Phương thức thanh toán:</span>{' '}
                  {selectedOrder.paymentMethod}
                </p>
                <p>
                  <span className="font-medium">Trạng thái:</span>{' '}
                  <select
                    value={selectedOrder.status}
                    onChange={(e) =>
                      handleStatusChange(
                        selectedOrder.id,
                        e.target.value as Order['status']
                      )
                    }
                    className="ml-2 border rounded-lg px-2 py-1"
                  >
                    <option value="pending">Chờ xử lý</option>
                    <option value="processing">Đang xử lý</option>
                    <option value="shipping">Đang giao hàng</option>
                    <option value="delivered">Đã giao hàng</option>
                    <option value="cancelled">Đã hủy</option>
                  </select>
                </p>
                <p className="text-xl font-bold mt-4">
                  Tổng cộng: {selectedOrder.total}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'shipping':
        return 'bg-purple-100 text-purple-800'
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'Chờ xử lý'
      case 'processing':
        return 'Đang xử lý'
      case 'shipping':
        return 'Đang giao hàng'
      case 'delivered':
        return 'Đã giao hàng'
      case 'cancelled':
        return 'Đã hủy'
      default:
        return status
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Quản lý đơn hàng</h1>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mã đơn hàng
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Khách hàng
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ngày đặt
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tổng tiền
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">#{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {order.customer.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {order.customer.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => {
                      setSelectedOrder(order)
                      setShowOrderDetails(true)
                    }}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {showOrderDetails && selectedOrder && <OrderDetailsModal />}
    </div>
  )
}

export default AdminOrders 