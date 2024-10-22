import React from 'react'
import image from '../images/File_85-starred.jpg'
import { Link } from 'react-router-dom'
const About = () => {
  
  return (
    <div className='aboutHome'>
        <div className='aboutHome__image'>
            <figure>
                <img src={image} alt="Devershika Pandit" />
                <figcaption>Devershika Pandit</figcaption>
            </figure>
        </div>
        <div className='aboutHome__content'>
            <p>Devershika Pandit
            is a alluring model and actor who never failed to suprise with her talent and mind. Her confidence speaks before her, and her work tell the rest of the story. Being from a city where society is negligent towards dreams, she took that step alone to be what she always wanted to be - a butterfly in this open sky. 
            </p>
            <div className='ReadMore__button'><Link to="/about" >Read More</Link></div>
        </div>
      
    </div>
  )
}

export default About
