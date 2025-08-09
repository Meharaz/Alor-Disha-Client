import React from 'react';

const MemberCard = ({item}) => {
    const {name, age, gender, email, image, } = item; 
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default MemberCard;