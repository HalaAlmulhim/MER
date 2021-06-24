// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Main = () => {
//     const [message, setMessage] = useState("Loading ...");
//     useEffect(() => {
//         axios.get("http://localhost:8000/api")
//             .then(res => {
//                 // console.log(res.data);
//                 setMessage(re.data.message);
//             })
//             .catch(err => console.log(err));
//     },[])
//     return(
//         <div>
//             <h1>Message from API land: {message}</h1> 
//         </div>
//     )
// }

// export default Main;