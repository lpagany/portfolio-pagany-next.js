import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import StoreProvider from '@/components/StoreProvider'
import Projets from './projets/page'




const inter = Inter({ subsets: ['latin'] })

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <main className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              {children}
            </div>
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
