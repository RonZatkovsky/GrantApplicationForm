import './styles/App.css'
import { Home } from './pages/Home'
import { Form } from './pages/Form';
import { Success } from './pages/Success';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className='d-flex flex-column min-vh-100'>
        <div className='container-fluid mx-auto col-md-10 col-sm-12 mt-2 bg-white flex-grow-1'>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Form />} path="/form" />
            <Route element={<Success />} path="/success" />
          </Routes>
        </div>
        {/* Footer Section */}
        <section className="row bg-black text-white">
          <div className="container text-center">
            <div>
              <img className="img-fluid" src='/images/slogan.jpg' alt='slogan' />
            </div>
            <p>&copy; 2025 Black Corner Investments Inc.</p>
          </div>
        </section>
      </div>
    </Router>
  )
}

export default App
