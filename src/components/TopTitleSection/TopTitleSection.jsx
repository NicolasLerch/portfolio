import './topTitleSection.css'


export default function TopTitleSection () {

    return (
        <div className="top-title-section">
            <div className="top-title-image-container">
                <img src='/images/mainImage.webp' alt="main Image"></img>
            </div>
            <div className="top-title-section-right">                
                <div className="title-container">
                    <h1>Hi! I'm Nicolas Lerch</h1>
                    <h1>Web Developer</h1>
                    <h3>I am an emerging web developer with passion for creating innovative and functional solutions, with experience in developing ecommerce projects.</h3>
                </div>
                <div className="links-container">
                    <button type='button' className='download-button'>
                        Download CV
                        <i className="fa-solid fa-download" style={{color: "white"}}></i>
                    </button>
                    <a href="https://www.linkedin.com/in/nicolas-lerch/" target="_blank"><i className="fa-brands fa-linkedin-in" style={{color: "#8750f7"}}></i></a>
                    <a href="mailto:lerchnicolas@hotmail.com" target="_blank"> <i className="fa-regular fa-envelope" style={{color: "#8750f7"}}></i></a>
                    <a href="https://github.com/NicolasLerch" target="_blank"><i className="fa-brands fa-github" style={{color: "#8750f7"}}></i></a>
                </div>

            </div>
        </div>
    )
}