import logo from './logo.svg';
import './App.css';

function App() {
	const nayoks = ['Rubel', 'Bappraz', 'Koober', 'Bappi', 'shuvo', 'Omar Sani'];

	const cinemas = [
		{ nayok: 'Koober', nayika: 'kopila' },
		{ nayok: 'Rubel', nayika: 'Moushumi' },
		{ nayok: 'Razzak', nayika: 'Shabana' },
		{ nayok: 'Joshim', nayika: 'Suchorita' },
	]
	return (
		<div className="App">
			<ul>
				{
					nayoks.map(nayok => <li>{nayok}</li>)
				}

			</ul>
			{/* <Cinema nayok="J Bond" nayika="Cat W"></Cinema> */}
			{
				cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
			}
		</div>
	);
}

/* 
	<p id="title">Title</p>
		<Friend phone="017000" address="NoaKhali"></Friend>
			<Friend phone="01899" address="Rongpur"></Friend>
			<Friend phone="01655" address="Jessor"></Friend>
			<Friend phone="01900" address="Dhaka"></Friend>
			<Employee name="Ad.Rahman" designation="Engr" salary="50000"></Employee>
			<Employee name="Md.Rimon" designation="Office Assistance" salary="10000"></Employee>
			<Employee name="Ad.Rohim" designation="Boss" salary="20000"></Employee>
	<Person name="Rubel" nayika="Moushumi"></Person>
	<Person name="BappaRaz" nayika="Cheka"></Person>
	<Person name="Koober" nayika="Kopila"></Person>
*/

/* 
<Person name={nayoks[0]} nayika="Moushumi"></Person>
			<Person name={nayoks[1]} nayika="Cheka"></Person>
			<Person name={nayoks[2]} nayika="Kopila"></Person> 
	*/
function Person(props) {
	// console.log(props);
	const person = {
		backgroundColor: 'skyblue',
		border: '3px solid lightsalmon',
		margin: '20px',
		borderRadius: '20px'

	}
	return (
		<div style={person}>
			<h1>Name: {props.name}</h1>
			<h4>Hero of: {props.nayika}</h4>
		</div>
	)
}

function Cinema(props) {
	return (
		<div className="person">
			<h2>Nayok: {props.nayok}</h2>
			<h4>Nayika: {props.nayika}</h4>
		</div>
	)
}


function Friend(props) {
	console.log(props);
	return (
		<div className="person">
			<h3>Phone: {props.phone}</h3>
			<h5>Address: {props.address}</h5>
		</div>
	)
}

function Employee(props) {
	console.log(props);
	return (
		<div className="person">
			<h1>Name:{props.name}</h1>
			<h4>Designatin:{props.designation} </h4>
			<h5>Salary: {props.salary}</h5>
		</div>
	)
}


export default App;
