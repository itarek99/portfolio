import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Resume from './pages/Resume/Resume';
import Works from './pages/Works/Works';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/works',
        element: <Works />,
      },
      {
        path: '/contact',
        element: <Contacts />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
