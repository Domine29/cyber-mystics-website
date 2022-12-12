import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';


export default function RootLayout() {

  return (
    <>
      <img src='/static/images/CM-banner.jpg' className='CM-banner'/>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}