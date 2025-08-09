import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MemberCard from '../../Components/MemberCard/MemberCard';

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
          setMembers([]); // set empty array if data is not as expected
        }
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Alor Disha | Members</title>
      </Helmet>
      <h2>These are the honorable Members</h2>
      <div>
        {members && Array.isArray(members) && members
        .filter(member => member.role === "Volunteer")
        .map(item => (
          <MemberCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Members;
