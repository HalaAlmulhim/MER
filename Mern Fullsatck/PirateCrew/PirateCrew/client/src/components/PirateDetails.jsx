import React,{useState, useEffect} from 'react';
import axios from 'axios'
import pic from './pic.jpg'

const PirateDetails =({id})=>{
    const [pirate, setPirate] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => setPirate(res.data))
            .catch(err => console.log(err))
    }, [id])
    const click1 = (e)=>{
        axios.put(`http://localhost:8000/api/pirates/${id}`,{leg:!pirate.leg})
        .then(res => {
        setPirate({...pirate, leg:!pirate.leg});
    })};
    const click2 = (e)=>{
        axios.put(`http://localhost:8000/api/pirates/${id}`,{eye:!pirate.eye})
        .then(res => {
        setPirate({...pirate, eye:!pirate.eye});
    })};
    const click3 = (e)=>{
        axios.put(`http://localhost:8000/api/pirates/${id}`,{hand:!pirate.hand})
        .then(res => {
        setPirate({...pirate, hand:!pirate.hand});
    })};
    return(
        <div>
            <h1>{pirate.name}</h1>
            <img src={pic} alt="None" height="100px" />
            <h1>{pirate.phrase}</h1>
            <div>
                <h1>About</h1>
                <p>Position: {pirate.position}</p>
                <p>Treasures: {pirate.chests}</p>
                <p>Peg Leg: <button onClick={click1} >{pirate.leg?"Yes":"No"}</button></p>
                <p>ُEye Patch: <button onClick={click2} >{pirate.eye?"Yes":"No"}</button></p>
                <p>Hook Hand: <button onClick={click3} >{pirate.hand?"Yes":"No"}</button></p>
            </div>
        </div>
    )
}
export default PirateDetails;