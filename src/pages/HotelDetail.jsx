import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const HotelDetail = ({data}) => {

  const params = useParams()
  const hotel = data.find(h => h.id == params.id)

  const navigate = useNavigate()


  return (
    <div  className='hotelMain'>
      {hotel
        ? 
          <>
            <h3>{hotel.name}</h3>
            <img src={hotel.img} alt="" />
            <p>{hotel.description}</p>
            <ul>
              <li>Ciudad: {hotel.city}</li>
              <li>Precio: {hotel.daily_price}</li>
              <li>Email: {hotel.email}</li>
              <li>Tel: {hotel.phone}</li>
              <li>Califiación: {hotel.stars}</li>
              <li>Wifi: {hotel.wifi ? "Si" : "No"}</li>
            </ul>
          </>
        : "Cargando..."
      }
      

      <button onClick={() => navigate(-1)}>Regresar</button>

    </div>
  )
}

export default HotelDetail