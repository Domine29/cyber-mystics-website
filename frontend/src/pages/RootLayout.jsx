import { Outlet, useLoaderData } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';
import './Root.css'
import axios from 'axios';



export default function RootLayout() {
  const { user } = useLoaderData()
  
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
    <>
      <img src='/static/images/CM-banner.jpg' className='CM-banner'/>
      <MainNavigation user={user}/>
      <main className='main'>
        <Outlet user={user}/>
      </main>
    </>
  );
}