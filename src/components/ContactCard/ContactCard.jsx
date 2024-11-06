import "./contactCard.css"

export default function ContactCard () {
    return (
        <div className="contact-card-container">
            <form className="contact-form">
                <input type="text" name="first_name" placeholder="Name">                
                </input>
                <input type="text" name="last_name" placeholder="Last name">                
                </input>
                <input type="email" name="mail" placeholder="Email">              
                </input>
                <textarea name="message" maxLength={2000} autoCapitalize="sentences" placeholder="Message"></textarea>
                <button className="send-buton" type="submit">Send</button>
            </form>
        </div>
    )
}