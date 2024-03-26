import React from "react";

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>
                Nos links a seguir você encontrará alguns projetos criados por mim, tanto na area de UX Design, quanto em 
                Desenvolvimento Web.
            </p>
            <div className="container">
                <a href="https://www.behance.net/gallery/175115989/UXUI-Case-Study-EcoWear" className="btn_1" target="_blank">Projetos UX</a>
                <a href="https://github.com/thefriendjeff" className="btn_2" target="_blank">Projetos Front-end</a>
            </div>
        </section>
    )
}

export default ProjectsContainer;