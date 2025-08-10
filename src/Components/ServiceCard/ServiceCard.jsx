import React from 'react';

const ServiceCard = ({ item }) => {
    const { title, short_description, category, availability, image } = item;
    return (
        <div className='grid'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co.com/21hjQkSP/image.png" alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary w-full">{availability}</div>
                    </h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;