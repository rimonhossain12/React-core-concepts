import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useReducer } from 'react';

function App() {
  return (
    <div className="App">
          <LoadData></LoadData>
    </div>
  );
}

// state control for loading data

function LoadData() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h1>Total Data load in UI {users.length}</h1>
            {
                users.map(user => <Users userId={user.id} id={user.id} title={user.title} completed={user.completed}></Users>)
            }

        </div>
    )
}
function Users(props) {
    //style for div
    const divStyle = {
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '20px',
        color: 'gray',
        margin: '20px',
        border: '2px solid tomato                   '
    }
    return (
        <div style={divStyle}>
            <h4>userId: {props.userId}</h4>
            <h4>Id: {props.id}</h4>
            <p>title: {props.title}</p>
            <p>complete: {props.compelete}</p>
        </div>

    )
}

export default App;
