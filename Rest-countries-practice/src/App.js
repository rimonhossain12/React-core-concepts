import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    return (
        <div className="App">
            <h1>Learning react for web developement</h1>
            <LoadData></LoadData>
        </div>
    );
}

function LoadData() {
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div>
            <h1>Total data length is : {datas.length}</h1>
            {
                <div className="grid-container">
                    {
                        datas.map(data => <Users country={data.name} capital={data.capital} flag={data.flag} population={data.population} nativeName={data.nativeName} timezones={data.timezones[0]}></Users>)
                    }

                </div>
            }
        </div>
    )
}
function Users(props) {
    // console.log(props.nativeName);
    return (
        <div className="div-style">
            <img src={props.flag} alt="" />
            <h4>Name: {props.country}</h4>
            <h5>Capital: {props.capital}</h5>
            <p>Population: {props.population}</p>
            <p>Timezones: {props.timezones}</p>
            <p>NativeName: {props.nativeName}</p>

        </div>
    )
}

export default App;
