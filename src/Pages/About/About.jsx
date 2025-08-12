import React from 'react';
import Cover from '../../Components/Cover/Cover';
import img from '../../assets/AboutBg.jpg'

const About = () => {
    return (
        <div>
            <Cover 
            title={"About Us"}
            img={img}
            />
            this is about page
        </div>
    );
};

export default About;