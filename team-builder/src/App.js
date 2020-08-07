import React, { useState } from 'react';
import './App.css';

// component imports
import Form from './components/form.js';
import MemberList from './components/memberList.js';

function App() {
  const [ memberList, setMemberList ] = useState([]);

  return (
    <div className="App">
      <h1>Add Members to your team!</h1>
      <Form setMemberList={setMemberList} memberList={memberList}/>
      <MemberList memberList={memberList}/>
    </div>
  );
}

export default App;
