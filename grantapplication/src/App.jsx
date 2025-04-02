import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid mx-auto'>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Example</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Example</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Example</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Example</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Example"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </div>
  )
}

export default App
