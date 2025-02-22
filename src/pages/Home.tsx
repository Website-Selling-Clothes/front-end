import { Link } from 'react-router-dom'

const Home = () => {
  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Đầm hoa nữ',
      price: '599.000đ',
      image: 'https://via.placeholder.com/300x400',
    },
    {
      id: 2,
      name: 'Áo sơ mi trắng',
      price: '399.000đ',
      image: 'https://via.placeholder.com/300x400',
    },
    {
      id: 3,
      name: 'Quần jean nữ',
      price: '499.000đ',
      image: 'https://via.placeholder.com/300x400',
    },
    {
      id: 4,
      name: 'Áo khoác denim',
      price: '799.000đ',
      image: 'https://via.placeholder.com/300x400',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-900 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x500)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Thời trang cho phụ nữ hiện đại
            </h1>
            <p className="text-xl mb-8">
              Khám phá bộ sưu tập mới nhất với những thiết kế độc đáo và phong cách
            </p>
            <Link
              to="/products"
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Mua sắm ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Sản phẩm nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-pink-600 font-bold">{product.price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="mt-4 block text-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Danh mục sản phẩm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Đầm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Link
                  to="/products?category=dam"
                  className="text-white text-2xl font-bold hover:underline"
                >
                  Đầm
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Áo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Link
                  to="/products?category=ao"
                  className="text-white text-2xl font-bold hover:underline"
                >
                  Áo
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Quần"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Link
                  to="/products?category=quan"
                  className="text-white text-2xl font-bold hover:underline"
                >
                  Quần
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 