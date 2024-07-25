import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  

  return (
    <>
      {/* <div>
        < Home/>
      </div>

      <h1>Vite + React</h1>

      <button className='my-6 bg-indigo-400 rounded-sm '>Click me!</button>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-6xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p> */}


      <BrowserRouter>
		  
			<Link to='/' className='m-3 btn btn-primary'>Home</Link>
      <Link to='/aboutme' className='m-3 btn btn-secondary'>About Me</Link>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/aboutme' element={<AboutMe />} />
				
			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App
