import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import { Provider } from 'react-redux'
import store  from '../store/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
