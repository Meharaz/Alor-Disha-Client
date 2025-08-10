import React from 'react';

const ProjectsCard = ({item}) => {
   
    const { title, image, description } = item;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src="https://i.ibb.co.com/21hjQkSP/image.png" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn more!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;