import React, {useState, useRef} from 'react'
import {connect } from 'react-redux'
import * as actions from './actions'
import {Link } from "react-router-dom"

import './List.css'
import Heart from './img/Vector.png'
import SortAZ from './img/sort.png'
import SortZA from './img/sort (1).png'

import  Location  from './img/Group.png'
import Phone from './img/Group (1).png'
import Internet from './img/internet.png'
import Email from './img/email.png'
import Hart from './img/hord.png'
import { useSelector } from 'react-redux'


function Counter ({ counter, findUsers, sortZA, sortAZ, Item, HeartFovoriti}){
   
    console.log("counter: ", counter)
    const OneUsersClickShow  = useSelector(state => state)
    console.log("UseSelector: ", OneUsersClickShow)
    

    let array = []
    function setFavorites (item) {
      
    alert(" Хотите добавить в избранные этого человека? " )
       
    if(array.length){
       for(let i=0; i < array.length; i++ ){
    
           if(array[i].id == item.id){
               alert("Этот контакт уже в избранных)")
               return
               
           }
        }
           
        array.push(item) 
            localStorage.setItem('favorites', JSON.stringify(array));
            alert("Успешно добавлено!")
        
    }
        else{
            array.push(item) 
            localStorage.setItem('favorites', JSON.stringify(array));
            alert("Успешно добавлено!")
            
            

        }
    }

      
      

 
    return(
    <div>
        
        <div className ='HeaderList'>
            <input type = 'text' placeholder = 'type to search...' className ='InputList' onChange ={e =>findUsers(e.target.value)}  />
           
            
            



            <div className = 'AllIcon'> 


            <button onClick={() => HeartFovoriti() } className ='Hearte'  ><img src ={Heart} alt ='not find icon'  className ='IconHeart'  /> </button>
            <button className="Sort1" onClick={() =>  sortAZ() }  id = 'sortAZ' > <img src ={SortAZ}  alt ='not find icon' className = "SortAZ"  /></button> 
            <button className ="Sort1" onClick = {() => sortZA() } id ='sortZA' ><img src ={SortZA} alt ='not find icon' className ='SortZA' /> </button> 
            </div>
        </div>

        <div className ='Content'>
           
        {
            counter.map(item => <div className="Container" key = {item.id}>
            
    
      <img src={item.image} alt = 'not find picture users' className="imgUsers" />


             <div className="title">
                <p className="NameUsers"> {item.firstName} {item.lastName}  </p>
                <button className= 'btnHart' onClick={() => setFavorites(item) } >  <img     src = {Hart} alt ='not find picture hart'  /> </button>
                
               </div>



            <div className="contact">
                
                <img src ={Location} alt ='Not find icon Locations' />
                <p className="NameCity" > {item.city}  city, {item.country } </p>
              
                <div className="ConteinerNumber" >
                <img src ={Phone} alt ='not icon' />
                <p className="PhoneNumber" >{item.phoneNumber}  </p> 
                </div>

                <div className="ConteinerNumber">
                    <img src ={Internet} alt ='not find icon Internet' />
                    <p className="PhoneNumber">{item.website} </p>
                    </div>

                 <div className='ConteinerNumber'>
                     <img src ={Email} alt ='not find icon email' />
                     <p className="PhoneNumber" >{item.email} </p>
                  </div>   
            
            </div>
 
       
             <Link to = {`/Contact-Details/${item.id}` } > <button  className="BtnShow" onClick={() => Item(item)}  > show   </button> </Link>


    </div>
            
            )}
    </div>
    </div>   
    )
}


const mapStateProps =(state) =>{
    return {
     counter: state,
    
    }
  }

export default  connect(mapStateProps, actions )(Counter)