import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage, {loader as cardLoader} from './TarotApp/pages/Home'
import NotesPage from './TarotApp/pages/TarotSpreads'
import RootLayout from './pages/RootLayout'
import Login from './TarotApp/pages/Login'
import './index.css'
import axios from 'axios'
import DreamsPage from './DreamJournalApp/pages/Dreams'
import TestJournalPage from "./pages/TestJournalPage";


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
        path: '/dreams',
        element: <NotesPage />
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
