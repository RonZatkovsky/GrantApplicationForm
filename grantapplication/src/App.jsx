import './styles/App.css'
import { Home } from './pages/Home'
import { Form } from './pages/Form';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  
  return (
    <Router>
      {/* Grant Details Section */}
      <section className="row mt-3 mx-2 bg-light border-bottom border-3">
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
      <div className='container-fluid mx-auto col-md-10 col-sm-12 mt-2 bg-white'>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Form />} path="/form" />
          </Routes>
      </div>
      {/* Footer Section */}
      <section className="row bg-black text-white">
        <div className="container text-center">
          <div>
            <img className="img-fluid" src='/images/slogan.jpg' alt='slogan'/>
          </div>
          <p>&copy; 2025 Black Corner Investments Inc.</p>
        </div>
      </section>
    </Router>
  ) 
}

export default App
