// import {useState, useEffect} from 'react-dom'
import './skillsDescription.css'
export default function SkillsDescription ({title, description, description2, img1, img2}) {

    return (
        <div className='skill-card'>
            <h1 className="skill-title">{title}</h1>
            <div className='description-container'>
                <div className='img-container'>
                    {img1 ? (<img src={img1} alt={title}></img>) : (null)}
                    {img2 ? (<img src={img2} alt={title}></img>) : (null)}
                </div>
                <div className='description-text-container'>
                    <p className="skill-description">{description}</p>
                    <p className='skill-description'>{description2}</p>
                </div>
                
            </div>            
        </div>
    )
}