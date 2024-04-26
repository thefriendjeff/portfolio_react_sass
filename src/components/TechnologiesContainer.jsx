import { 
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiBootstrap,
    DiSass,
    DiPhotoshop 
} from "react-icons/di";

import {
    PiFigmaLogoThin  
} from "react-icons/pi";

import "../style/components/technologiescontainer.sass";

const technologies = [
    {id: "html", name:"Html5", icon: <DiHtml5 />, knowledge: "Knowledge in web page structuring."},
    {id: "css", name:"CSS3", icon: <DiCss3 />, knowledge: "Advanced styling with CSS, flexbox and grid"},
    {id: "js", name:"JavaScript", icon: <DiJsBadge />, knowledge: "Proficiency in ES6+, DOM manipulation, and asynchronous programming."},
    {id: "react", name:"React", icon: <DiReact />, knowledge: "Creation of SPAs with React, use of hooks, and Context API."},
    {id: "bootstrap", name:"Bootstrap", icon: <DiBootstrap />, knowledge: "Rapid development of responsive layouts."},
    {id: "sass", name:"SASS", icon: <DiSass />, knowledge: "Integration with React for dynamic styling."},
    {id: "figma", name:"Figma", icon: <PiFigmaLogoThin />, knowledge: "Creation of layouts and manipulation of editing tools."},
    {id: "photoshop", name:"Photoshop", icon: <DiPhotoshop />, knowledge: "Image manipulation and editing, creation of 3D signs."},
];

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Skills</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.knowledge}</p>
                    </div>
                </div> 
            ))}
        </div>
    </section>;
};

export default TechnologiesContainer;