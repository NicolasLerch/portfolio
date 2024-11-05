import mySQL from '../../assets/mysql.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/js.png'
import react from '../../assets/react.svg'
import node from '../../assets/node.png'
import python from '../../assets/python.png'
import mongo from '../../assets/mongo.png'

import './iconsBar.css'

const icons = [mySQL, html, css, javascript, react, node, python, mongo];

export default function IconsBar () {
    return (
        <div className='icons-dynamic-bar'>
            {icons.map((icon, index) => (
                <img src={icon} alt={icon} key={`icon-${index}`} className="icon" />
            ))}
        </div>
        
    )
}