import Footer from '../Containers/Footer'
import React from 'react'
import Navbar from '../Components/NavbarExperimantal'
import Wsp from './Wsp'

const Layout = ({children}) => {
  return (
    <>
     <Navbar />
     <Wsp />
     <main >
        {children}
     </main>
     <Footer />
    </>
  )
}

export default Layout
