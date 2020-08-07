import React from 'react';
import MemberCard from './memberCard.js';

const MemberList = ({memberList}) => {

    return(
        <div>
            {memberList.map((member, i) => {
                return <MemberCard key={i} member={member} />
            })}
        </div>
    )
};

export default MemberList;