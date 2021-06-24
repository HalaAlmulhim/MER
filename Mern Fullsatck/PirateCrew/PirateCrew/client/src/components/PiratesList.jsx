import React,{useEffect} from 'react';
import {Link,navigate} from '@reach/router'
import axios from 'axios'
import DeleteButton from './DeleteButton'
import pic from './pic.jpg'

const PiratesList = ({pirates, setPirates}) => {
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/")
            .then(res => setPirates(res.data))
            .catch(err => console.log(err))
    }, [setPirates])
    return(
        <div>
            <h1>Pirate Crew</h1>
            <Link to="/pirates/new" ><button>Add Pirate</button></Link>
            {pirates.map((pirate, idx)=>{
                    return(
                        <div key={idx}>
                            <pic src={pic} alt="None" height="100px" />
                            <p>{pirate.name}</p>
                            <button onClick={e=> navigate(`/pirates/${pirate._id}`)}>View Pirate</button>
                            < DeleteButton id={pirate._id} />
                        </div>
                    )})} 
        </div>
    )
}
export default PiratesList;