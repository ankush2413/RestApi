import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </Router>
  )
}

export default App
