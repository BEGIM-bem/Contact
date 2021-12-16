 import React, { useEffect, useState } from "react";
// import './List.css'
// import Heart from './img/Vector.png'
// import SortAZ from './img/sort.png'
// import SortZA from './img/sort (1).png'
import axios from 'axios'
// import  Location  from './img/Group.png'
// import Phone from './img/Group (1).png'
// import Internet from './img/internet.png'
// import Email from './img/email.png'
// import Hart from './img/hord.png'
// import {Routes, Route, Link } from "react-router-dom"


 function List() {
  
     const [ApiUsers, setApiUsers] = useState([])
    useEffect(() =>{
        axios.get('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
        .then(data => setApiUsers(data.data.data) )
    },[])
    
  
    window.localStorage.setItem("Users", JSON.stringify(ApiUsers)) ;



    return( 
        <div></div>
    )
    

}

export default List 