import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage, {loader as cardLoader} from './pages/Home'
import ReadingsPage from './pages/Readings'
import AboutPage from './pages/About'
import NotesPage from './pages/Notes'
import RootLayout from './pages/RootLayout'
import Login from './pages/Login'
import Cards from './pages/Cards'
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, 
        element: <HomePage />,
        loader: cardLoader
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/notes',
        element: <NotesPage />
      },
      {
        path: '/readings',
        element: <ReadingsPage />,
        loader: cardLoader
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/cards',
        element: <Cards />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
