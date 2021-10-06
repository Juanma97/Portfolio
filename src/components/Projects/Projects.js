import './Projects.css';
import data from "./projects-data";

function Projects() {
    return(
        <div className="projects">
            {data.projects.map(project => {
                return <div className="project" key={project.title}>
                    <div className="project-header">
                        <p className="project-title">{project.title}</p>
                        <a href={project.github} className="project-url">Github</a>
                        <a href={project.url} className="project-url">Sitio web</a>
                    </div>
                    <p className="project-description">{project.description}</p>
                </div>
            })}
        </div>
    )
}

export default Projects;