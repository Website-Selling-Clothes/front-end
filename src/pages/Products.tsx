import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('newest')

  // Mock data
  const products: Product[] = [
    {
      id: 1,
      name: 'Đầm hoa nữ',
      price: '599.000đ',
      image: 'https://via.placeholder.com/300x400',
      category: 'dam',
    },
    {
      id: 2,
      name: 'Áo sơ mi trắng',
      price: '399.000đ',
      image: 'https://via.placeholder.com/300x400',
      category: 'ao',
    },
    {
      id: 3,
      name: 'Quần jean nữ',
      price: '499.000đ',
      image: 'https://via.placeholder.com/300x400',
      category: 'quan',
    },
    // Thêm nhiều sản phẩm hơn ở đây
  ]

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Sản phẩm</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Danh mục
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="all">Tất cả</option>
              <option value="dam">Đầm</option>
              <option value="ao">Áo</option>
              <option value="quan">Quần</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Giá
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="all">Tất cả</option>
              <option value="0-300">Dưới 300.000đ</option>
              <option value="300-500">300.000đ - 500.000đ</option>
              <option value="500-1000">500.000đ - 1.000.000đ</option>
              <option value="1000+">Trên 1.000.000đ</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sắp xếp theo
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="newest">Mới nhất</option>
              <option value="price-asc">Giá tăng dần</option>
              <option value="price-desc">Giá giảm dần</option>
              <option value="name-asc">Tên A-Z</option>
              <option value="name-desc">Tên Z-A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-pink-600 font-bold">{product.price}</p>
                <button className="mt-4 w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
                  Xem chi tiết
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex space-x-2">
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            Trước
          </button>
          <button className="px-4 py-2 border rounded bg-pink-600 text-white">
            1
          </button>
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            2
          </button>
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            3
          </button>
          <button className="px-4 py-2 border rounded hover:bg-gray-100">
            Sau
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Products 