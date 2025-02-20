import { Link } from 'react-router-dom'


{/*Product Type*/}
import Signature from '../assets/Icon/signature.svg'
import BackInStock from '../assets/Icon/back_in_stock.svg'
import Blouse from '../assets/Icon/blouse.svg'
import Dress from '../assets/Icon/dress.svg'
import Pants from '../assets/Icon/pants.svg'
import Skirt from '../assets/Icon/skirt.svg'
import TShirt from '../assets/Icon/tshirt.svg'

{/*Temp Product Img*/}
import Product1 from '../assets/Temp_Products/Product_1.png'
import Product2 from '../assets/Temp_Products/Product_2.png'
import Product3 from '../assets/Temp_Products/Product_3.png'
import Product4 from '../assets/Temp_Products/Product_4.png'

const Home = () => {

  const temp_Products = [
    {
      id: 1,
      name: 'Áo 2 dây ren hoa nhún ngực thắt...',
      price: '195.000đ',
      img: Product1,
    },
    {
      id: 2,
      name: 'Đầm  in hoa nhún ngực từng ...',
      price: '195.000đ',
      img: Product2,
    },
    {
      id: 3,
      name: 'Áo 2 dây thun sọc hoa mai đính...',
      price: '195.000đ',
      img: Product3,
    },
    {
      id: 4,
      name: 'Áo 2 dây ren hoa nhún ngực thắt...',
      price: '195.000đ',
      img: Product4,
    },
    {
      id: 5,
      name: 'Áo 2 dây ren hoa nhún ngực thắt...',
      price: '195.000đ',
      img: Product1,
    },
    {
      id: 6,
      name: 'Đầm  in hoa nhún ngực từng ...',
      price: '195.000đ',
      img: Product2,
    },
    {
      id: 7,
      name: 'Áo 2 dây thun sọc hoa mai đính...',
      price: '195.000đ',
      img: Product3,
    },
    {
      id: 8,
      name: 'Áo 2 dây ren hoa nhún ngực thắt...',
      price: '195.000đ',
      img: Product4,
    },

  ]

  return (
    <div>
      {/*Product Type*/}

      <section className='font-victor'>
        <div>
          <h1 className='text-[32px]'>Product Type</h1>
          <div className='flex justify-between'>
            <div className='text-center'>
              <button>
                <img src={Signature} alt="" />
              </button>
              <h2>Signature</h2>
            </div>
            <div className='text-center'>
              <button>
                <img src={BackInStock} alt="" />
              </button>
              <h2>back In Stock</h2>
            </div>
            <div className='text-center'>
              <button>
                <img src={TShirt} alt="" />
              </button>
              <h2>T-Shirt</h2>
            </div>
            <div className='text-center'>
              <button>
                <img src={Blouse} alt="" />
              </button>
              <h2>Blouse</h2>
            </div>
            <div className='text-center'>
              <button>
                <img src={Dress} alt="" />
              </button>
              <h2>Dress</h2>
            </div>
            <div className='text-center'>
              <button>
                <img src={Pants} alt="" />
              </button>
              <h2>Pants</h2>
            </div>
            <div className='text-center'>
              <button>
                <img src={Skirt} alt="" />
              </button>
              <h2>Skirt</h2>
            </div>
          </div>
        </div>
      </section>

      {/*Featured*/}
      <section>
        <h1 className='text-[32px] font-victor'>Special Price In December</h1>
        <div>
          <img src="" alt="" />
        </div>
      </section>

      {/*Products*/}
      <section>

          <div className='w-[800px] font-victor flex justify-between'>
            <h2 className='text-[32px]'>Sort By</h2>
            <button className='w-[185px] h-[56px] border rounded-[30px]'>Sales</button>
            <button className='w-[185px] h-[56px] border rounded-[30px]'>Latest</button>
            <button className='w-[185px] h-[56px] border rounded-[30px]'>Price</button>
          </div>

          <div className='mt-6'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {temp_Products.map(product => (
                <div key={product.id} className='border flex flex-col justify-center items-center p-4'>
                  <img src={product.img} alt="" />
                  <div className='w-[300px] m-4'>
                    <h3 className='w-[300px] overflow-ellipsis whitespace-nowrap font-victor'>{product.name}</h3>
                    <p className='font-vidaloka text-[#E12222]'>{product.price}</p>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <button className='w-[185px] h-[56px] border rounded-[30px] bg-[#E12222] text-[16px] text-white font-victor'>
                      View Product
                    </button>
                  </Link>
                  {/* <button className=''>
                    Add To Cart
                  </button> */}
                </div>
              ))}
            </div>
          </div>
      </section>

      <div className='flex justify-center mt-20'>
        <nav>
          <button className='w-[64px] h-[64px] rounded-[100%] hover:bg-[#F3F3F3]'>P</button>
          <button className='w-[64px] h-[64px] rounded-[100%] bg-[#F3F3F3]'>1</button>
          <button className='w-[64px] h-[64px] rounded-[100%] hover:bg-[#F3F3F3]'>2</button>
          <button className='w-[64px] h-[64px] rounded-[100%] hover:bg-[#F3F3F3]'>3</button>
          <button className='w-[64px] h-[64px] rounded-[100%] hover:bg-[#F3F3F3]'>N</button>
        </nav>
      </div>

    </div>
  )
}

export default Home 