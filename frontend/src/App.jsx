import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage, {loader as cardLoader} from './TarotApp/pages/Home'
import NotesPage from './TarotApp/pages/TarotSpreads'
import RootLayout from './pages/RootLayout'
import Login from './TarotApp/pages/Login'
import './index.css'
import axios from 'axios'
import Account from './TarotApp/pages/Account'
import Dreams from "./DreamJournalApp/pages/Dreams";

export async function userLoader() {
  let res = await axios.get("api/user");
  let user = res.data;
  return { user };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: userLoader,
    children: [
      {
        index: true,
        element: <HomePage user={userLoader} />,
        loader: cardLoader,
      },
      {
        path: "/tarot",
        element: <NotesPage />,
      },
      {
        path: "/dreams",
        element: <Dreams />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account",
        element:<Account/>,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
