import React, { useState } from 'react';
import { useSelector } from 'react-redux'


let storageProfileString = localStorage.getItem('Users')
let savedUsers = JSON.parse(storageProfileString);




export const Stata = (savedUsers) =>{
    
    return{
    type: 'stata',
    stata: savedUsers }
}


export const sortAZ =  () => {


return {
 type: 'sortAZ',
 sortAZ:   savedUsers.sort((a,b) => a.firstName < b.firstName? -1:1 )
}
}

export const sortZA = () =>{
    
return{
    type: 'sortZA',
    sortZA: savedUsers.filter(item => {
        let fullName = item.firstName + ' ' + item.lastName;
        return fullName
       
    }).sort((a,b) => a.fullName > b.fullName? 1:-1)

}
}

export const findUsers = (value) =>{

return{
    type:"findUsers",
    findUsers: savedUsers.filter(item => {
        let fullName = item.firstName + ' ' + item.lastName;
     
       
            return fullName.toLowerCase().includes(value.toLowerCase())
     
       
    })
    
}
}


export const Item = (userOne ) =>{
  
    return{
        type: "Item",
        Item: userOne

    }
}

let storagefavorites = localStorage.getItem('favorites')
let favorites = JSON.parse(storagefavorites);

export const HeartFovoriti =() =>{
   if(!favorites){
       
    favorites = [{city: "London",
       country: "England",
       email: "eng.eugine@gomail.com",
       firstName: "Eugene",
       id: 4,
       image: "https://images.unsplash.com/photo-1565260524775-7e9b536fba2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
       lastName: "Forige",
       phoneNumber: "+932550221",
       website: "eugine.com"}]
    localStorage.setItem("favorites", JSON.stringify(favorites)) ;

   }else{
    let storagefavorites = localStorage.getItem('favorites')
     favorites = JSON.parse(storagefavorites);

   }
  

 
    return{
        type:'Heart',
        HeartFovoriti: favorites  
    }

}

