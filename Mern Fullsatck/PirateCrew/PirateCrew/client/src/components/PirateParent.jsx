import React,{useState} from 'react';
import {Router,Redirect} from '@reach/router';
import PiratesList from './PiratesList'
import AddPirate from './AddPirate'
import PirateDetails from './PirateDetails';


const PirateParent = props => {
    const [pirates, setPirates] = useState([{
        name: "",
        url: "",
        chests: 0,
        phrase:"",
        position:"",
        leg:true,
        eye:true,
        hand:true,
    }])
    
    return(
        <div>
            <Router>
            <Redirect from="/" to="/pirates/" />
                <PiratesList path="/pirates/" pirates={pirates} setPirates={setPirates} />
                <AddPirate path="/pirates/new" pirates={pirates} setPirates={setPirates} />
                <PirateDetails path="/pirates/:id" />
            </Router>
        </div>
    )
}
export default PirateParent;