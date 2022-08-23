import React from 'react'
import { Link,useParams } from 'react-router-dom'
import './desc.css'

const Decription = ({movies}) => {
    const params = useParams()
    const movie = movies.find(mv=>mv.id=== +params.id)
  return (
    <div className='desc'>
          <img src={movie.image}></img>
       <p> {movie.name}</p>
       <p> {movie.description}</p>

        <Link to={'/'}>Go back</Link>
    </div>
  )
}

export default Decription