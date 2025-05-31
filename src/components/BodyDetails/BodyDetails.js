import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Comment from '../Comment/Comment';
import Button from '@mui/material/Button';

export default function BodyDetails() {
  const { userId } = useParams()
  const [post, setPost] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [userId])
  const { title, body } = post;

  //for commenting in hacking
  const [detail, setDetail] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
      .then(res => res.json())
      .then(data => setDetail(data))
  }, [userId])


  const navigate = useNavigate()


  return (
    <div>
      <Card className='card-width'>
        <CardActionArea >
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <h3 className='text-md-center my-3' >Comments Below</h3>
      <div>
        {
          detail.map(x => < Comment key={x.id} comment={x} />)
        }
      </div>
      <div className="button m-3 text-center">
        <Button variant="outlined" onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  )
}
