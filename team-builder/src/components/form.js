import React, { useState } from 'react';
import styled from 'styled-components';

const Form = (props) => {
    const { setMemberList, memberList } = props;

    const [ member, setMember ] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChange = (e) => {
        setMember({
            ...member,
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMemberList([
            ...memberList,
            member
        ])
        setMember({
            name: '',
            email: '',
            role: ''
        })
    };

    return (
        <MemberForm onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
            type='text'
            id='name'
            value={member.value}
            onChange={handleChange}/>

            <label>Email</label>
            <input 
            type='email'
            id='email'
            value={member.email}
            onChange={handleChange}/>

            <label>Role</label>
            <input 
            type='text'
            id='role'
            value={member.role}
            onChange={handleChange}/>

            <button type='submit'>
                Submit
            </button>
        </MemberForm>
    )
};

export default Form;

const MemberForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25%;
    margin: 0 auto;
    border: 1px solid black;
    padding: 25px;

    input{
        width: 100%;
        margin: 10px 0;
    }
    button{
        margin: 5px auto;
    }
`;