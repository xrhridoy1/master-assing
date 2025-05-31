import React, { useEffect, useState } from 'react'
import './Comment.css'

export default function Comment({ comment }) {
  const { email, body, name } = comment;
  const [pic, setPic] = useState([])
  useEffect(() => {
    fetch(`https://randomuser.me/api/0.8/?results=1`)
      .then(res => res.json())
      .then(data => setPic(data.results))
  }, [])
  return (
    <div className="comment-card mb-2">
      <div className="comment-header">
        {
          pic.map(x => <img key={x.user.username} src={x.user.picture.large} alt='profile' />)
        }
        <div>
          <div className="name">{name}</div>
          <div className="email">{email}</div>
        </div>
      </div>
      <div className="comment-text">
        {body}
      </div>
    </div>
  )
}
