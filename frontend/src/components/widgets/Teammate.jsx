import React from 'react'

function Teammate({picture,post}) {
  return (
    <div className='w-60 h-60 border-2 m-4'>
      <img  className="w-full h-full" src={picture} alt="" />
      <p className='text-center text-xl font-semibold'>{post}</p>
    </div>
  )
}

export default Teammate
