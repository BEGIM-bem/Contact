import React, { useState } from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'
import './Item.css'
import Avatorka from './img/avatar.png'
import { useSelector } from 'react-redux'
import {Link , useNavigate } from "react-router-dom"
import BigHart from './img/Vector (1)Hart.png'
import {FaHeart } from 'react-icons/fa'

import{Stata} from '../store/actions'

 




function Item( ) {
    const [toggle, setToggle] =useState(false)
    const OneUsersClickShow  = useSelector(state => state)



  
    const validationsSchema = yup.object().shape({
        firstName: yup.string().typeError('Должно быть строкой').required('Обязательно') , 
        lastName: yup.string().typeError('Должно быть строкой').required('Обязательно') , 
        city: yup.string().typeError('Должно быть строкой').required('Обязательно')  ,
        country: yup.string().typeError('Должно быть строкой').required('Обязательно') ,
        phoneNumber: yup.number().typeError('Должно быть числом').required('Обязательно'),
        email: yup.string().email('Введите кооректный email').required('Обязательно'),
    })

  
   
    function sumbit(values) {
        

              
            let storageProfileString = localStorage.getItem('Users')
            let savedUsers = JSON.parse(storageProfileString);
            
  

            for(let i=0; i < savedUsers.length; i++) {
               if(savedUsers[i].id == OneUsersClickShow.id){
                savedUsers[i].firstName = values.firstName
                savedUsers[i].lastName = values.lastName
                savedUsers[i].city = values.city
                savedUsers[i].country = values.country
                savedUsers[i].phoneNumber = values.phoneNumber
                savedUsers[i].email = values.email
                savedUsers[i].website = values.website

                    localStorage.setItem('Users', JSON.stringify(savedUsers))
                    let storageProfileString1 = localStorage.getItem('Users')
                    let savedUsers1 = JSON.parse(storageProfileString1);
    
                 
                   
                  
                     window.location.reload()

               }
            } 
        
    }
   
    let array =[]
    function BigHart() {
          setToggle(!toggle)
     
            
            
    }
   

    return(
       <div> 
           
          <p><img src ={Avatorka} alt={"not find"} className ='Avatorka' /></p> 
           <FaHeart className='FaHeart' onClick={() => BigHart()}
                                          className ={toggle ? 'FaHeart_Red':'FaHeart' }
                   />
         

        <div className ="formik">
           <Formik 
          
           initialValues ={{
               id: OneUsersClickShow.id,
               firstName: OneUsersClickShow.firstName, 
               lastName: OneUsersClickShow.lastName,
               city: OneUsersClickShow.city,
               country: OneUsersClickShow.country,
               phoneNumber:  OneUsersClickShow.phoneNumber,
               email: OneUsersClickShow.email,
               website: OneUsersClickShow.website
           }} 
        
           validateOnBlur 
           onSubmit ={ sumbit}
        
        
           validationSchema = {validationsSchema}
           >
               { ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) =>(
                   
                   
                   <div className ='poliInput' > 
                       
                      <p className = {`wrapper`}>
                           <label htmlFor ={`firstName`} className ={'title  '} >First Name: </label><br />
                           <input className ={`input`} 
                           type ={`text`}
                           name ={`firstName`}
                           onChange ={handleChange}
                           onBlur={handleBlur}
                           value={values.firstName}
                         
                            />
                       {touched.firstName && errors.firstName && <p className ={'error'}>{errors.firstName}</p>  }
                       </p>
                      

                     <p  className = {`wrapper `}>
                     
                           <label htmlFor ={`lastName`}   className ={'title'}>Last Name: </label><br />
                           <input className ={`input`}
                           type ={`text`}
                           name ={`lastName`}
                           onChange ={handleChange}
                           onBlur={handleBlur}
                           value={values.lastName} />
                  
                       {touched.lastName && errors.lastName && <p className ={'error'}>{errors.lastName}</p>  }
                       </p>
                      
                       <div  className = {`wrapper`}>
                           <label htmlFor ={`city`}  className ={'title'} >City: </label><br />
                           <input className ={`input`}
                           type ={`text`}
                           name ={`city`}
                           onChange ={handleChange}
                           onBlur={handleBlur}
                           value={values.city} />
                     
                       {touched.city && errors.city && <p className ={'error'}>{errors.city}</p>  }
                       </div>

                       <p  className = {`wrapper`}>
                           <label htmlFor ={`country`}  className ={'title'} >Country: </label><br />
                           <input className ={`input`}
                           type ={`text`}
                           name ={`country`}
                           onChange ={handleChange}
                           onBlur={handleBlur}
                           value={values.country} />
                     
                       {touched.country && errors.country && <p className ={'error'}>{errors.country}</p>  }
                       </p>


                       
                       <p  className = {`wrapper`}>
                           <label htmlFor ={`phoneNumber`}   className ={'title'}>Phone Number: </label><br />
                           <input className ={`input`}
                           type ={`text`}
                           name ={`phoneNumber`}
                           onChange ={handleChange}
                           onBlur={handleBlur}  
                           value={values.phoneNumber} />
                      
                       {touched.phoneNumber && errors.phoneNumber && <p className ={'error'}>{errors.phoneNumber}</p>  }
                       </p>

                       <p  className = {`wrapper`}>
                           <label htmlFor ={`email`}  className ={'title'}>Email: </label><br />
                           <input className ={`input`}
                           type ={`text`}
                           name ={`email`}
                           onChange ={handleChange}
                           onBlur={handleBlur}  
                           value={values.email} />
                    
                       {touched.email && errors.email && <p className ={'error'}>{errors.email}</p>  }
                       </p>



                       <p  className = {`wrapper`}>
                           <label htmlFor ={`website`} className ={'title'} >WebSite: </label><br />
                           <input className ={`input`}
                           type ={`text`}
                           name ={`website`}
                           onChange ={handleChange}
                           onBlur={handleBlur}  
                           value={values.website} />
                    
                       {touched.website && errors.website && <p className ={'error'}>{errors.website}</p>  }
                        </p>

                

                     <Link to ='/'>  <button 
                       className ={`BtnFormik wrapper`}
                         disabled ={!isValid && !dirty}
                    
                         onClick={() => handleSubmit ()} 
                        
                         type ={`submit`} 
                        
                         > Save Contact </button></Link>
                        
                    </div>  
                   
               ) }</Formik>
        </div>
    
       <Link to = '/' ><button>fnn</button></Link>
        </div>
    )
    
}


export default Item

// export default Item