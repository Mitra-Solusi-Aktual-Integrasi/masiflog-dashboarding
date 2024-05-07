import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IndexPage } from './pages';
import { LoginPage } from './pages/login';
import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/auth/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
