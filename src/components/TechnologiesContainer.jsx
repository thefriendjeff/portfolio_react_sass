import { 
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact,
    DiBootstrap,
    DiSass
} from "react-icons/di";

import "../style/components/technologiescontainer.sass";

const technologies = [
    {id: "html", name:"HTML5", icon: <DiHtml5 />, knowledge: "Conhecimento em estruturação de páginas web."},
    {id: "css", name:"CSS3", icon: <DiCss3 />, knowledge: "Estilização avançada com CSS, incluindo flexbox e grid."},
    {id: "js", name:"JavaScript", icon: <DiJsBadge />, knowledge: "Domínio de ES6+, manipulação do DOM e assincronismo."},
    {id: "react", name:"REACT", icon: <DiReact />, knowledge: "Criação de SPA com React, uso de hooks e context API."},
    {id: "bootstrap", name:"BOOTSTRAP", icon: <DiBootstrap />, knowledge: "Desenvolvimento rápido de layouts responsivos."},
    {id: "sass", name:"SASS", icon: <DiSass />, knowledge: "Integração com react para estilização dinâmica."},
];

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
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