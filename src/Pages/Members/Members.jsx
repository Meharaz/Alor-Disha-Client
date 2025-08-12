import React, { useEffect, useState } from 'react';
import img from '../../assets/AboutBg.jpg'
import MemberCard from '../../Components/MemberCard/MemberCard';
import Cover from '../../Components/Cover/Cover';

const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('members.json')
            .then(res => res.json())
            .then(data => {
                if (data && data.members && Array.isArray(data.members)) {
                    setMembers(data.members);
                } else {
                    console.error('Invalid data format:', data);
                    setMembers([]);
                }
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);

    return (
        <div>
<Cover title={"Honorable Members"} img={img}/>
            <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-10'>
                <div>
                    <p className='text-xl font-bold'>Volunteer</p>
                    {members && Array.isArray(members) && members
                        .filter(member => member.role === "Volunteer")
                        .map(item => (
                            <MemberCard key={item.id} item={item} />
                        ))}
                </div>
                <div>
                <p className='text-xl font-bold'>Blood Doner</p>
                    {members && Array.isArray(members) && members
                        .filter(member => member.role === "Blood Donor")
                        .map(item => (
                            <MemberCard key={item.id} item={item} />
                        ))}
                </div>
                <div>
                <p className='text-xl font-bold'>Trusty Board Member</p>
                    {members && Array.isArray(members) && members
                        .filter(member => member.role === "Trusty Board Member")
                        .map(item => (
                            <MemberCard key={item.id} item={item} />
                        ))}
                </div>
                <div className='grid'>
                <p className='text-xl font-bold'>General Member</p>
                    {members && Array.isArray(members) && members
                        .filter(member => member.role === "General Member")
                        .map(item => (
                            <MemberCard key={item.id} item={item} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Members;
