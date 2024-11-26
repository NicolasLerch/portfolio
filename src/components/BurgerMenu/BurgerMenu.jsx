import './burgerMenu.css'

export default function BurgerMenu({isActive, setIsActive}) {

    const handleBackClick = () => {
        setIsActive(false);
    }

    return (

        

        isActive ? (<div className="burger-menu-container">
        <div className='burger-logo-container'>
            <div className='burger-logo'>
                <h1>&lt;/&gt;</h1>
            </div>
            <h1 className='burger-web-title'>NICOLAS LERCH</h1>
            <i class="fa-solid fa-arrow-left" onClick={handleBackClick}></i>
        </div>
        <ul className='burger-menu-list'>
            <li>Home</li>
            <li>About me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

    </div>) : null
        
    )
}