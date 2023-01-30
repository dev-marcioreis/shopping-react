import './App.css'
import Header from './common/header/Header'
import Pages from './pages/Pages'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './common/footer/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Pages />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App