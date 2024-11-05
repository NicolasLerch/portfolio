import ProjectCard from "../ProjectCard/ProjectCard"
import SBlogo from "/images/SantaBarberia.png"
import streangLogo from "/images/streang-logo-v1.png"
import labulekaLogo from "/images/labuleka-logo.png"
import luckyWheel from "/images/lucky-wheel.png"
import slotMachine from "/images/slotMachine.png"

import "./projectCardsContainer.css"

export default function ProjectCardsContainer () {
    const projects = [
        {
            title: "Santa Barberia",
            description: "Proyecto de prueba",
            img: SBlogo,
            link: "https://www.google.com",
        },{
            title: "STREANG",
            description: "Project made for a course",
            img: streangLogo,
            link: "#"
        },{
            title: "La Buleka",
            description: "WebPage made for a grocery store",
            img: labulekaLogo,
            link: "#"
        },{
            title: "Lucky Wheel",
            description: "Lucky Wheel",
            img: luckyWheel,
            link: "#"
        },{
            title: "Slot Machine",
            description: "Slot Machine",
            img: slotMachine,
            link: "#"
        }
        ]

    return (
        <div className="project-cards-container">
            {projects.map((project,index) => {
                return <ProjectCard {...project} key={`project-${index}`} />
            })}
        </div>
    )
}