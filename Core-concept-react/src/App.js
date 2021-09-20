import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
          <Mobile></Mobile>
          <BlogPost></BlogPost>
          <BlogPost></BlogPost>
          <MyBlogFunc number="1" name="Google" Invetioner="Brin and Larry Page"></MyBlogFunc>
          <MyBlogFunc number="2" name="Youtube" Invetioner="Google"></MyBlogFunc>
          <MyBlogFunc number="3" name="Facebook" Invetioner="MarkZukarberg"></MyBlogFunc>
    </div>
  );
}

function BlogPost() {
    return (
        <div className="blog">
            <h1 style={{ backgroundColor: "white", borderRadius: "10px", color: "black" }}>This web site is publist for blog</h1>
            <article>
                <p style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laborum enim obcaecati fugit unde odit architecto tempore atque distinctio cum quos ad accusantium dolorem facere hic sunt perspiciatis, nemo porro.</p>
            </article>
        </div>
    )
}

// blog component

function MyBlogFunc(props) {
    const Mystyle = {
        backgroundColor: 'lightblue',
        border: '3px solid blue',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={Mystyle}>
            <h1>Google search list web site</h1>
            <h3>Number: {props.number}</h3>
            <h4>WebSite: {props.name}</h4>
            <h5>Author: {props.Invetioner}</h5>
        </div>
    )
}

// Mobile blog
function Mobile(props) {
    const [charge, setCharge] = useState(100);
    const ChargeCheck = () => {
        let decrementCharge = charge - 10;
        console.log(decrementCharge);
        if (decrementCharge < 0) {
            alert('Battery low!! Insert the charger');
            return;
        }
        setCharge(charge - 10);
    }
    return (
        <div>
            <h3>Charge available: {charge}</h3>
            <button onClick={ChargeCheck}>battery down</button>
        </div>
    )
}


export default App;
