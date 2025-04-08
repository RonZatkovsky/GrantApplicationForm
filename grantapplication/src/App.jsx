import './styles/App.css'
import { Home } from './pages/Home'
import { Form } from './pages/Form';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      {/* Grant Details Section */}
      <section className="row my-2 mx-5 bg-light border-bottom border-3">
        <div className="container text-center">
          <h1 className="display-4 text-primary mb-2">Introducing the Beginners Network Grant by Black Corner Investments Inc.</h1>
          <p className="lead mb-3">
            Supporting startup businesses and entrepreneurs in their first year of operation
          </p>
          <p className="lead mb-3">
            Founded by Executive Director Kenia Massey (affectionately known as Mrs. Kay), Black Corner Investments Inc. is proud to announce its very first grant initiative.
          </p>
        </div>
      </section>
      <div className='container-fluid mx-auto col-8 bg-'>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Form />} path="/form" />
          </Routes>
      </div>
      {/* Footer Section */}
      <section className="row py-1 bg-dark text-white mt-4">
        <div className="container text-center">
          <p>&copy; 2025 Black Corner Investments Inc.</p>
        </div>
      </section>
    </Router>
  ) 
}

export default App
