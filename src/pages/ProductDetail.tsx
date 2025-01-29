import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'

const ProductDetail = () => {
  const { id } = useParams()
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)
  const { addToCart, isAuthenticated } = useApp()
  const navigate = useNavigate()

  // Mock data
  const product = {
    id: Number(id),
    name: 'Đầm hoa nữ',
    price: '599.000đ',
    description:
      'Đầm hoa nữ với thiết kế hiện đại, trẻ trung. Chất liệu vải cao cấp, thoáng mát, phù hợp với nhiều dịp khác nhau.',
    images: [
      'https://via.placeholder.com/600x800',
      'https://via.placeholder.com/600x800',
      'https://via.placeholder.com/600x800',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Trắng', 'Đen', 'Hồng'],
    details: [
      'Chất liệu: Cotton cao cấp',
      'Xuất xứ: Việt Nam',
      'Kiểu dáng: Form suông',
      'Họa tiết: Hoa',
    ],
  }

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/products/${id}` } })
      return
    }

    if (!selectedSize) {
      alert('Vui lòng chọn kích thước')
      return
    }

    setLoading(true)
    try {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        quantity,
      })
      alert('Đã thêm vào giỏ hàng')
    } catch (error) {
      alert('Có lỗi xảy ra khi thêm vào giỏ hàng')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} - ${index + 1}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-pink-600 font-bold mb-6">{product.price}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Kích thước</h3>
            <div className="flex space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedSize(size)}
                  disabled={loading}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Số lượng</h3>
            <div className="flex items-center space-x-4">
              <button
                className="px-3 py-1 border rounded-lg"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={loading}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-3 py-1 border rounded-lg"
                onClick={() => setQuantity(quantity + 1)}
                disabled={loading}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Đang thêm...' : 'Thêm vào giỏ hàng'}
          </button>

          {/* Product Details */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Chi tiết sản phẩm</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail 