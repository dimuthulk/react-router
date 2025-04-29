import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Routes,Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayout from './layout/RootLayout'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App