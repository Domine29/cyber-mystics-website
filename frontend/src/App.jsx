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
import axios from 'axios'



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

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');
  axios.defaults.headers.common["X-CSRFToken"]=csrftoken

  return (
    <RouterProvider router={router} />
  )
}

export default App
