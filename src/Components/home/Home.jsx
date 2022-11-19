import React, { Component } from 'react'
import boy from '../../img/avataaars.svg'
import About from '../about/About'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Portfolio from '../portfolio/Portfolio'
import { Outlet } from 'react-router-dom'


export default class Home extends Component {

  // offsetHome = $("#portfolio").offset().top;
  // homeHeigtht = $("#home").outerHeight();
  // scrollNav(){
  //   $(window).scrollTop( ()=> {
  //     if ($(window).scrollTop > homeHeigtht) {
  //       $('nav').addClass('py',0+"px")
  //     }
  //     else{
  //       $('nav').addClass('py',2+"px")

  //     }
  //   })
  // }


  render() {
    return <>
      


       <section id='home' className='home py-5 m-auto '>
            <div className=' d-flex justify-content-center align-items-center flex-column py-5 '>
              <img src={boy}  alt="img" />

            <h1 className='text-white fw-bolder my-4 '>START REACT</h1>

           <div className='d-flex justify-content-center align-items-center'>
             <div className='line bg-white'></div>
            <i className="fa-solid fa-star fa-2x mx-3 text-white"></i>
            <div className='line bg-white'></div>             
           </div>
           <h4 className='text-white fw-normal my-4'>Graphic Artist - Web Designer - Illustrator</h4>
            </div>

       </section>
       
     
      </>

    
  }
}
