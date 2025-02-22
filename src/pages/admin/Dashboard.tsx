import { useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  // Mock data
  const [stats] = useState({
    totalSales: '15.500.000đ',
    totalOrders: 45,
    totalProducts: 128,
    totalCustomers: 89,
  })

  const [recentOrders] = useState([
    {
      id: 1,
      customer: 'Nguyễn Văn A',
      date: '2024-01-28',
      total: '599.000đ',
      status: 'Đang xử lý',
    },
    {
      id: 2,
      customer: 'Trần Thị B',
      date: '2024-01-28',
      total: '799.000đ',
      status: 'Đã giao hàng',
    },
    {
      id: 3,
      customer: 'Lê Văn C',
      date: '2024-01-27',
      total: '399.000đ',
      status: 'Đang giao hàng',
    },
  ])

  const [topProducts] = useState([
    {
      id: 1,
      name: 'Đầm hoa nữ',
      sales: 25,
      revenue: '12.500.000đ',
    },
    {
      id: 2,
      name: 'Áo sơ mi trắng',
      sales: 18,
      revenue: '7.200.000đ',
    },
    {
      id: 3,
      name: 'Quần jean nữ',
      sales: 15,
      revenue: '6.000.000đ',
    },
  ])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Doanh thu</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {stats.totalSales}
          </p>
          <div className="mt-2 flex items-center text-green-500">
            <span className="text-sm font-medium">↑ 12%</span>
            <span className="text-xs text-gray-500 ml-2">so với tháng trước</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Đơn hàng</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {stats.totalOrders}
          </p>
          <div className="mt-2 flex items-center text-green-500">
            <span className="text-sm font-medium">↑ 8%</span>
            <span className="text-xs text-gray-500 ml-2">so với tháng trước</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Sản phẩm</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {stats.totalProducts}
          </p>
          <div className="mt-2 flex items-center text-gray-500">
            <span className="text-sm font-medium">+12 mới</span>
            <span className="text-xs text-gray-500 ml-2">trong tháng này</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Khách hàng</h3>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {stats.totalCustomers}
          </p>
          <div className="mt-2 flex items-center text-green-500">
            <span className="text-sm font-medium">↑ 5%</span>
            <span className="text-xs text-gray-500 ml-2">so với tháng trước</span>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium">Đơn hàng gần đây</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
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
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'Đã giao hàng'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Đang giao hàng'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium">Sản phẩm bán chạy</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sản phẩm
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Số lượng bán
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doanh thu
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.sales}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.revenue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 