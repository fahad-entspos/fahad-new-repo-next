import Navbar from './Navbar'
import Sidebar from './Sidebar'

// eslint-disable-next-line react/prop-types
function Layout({children }) {
  return <>
   <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  </>
}

export default Layout