


    let storageProfileString = localStorage.getItem('Users')
    let savedUsers = JSON.parse(storageProfileString);
    console.log("Local Stage: ", savedUsers)    
 

const reduser =(stata = savedUsers, actions) => {
    switch(actions.type){
        case 'sortAZ':
            return actions.sortAZ
        case 'save':
            return actions.stata    
        case 'sortZA':
            return actions.sortZA    

        case 'findUsers':
            return actions.findUsers
            case 'Item':
                return actions.Item
         case 'stata':
             return actions.stata   
          case 'Heart':
              return  actions.HeartFovoriti      
             
             
        
            default:
                return stata
          
    }


}

export default reduser