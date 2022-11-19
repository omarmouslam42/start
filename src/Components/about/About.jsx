import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return  <>
        <section id='about' className='about m-auto  py-5 vh-100'>

        <div className=' d-flex justify-content-center align-items-center flex-column'>
           <h2 className=' fw-bolder text-white header'>ABOUT</h2>
            <div className='d-flex justify-content-center align-items-center my-2'>
             <div className='line bg-white'></div>
            <i className="fa-solid fa-star fa-2x mx-3 text-white"></i>
            <div className='line bg-white'></div>             
           </div>
        </div>


        <div className='container d-flex justify-content-center align-items-center mt-4 '>
          <div className='row'>
            <div className='col-md-4 ms-auto'>
                <div >
                  <p className='text-white fw-normal fs-5 '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML
                  , CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
            <div className='col-md-4 me-auto'>
                <div >
                  <p className='text-white fw-normal fs-5 '>You can create your own custom avatar for the masthead, change the icon in
                   the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
          </div>
        </div>

        </section>
      </>
    
  }
}
