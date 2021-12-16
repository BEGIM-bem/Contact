import React from 'react'
import {Formik} from 'formik'
import * as yup from 'yup'
import './Item.css'
import Avatorka from './img/avatar.png'
import { useSelector } from 'react-redux'
import {Link } from "react-router-dom"
import { hashHistory } from 'react-router';



function Item({save}) {
    const OneUsersClickShow  = useSelector(state => state)
    console.log("OneUsersClickShow ", OneUsersClickShow);
    

    const validationsSchema = yup.object().shape({
        firstName: yup.string().typeError('Должно быть строкой').required('Обязательно') , 
        lastName: yup.string().typeError('Должно быть строкой').required('Обязательно') , 
        city: yup.string().typeError('Должно быть строкой').required('Обязательно')  ,
        country: yup.string().typeError('Должно быть строкой').required('Обязательно') ,
        phoneName: yup.number().typeError('Должно быть числом').required('Обязательно'),
        email: yup.string().email('Введите кооректный email').required('Обязательно'),
    })



    return(
       <div> 
           <img src ={Avatorka} alt={"not find"} className ='Avatorka' />

        <div className ="formik">
           <Formik 
          
           initialValues ={{
               id: OneUsersClickShow.id,
               firstName: OneUsersClickShow.firstName, 
               lastName: OneUsersClickShow.lastName,
               city: OneUsersClickShow.city,
               country: OneUsersClickShow.country,
               phoneName:  OneUsersClickShow.phoneNumber,
               email: OneUsersClickShow.email,
               webSite: OneUsersClickShow.website
           }} 
        
           validateOnBlur
           onSubmit ={(values)=> {
            let storageProfileString = window.localStorage.getItem('Users')
            let savedUsers = JSON.parse(storageProfileString);

            for(let i=0; i < savedUsers.length; i++) {
               if(savedUsers[i].id == OneUsersClickShow.id){
                savedUsers[i].firstName = values.firstName
                savedUsers[i].lastName = values.lastName
                savedUsers[i].city = values.city
                savedUsers[i].country = values.country
                savedUsers[i].phoneName = values.phoneName
                savedUsers[i].email = values.email
                savedUsers[i].webSite = values.webSite
                window.localStorage.setItem('Users', JSON.stringify(savedUsers))
                 
                   
                   console.log( savedUsers[i] )
                
                
               }
                
        
            } 
       
               console.log("Значение: ", values)
            
            } } 
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
                           <label htmlFor ={`phoneName`}   className ={'title'}>Phone Number: </label><br />
                           <input className ={`input`}
                           type ={`text`}
                           name ={`phoneName`}
                           onChange ={handleChange}
                           onBlur={handleBlur}  
                           value={values.phoneName} />
                      
                       {touched.phoneName && errors.phoneName && <p className ={'error'}>{errors.phoneName}</p>  }
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
                           <label htmlFor ={`webSite`} className ={'title'} >WebSite: </label><br />
                           <input className ={`input`}
                           type ={`text`}
                           name ={`webSite`}
                           onChange ={handleChange}
                           onBlur={handleBlur}  
                           value={values.webSite} />
                    
                       {touched.webSite && errors.webSite && <p className ={'error'}>{errors.webSite}</p>  }
                        </p>


                     <button 
                       className ={`BtnFormik wrapper`}
                         disabled ={!isValid && !dirty}
                        onClick ={  handleSubmit}
                         type ={`submit`}>Save Contact</button>
                          

                       
                    </div>      
               ) }</Formik>


        </div>

        </div>
    )
    
}

export default Item