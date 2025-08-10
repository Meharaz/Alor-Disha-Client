import React, { useEffect, useState } from 'react';
import ProjectsCard from '../../Components/ProjectsCard/ProjectsCard';

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
        <div className='grid grid-cols-3 my-10'>
            {
                projects.map(item => <ProjectsCard
                    key={item.id}
                    item={item}

                />)
            }
        </div>
    );
};

export default Projects;