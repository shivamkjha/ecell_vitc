import React from 'react'
import { Button } from '@mui/material';
function BlogEdit() {
  return (
    <div className='m-8'>
      <div className="text-3xl text-white mb-4">
        <p className="inline bg-primary p-2 rounded">New Blog</p> <br />
      </div>
      <div className='text-4xl mb-4'>
        <input
          type="text"
          placeholder="Title"
          className="w-60 h-16 text-center rounded border-blue-600"
        />
      </div>
      <div className='w-full h-96 border-2 border-blue-600 rounded'>
      </div>
      <div className='flex justify-center mt-10'>
          <Button variant='contained' color='success'>Submit</Button>
      </div>
    </div>
  );
}

export default BlogEdit
