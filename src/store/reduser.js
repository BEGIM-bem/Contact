


    let storageProfileString = localStorage.getItem('Users')
    let savedUsers = JSON.parse(storageProfileString);
    console.log("Local Stage: ", savedUsers)    
    // const unsubscribe = store.subscribe(savedUsers)
        // let r = unsubscribe() 
  

    // const store = createStore(savedUsers);
    // const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()))
    // unsubscribe();

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
             
             
        
            default:
                return stata
          
    }


}

export default reduser