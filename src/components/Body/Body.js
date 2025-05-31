import React, { useEffect, useState } from 'react'
import DataCamp from '../DataCamp/DataCamp';
import './Body';


export default function Body() {
  const [post, setPost] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div className='card-section '>
      {
        post.map(x => <DataCamp key={x.id} post={x} />)
      }
    </div>
  )
}
