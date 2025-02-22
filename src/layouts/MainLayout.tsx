import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'
  
const MainLayout = () => {
  
  return (
    <div className="main-layout">

      <Navbar />

    
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}

export default MainLayout 