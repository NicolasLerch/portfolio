import {Link} from 'react-router-dom'
import './navBar.css'
import { useState} from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import '../BurgerMenu/burgerMenu.css'

const sections = ['Home', 'About me', 'Skills', 'Projects', 'Contact']

export default function NavBar () {

    let [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    }

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
            <i class="fa-solid fa-bars menu-bars" onClick={handleMenuClick}></i>
            <button className="hire-me-button">
                Hire me
            </button>
            <BurgerMenu isActive={isActive} setIsActive={setIsActive}/>
        </div>
    )
}