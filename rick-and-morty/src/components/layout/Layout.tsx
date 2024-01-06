import React, { PropsWithChildren } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
    )
}

export default Layout