// import {useState, useEffect} from 'react-dom'

export default function SkillsDescription ({title, description}) {

    return (
        <div className='skill-card'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}