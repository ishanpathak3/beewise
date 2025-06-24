import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Layout from './components/Layout';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<About />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='accounts' element={<h1>Accounts</h1>} />
        <Route path='ph2' element={<h1>Ph2</h1>} />
        <Route path='ph3' element={<h1>Ph3</h1>} />

      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
