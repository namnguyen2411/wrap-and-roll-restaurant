import { Routes, Route } from 'react-router-dom'
import { Contact, Booking, Home, About, Menu, Register, Login } from './pages'
import { MainLayout } from './layouts'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/wrap-roll' element={<About />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
