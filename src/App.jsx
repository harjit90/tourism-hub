import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/pages/Home';
import Service from './components/pages/Service';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from './components/Layout';

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/service',
          element: <Service />
        },
        {
          path: '/product',
          element: <Product />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/',
          element: <Navigate to='/' replace />
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={routes} />
      {/* <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer /> */}
    </>
  )
}

export default App
