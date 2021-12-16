
 
    let storageProfileString = window.localStorage.getItem('Users')
    let savedUsers = JSON.parse(storageProfileString);
  


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
        
            default:
                return stata
          
    }


}

export default reduser