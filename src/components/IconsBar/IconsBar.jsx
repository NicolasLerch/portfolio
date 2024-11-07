import { useState, useEffect } from "react";

import mySQL from "../../assets/mysql.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/js.png";
import react from "../../assets/react.svg";
import node from "../../assets/node.png";
import python from "../../assets/python.png";
import mongo from "../../assets/mongo.png";
import java from "../../assets/java.png";

import javaCert from "/images/java.png"
import html1 from "/images/html1.jpg"
import html2 from "/images/html2.jpg"
import JSBack from "/images/JSbackend.jpg"
import DHback from "/images/DHCert.jpg"

import SkillsDescription from "../SkillsDescription/SkillsDescription";

import "./iconsBar.css";

const skills = [
  {
    title: "HTML",
    description: "Solid understanding of HTML, capable of creating well-structured and accessible websites that provide a strong foundation for effective user experience.",
    description2: "Along with CSS, these were the first lenguages I had contact with when I starded. I took some curses from Google Activate, and those where my basis for learning. From those days to now, I have used them in most of my works, continously improving my knowledge and skills.",
    icon: html,
    img1: html1,
    img2: html2
  },
  {
    title: "CSS",
    description: "Proficient in CSS, skilled in creating visually appealing and functional websites using custom variables, animations, and effects to enhance user engagement.",
    icon: css,
    img1: html1,
    img2: DHback
  },
  {
    title: "Javascript",
    description: "Strong command of JavaScript, including popular frameworks like React and Node.js, for both frontend and backend development.",
    icon: javascript,
    img1: JSBack,
    img2: DHback
  },
  {
    title: "MySQL",
    description: "Experience in creating and managing relational databases, optimizing queries, and handling complex data.",
    icon: mySQL,
  },
  {
    title: "React",
    description: "Growing experience in React, with several projects completed and a keen interest in expanding my skills. I'm learning quickly and exploring both React DOM for web applications and React Native for mobile app development.",
    icon: react,
    img1: DHback
  },
  {
    title: "Java",
    description: "Basic knowledge of Java, utilized in class projects with a solid grasp of object-oriented programming principles.",
    icon: java,
    img1: javaCert
  },
  {
    title: "Node",
    description: "Extensive experience with Node.js, used in numerous projects alongside libraries like Express and Sequelize, among others. Skilled in backend development, building complete business logic, implementing user roles and permissions, integrating third-party APIs, and connecting to databases.",
    icon: node,
    img1: JSBack,
    img2: DHback
  },
  {
    title: "Python",
    description: "Basic knowledge of Python with a solid understanding of the fundamentals. I'm eager to deepen my skills, especially in backend development, and apply Python to future projects.",
    icon: python,
  },
  {
    title: "MongoDB",
    description: "Basic understanding of NoSQL databases, specifically MongoDB, for managing unstructured data.",
    icon: mongo,
    img1: JSBack
  },
];

export default function IconsBar() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]); // Estado inicial con el primer skill

  const handleClick = (skill) => {
    setSelectedSkill(skill); // Actualiza el skill seleccionado
  };

  return (
    <div className="skills-container">
      <div className="icons-dynamic-bar">
      {[...skills,...skills].map((skill, index) => (
        <div
            className="icon-container"
            key={`skill-${index}`}
            onClick={() => handleClick(skill)}
        >
            <img
                src={skill.icon}
                alt={skill.title}
                key={`icon-${index}`}
                className="icon"
            />
        </div>
    ))}
      </div>
      <SkillsDescription
        title={selectedSkill.title}
        description={selectedSkill.description}
        description2={selectedSkill.description2}
        img1={selectedSkill.img1}
        img2={selectedSkill.img2}
      />
    </div>
  );
}
