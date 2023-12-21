import React from 'react'

function Teammate({picture,post}) {
  return (
    <div className='w-64 h-66 rounded-xl overflow-hidden p-2 bg-green-600 text-white m-4 shadow-xl'>
      <img  className="w-full h-60 rounded-t-xl" src={picture} alt="" />
      <div className='w-full text-xl font-medium flex items-center justify-center'>{post}</div>
    </div>
  )
}

export default Teammate
