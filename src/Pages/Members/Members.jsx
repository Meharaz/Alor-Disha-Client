import React from 'react';
import img from '../../assets/AboutBg.jpg'
import MemberCard from '../../Components/MemberCard/MemberCard';
import Cover from '../../Components/Cover/Cover';
import useMembers from '../../Components/Hooks/useMembers';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Members = () => {
    const [members] = useMembers();
    const volunteer = members.filter(item => item.role === "Volunteer")
    const trusty = members.filter(item => item.role === "Trusty Board Member")
    // const volunteer = members.filter(item => item.role === "Volunteer")
    return (
        <div>
            <Cover title={"Honorable Members"} img={img} />
            <div>
                <SectionTitle
                subHeading={'Our Honorable Trusty Board Members'}
                heading={"trustee"}
                />
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                    {
                        trusty.map(item => (
                            <MemberCard key={item.id} item={item} />
                        ))}
                </div>
                <SectionTitle
                subHeading={'Executive Committee'}
                heading={"Our Honorable Executive Committee Members"}
                />
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>
                    {
                        volunteer.map(item => (
                            <MemberCard key={item.id} item={item} />
                        ))}
                </div>

            </div>
        </div>
    );
};

export default Members;
