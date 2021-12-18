
let storageProfileString = localStorage.getItem('Users')
let savedUsers = JSON.parse(storageProfileString);


console.log("ss: ", savedUsers)

export const Stata = (savedUsers2) =>{
    console.log("save: ", savedUsers2)
    return{
    type: 'stata',
    stata: savedUsers2 }
}


export const sortAZ =  (value) => {


return {
 type: 'sortAZ',
 sortAZ:   savedUsers.sort((a,b) => a.firstName < b.firstName? -1:1 )
}
}

export const sortZA = (value) =>{
    
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


// export const Like = (values) =>{
//     return{
//         type: 'Like',
//         Like :console.log("hello", values)
//     }

// }