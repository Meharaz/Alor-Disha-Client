import React from 'react';
// "id": 31,
//         "name": "Shahidul Islam",
//         "age": 38,
//         "role": "General Member",
//         "designation": "General Member",
//         "email": "shahidul.islam@example.com",
//         "phone": "+8801711000301"
const MemberCard = ({ item }) => {
    const { name, age, phone, email, image, role, designation } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl mb-10">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co.com/G9K42m7/image.png" alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name} <div className="badge badge-secondary">{age}</div></h2>
                 
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{role}</p>
                    {/* <p>{designation}</p> */}
                    <div className="card-actions">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;