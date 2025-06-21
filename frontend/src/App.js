import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Layout from './components/Layout';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<h1>wassup</h1>} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
