import React from "react";
import Header from './Header/Header'
import List from './Api/List'
import Counter from  './store/counter'
import Item from "./Item/Item";
import {Routes, Route } from "react-router-dom"
import GetApiUsers from './store/reduser';

function App() {

    return(
        <div> 
            <Header />
            <List />
            <Routes>
               
          
                <Route path ='/' element ={<Counter />} />
                <Route  exact  path ='/Contact-Details/:userId' element ={<Item /> } />

                </Routes> 

        </div>
    )
    
}

export default App