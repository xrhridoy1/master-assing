import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './DataCamp.css';
import { Link } from 'react-router';


export default function DataCamp({ post }) {
  const { title, body, id } = post
  return (
    <div>
      <Card className='card-width' sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <hr />
          <Typography variant="body2">
            {body}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={'details/' + id}><Button size="small">Details</Button></Link>
        </CardActions>
      </Card>
    </div>
  )
}
