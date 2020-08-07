import React from 'react';

const MemberCard = ({member}) => {

    return (
        <div>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.email}</p>
        </div>
    )
};

export default MemberCard