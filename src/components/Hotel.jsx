import React from 'react'

const Hotel = ({data}) => {
  // console.log(data);
  return (
    <div className='card'>
      <h3>{data.name}</h3>
      <img src={data.img} alt="" />
      <p>{data.city}</p>
    </div>
  )
}

export default Hotel