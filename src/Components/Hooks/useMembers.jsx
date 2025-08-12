import { useEffect, useState } from "react";

const useMembers = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('members.json')
            .then(res => res.json())
            .then(data => {
                setMembers(data.members);
                setLoading(false);
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);

    return [members, loading]; 
};

export default useMembers;
