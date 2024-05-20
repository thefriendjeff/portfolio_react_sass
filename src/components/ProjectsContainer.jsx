import React from "react";


const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projects</h2>
            <p>
            In the following links, you will find some of my projects. You'll find few others in my github account.
            </p>
            <div className="links-container">
                <div>
                    <a  href="https://takslist-react.vercel.app/" target="_blank">Tasklist - REACT</a>
                    <p>In this project, we created a task list that includes several functionalities: creating new categories, adding new tasks, marking tasks as completed, and deleting them. Additionally, we implemented features to filter tasks alphabetically or use the search bar to find a specific task </p>
                </div>
                <div>
                    <a  href="https://tarefa-vue-js.vercel.app/" target="_blank">Calculadora - VUE.JS </a>
                    <p>In this project, I learned how to develop the application according to Vue.js classes and how to configure the use of libraries.</p>
                </div>
            </div>            
        </section>
    )
}

export default ProjectsContainer;