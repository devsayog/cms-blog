import Footer from 'components/Footer/Footer'
import Navbar from 'components/Navbar/Navbar'
import { ReactNode } from 'react'

type LayoutTypes = {
  children: ReactNode
}

const Layout = ({ children }: LayoutTypes) => {
  return (
    <>
      <Navbar />
      <main className="mt-20 md:mt-24 container mx-auto px-2 md:px-8">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
