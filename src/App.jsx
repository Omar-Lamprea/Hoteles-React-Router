import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import NotFound from './components/NotFound';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';

function App() {

  const [hotels, setHotels] = useState([])
  const getHotels = async ()=>{
    const res = await fetch(import.meta.env.BASE_URL + './hoteles.json')
    const data = await res.json()
    setHotels(data)
  }

  useEffect(() =>{
    getHotels()
  }, [])

  return (
    <div className="App">
      <h1>Bookings, Busca tu hotel ideal!</h1>
      <Routes>
        <Route path='/' element={<Home data={hotels}/>}/>
        <Route path='/hotel/:id' element={<HotelDetail data={hotels}/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
