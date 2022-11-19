
import React, { useState } from 'react'
import Footer from './../footer/Footer';
import  Joi  from 'joi';

export default function Contact() {

const [user, setUser] = useState({
  name:"",
  email:"",
  phone:"",
  message:""
});


const [errors, setErrors] = useState([]);


  function getUser(e){
    let values = e.target.value
    let newUser = {...user}
    newUser[e.target.id]= values
    setUser(newUser);
    
  }


  function submitUser(e){
    e.preventDefault();

    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(20).required(),
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      phone: Joi.number().integer().required(),
      message:Joi.string().min(3).max(100).required(),
   });

   let valRes = schema.validate(user,{ abortEarly: false });
   if (valRes.error == undefined) {
    //call api
   }
   else{
    setErrors(valRes.error.details)
    console.log(valRes.error.details);
   }
  }


  return <>
      <section id='contact' className='contact container py-5'>

      <div className=' d-flex justify-content-center align-items-center flex-column'>
         <h2 className=' fw-bolder  header'>CONTACT ME</h2>
          <div className='d-flex justify-content-center align-items-center my-2'>
           <div className='line bg-dark'></div>
          <i className="fa-solid fa-star fa-2x mx-3 "></i>
          <div className='line bg-dark'></div>             
         </div>
      </div>


      <form onSubmit={submitUser} className='w-75 m-auto mt-4'>
      <div className=''>
      <input onChange={getUser}  type="text" className="name form-control form-control-lg border-0 shadow-none" id="name" placeholder="Name"/>
      <hr className='mt-4 text-muted'/>
      </div>
      <div className='my-3'>
      <input onChange={getUser} type="email" className="email form-control form-control-lg border-0 shadow-none" id="email" placeholder="Email Address"/>
      
      <hr className='mt-4 text-muted'/>
      </div>
      <div className=''>
      <input onChange={getUser} type="phone" className="phone form-control form-control-lg   border-0 shadow-none" id="phone" placeholder="Phone Number"/>
      <hr className='mt-4 text-muted'/>
      </div>
      <textarea onChange={getUser} className="area form-control border-0 shadow-none  mt-3" id="message" rows="6" placeholder='Message'></textarea>
      <hr className='mt-4 text-muted'/>
      <ul className='text-danger' >
        {errors.length!=0 ? errors.map((err,idx)=>{return <li key={idx}> {err.message}</li>}):console.log("")}
      </ul>
      <button type='submit' className='btn btn-info py-3 px-4 text-white fw-semibold'>send</button>
      </form>
      </section>
      <Footer />
    </>
}
