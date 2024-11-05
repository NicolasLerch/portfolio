import {Link} from 'react-router-dom'
import './navBar.css'

const sections = ['Home', 'About me', 'Skills', 'Projects', 'Contact']

export default function NavBar () {
    return(
        <div className="nav-bar">
            <div className='logo-container'>
                <div className='logo'>
                    <h1>&lt;/&gt;</h1>
                </div>
                    <h1 className='web-title'>NICOLAS LERCH</h1>
            </div>
            <ul className="section-list">
                {sections.map((section, index) => (
                    <li className="underline" key={index}>{section}</li>
                ))}
            </ul>
            <button className="hire-me-button">
                Hire me
            </button>
           
        </div>
    )
}