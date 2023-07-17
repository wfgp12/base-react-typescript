// Libraries
import { Navigate, Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import RegisterPage from './pages/Register/RegisterPage';

// Routes
import { ProtectedRoutes, PublicRoutes } from './routes';

// Styles
import './App.scss';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PublicRoutes />} >
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<ProtectedRoutes />} >
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<HomePage />} />
        </Route>
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </Routes>
    </div>
  );
}

export default App;
