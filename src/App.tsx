import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Joke from './components/Joke'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/joke/' element={<Joke />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
