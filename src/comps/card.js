import React from 'react'
import './body.css'
import {Link} from 'react-router-dom'
 function Card({image,name,rating,id}) {
  return (
   <div  className='card'> 
   <Link to={`/${id}`}>
     <div >
        <img src={image}>
        
        </img>
        </div>
      <div className='cardfoot'>
        
      <p>
       {name}
       </p>
       <p>Rating:{rating}</p>
      </div>
     
      </Link>
   </div>
  )
}
export default Card