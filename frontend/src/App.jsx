import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage, {loader as cardLoader} from './pages/Home'
import ReadingsPage from './components/Readings'
import NotesPage from './pages/Notes'
import RootLayout from './pages/RootLayout'
import Login from './pages/Login'
import Cards from './pages/Cards'
import './index.css'
import axios from 'axios'


export async function userLoader() {
  let res = await axios.get('api/user')
  let user = res.data
  return { user };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: userLoader,
    children: [
      { index: true, 
        element: <HomePage user={userLoader}/>,
        loader: cardLoader
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
