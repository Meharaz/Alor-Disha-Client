import React from 'react';

const MemberCard = ({item}) => {
    const {name, age, phone, email, image} = item; 
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{image}</p>
        </div>
    );
};

export default MemberCard;