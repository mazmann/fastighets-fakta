import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import FiveInputFieldsComponent from './components/inputFields';

function App() {
    const [propertyOwner, setPropertyOwner] = useState("");
    const [organisationNumber, setOrganisationNumber] = useState("");
    const [properyTag, setProperyTag] = useState("");
    const [propertyAdress, PropertyAdress] = useState("");
    const [propertyArea, setPropertyArea] = useState("");
    const [visitingAdress, setVisitingAdress] = useState("");
    const [visitingArea, setVisitingArea] = useState("");
    const [contactRep, setContactRep] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({
                propertyOwner,
                organisationNumber,
                properyTag,
                propertyAdress,
                propertyArea,
                visitingAdress,
                visitingArea,
                contactRep,
                phoneNumber,
                email,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
        
        }
    }
    return (

        <>
            <div className="App">
            <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="Fastighetsgare"
                    value={propertyOwner} onChange={(e) => setPropertyOwner(e.target.value)} />
                <input type="text" placeholder="name"
                    value={organisationNumber} onChange={(e) => setOrganisationNumber(e.target.value)} />
                <input type="text" placeholder="name"
                    value={properyTag} onChange={(e) => setProperyTag(e.target.value)} />
                <input type="text" placeholder="name"
                    value={propertyAdress} onChange={(e) => PropertyAdress(e.target.value)} />
                <input type="text" placeholder="name"
                    value={propertyArea} onChange={(e) => setPropertyArea(e.target.value)} />
                <input type="text" placeholder="name"
                    value={visitingAdress} onChange={(e) => setVisitingAdress(e.target.value)} />
                <input type="text" placeholder="name"
                    value={visitingArea} onChange={(e) => setVisitingArea(e.target.value)} />
                <input type="text" placeholder="name"
                    value={contactRep} onChange={(e) => setContactRep(e.target.value)} />
                <input type="text" placeholder="name"
                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <input type="email" placeholder="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                {/* <input type="text" placeholder="name"
                    value={date} onChange={(e) => setDate(e.target.value)} /> */}
                <button type="submit"
                    onClick={handleOnSubmit}>submit</button>
            </form>
            </div>
        </>



    );
}

export default App;
