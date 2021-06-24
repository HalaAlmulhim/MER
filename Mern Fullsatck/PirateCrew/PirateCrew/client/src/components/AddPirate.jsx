import React,{useState} from 'react';
import {Link,navigate} from '@reach/router'
import axios from 'axios'


const AddPirate = props => {
    const [name,setName]=useState("");
    const [url,setUrl]=useState("");
    const [chests,setChests]=useState(0);
    const [phrase,setPhrase]=useState("");
    const [position,setPosition]=useState("");
    const [leg,setLeg]=useState(true);
    const [eye,setEye]=useState(true);
    const [hand,setHand]=useState(true);
    const[errors,SetErrors] = useState([]);
    const submit=(e,data)=>{
        e.preventDefault();
        axios.post(`http://localhost:8000/api/pirates`,data)
            .then(res => {
                navigate(`/pirates/`)
            })
            .catch(err=>{
                console.log(err);
                const errorsResponse=err.response.data.errors;
                const erroorsArray=[];
                for (const key of Object.keys(errorsResponse)) {
                    erroorsArray.push(errorsResponse[key].message);
                }
                SetErrors(erroorsArray);
            })}
    return(
        <div>
            <h1>Add Pirate</h1>
            <Link to="/pirates" ><button>Crew Board</button></Link>
            {errors.map((error,idx)=>{
                return(
                    <p key={idx}>{error}</p>
                )
            })}
            <form onSubmit={e=> {submit(e,{name,url,chests,phrase,position,leg,eye,hand})}}>
            <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" value={name} onChange={e =>{setName(e.target.value)}} /><br />
                    <label htmlFor="">Image Url:</label>
                    <input type="text" value={url} onChange={e => setUrl(e.target.value)} /><br />
                    <label htmlFor="">Treasure Chests:</label>
                    <input type="number" value={chests} onChange={e =>{setChests(e.target.value)}} /><br />
                    <label htmlFor="">Catch Phrase:</label>
                    <input type="text" value={phrase} onChange={e =>{setPhrase(e.target.value)}} /><br />
                </div>
                <div>
                    <label htmlFor="">Crew Position:</label>
                    <select value={position} onChange={e => setPosition(e.target.value)}>
                        <option style={{display: "none"}}></option>
                        <option value="Captain">Captain</option>
                        <option value="First mate">First mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select><br />
                    <label htmlFor="">Peg Leg:</label>
                    <input type="checkbox" name="leg" defaultChecked={leg} value={leg} onClick={e =>{setLeg(!e.target.value)}}/><br />
                    <label htmlFor="">Eye Patch:</label>
                    <input type="checkbox" name="eye" defaultChecked={eye} value={eye} onClick={e =>{setEye(!e.target.value)}} /><br />
                    <label htmlFor="">Hook Hand:</label>
                    <input type="checkbox" name="hand" defaultChecked={hand} value={hand} onClick={e =>{setHand(!e.target.value)}} /><br />
                </div>
                <button type="submit">Add Pirate</button>
            </form>
        </div>
    )
}
export default AddPirate;