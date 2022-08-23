
import  Card from "./card"
import React, {  useId,useRef , useState } from 'react'
import image1 from "./jon.jpg"
import image2 from "./op.jpg"
import image3 from "./opg.jpg"
import image4 from "./ops.jpg"
import image5 from "./jon.jpg"
import image6 from "./jon.jpg"
import {Routes ,Route } from 'react-router-dom'
import Description from './Decription'

function Body()
{
    const  [movies,setMovie]=useState([
        {description:'this movie is a movie that movies',name:"john wick",id:1,image:image1,rating:"1",},
        {description:'this movie movies also',name:"one piece red",id:2,image:image2,rating:"5"},
        {description:'description ',name:"one piece gold",id:3,image:image3,rating:"4"},
        {description:'routes are ineresting',name:"one piece stam",id:4,image:image4,rating:"3"}
]

      

    )
    const namemovie=useRef();
    console.log(movies)
   return <>
    <Routes>
        <Route path="/" element={ <div className='cards' >{movies.map((e) =>  
     <Card {...e}  ></Card> )}
      <button onClick={()=>setMovie(movies=>[...movies,{name:"MOVIE",description:'this movie movies also',image:image5,id:Math.random(),rating:"3"}])}>Add movie</button>
   </div>}>
        </Route >
        <Route path="/:id" element={<Description movies={movies}/>}>

        </Route>
    </Routes>
     {/* {movies.map((e) =>  
     <Card name={e.name} image={e.image} rating={e.rating}></Card> )}
     
      <button onClick={()=>setMovie(movies=>[...movies,{name:"MOVIE",image:image5,rating:"3"}])}>Add movie</button>
  */}
   </>

      
    

    





}
export default Body