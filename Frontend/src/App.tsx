import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// import Assessment from './pages/Assessment';
import Products from './pages/Products';
import Calculator from './pages/Calculator';
import Installation from './pages/Installation';
import Progress from './pages/Progress';
import Resources from './pages/Resources';
import Community from './pages/Community';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Signup from './components/SignUp';
import AdminPage from './pages/Assessment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="products" element={<Products />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="installation" element={<Installation />} />
        <Route path="progress" element={<Progress />} />
        <Route path="resources" element={<Resources />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;