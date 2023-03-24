import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hotel from '../components/Hotel'

const Home = ({data}) => {

  return (
    <div>
      <h2>Lista de Hoteles</h2>
      <div className="hotelCard">
        {data.map(h => <Link key={h.id} to={'/hotel/' + h.id}><Hotel data={h}/></Link>)}
      </div>
    </div>
  )
}

export default Home