import {useState, useEffect} from 'react-dom'
import './projectCard.css'

export default function ProjectCard ({title, description, img, link}){
    return (
        <div className="project-card shadowed">
            <div className='image-container'>
                <img src={img} alt={title} />
            </div>            
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer">More</a>
        </div>
    )
}