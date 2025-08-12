import React, { useEffect, useState } from 'react';
import ProjectsCard from '../../Components/ProjectsCard/ProjectsCard';
import Cover from '../../Components/Cover/Cover';
import img from '../../assets/AboutBg.jpg'
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                const combined = [...(data.ongoing_projects || []), ...(data.planned_projects || [])];
                setProjects(combined);
            });
    }, []);

    return (
        <div>
            <Cover title={"Projects"} img={img} />
            <div className='pt-10 mx-auto px-4 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-10'>
                {
                    projects.map(item => <ProjectsCard
                        key={item.id}
                        item={item}

                    />)
                }
            </div>
        </div>
    );
};

export default Projects;