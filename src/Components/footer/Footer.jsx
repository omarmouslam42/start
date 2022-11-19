import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return <>
                
        <footer className='  py-5'>
        <div className='container py-3'>
        <div className='row'>
            <div className='col-md-4 my-2'>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h3 className=' fw-semibold text-white'>LOCATION</h3>
                    <p className='text-center w-75 fs-5 fw-normal text-white'>2215 John Daniel DriveClark, MO 6523</p>
                </div>
            </div>

            <div className='col-md-4 my-2'>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h3 className='text-white fw-bolder'>AROUND THE WEB</h3>
                    <div className='footer-icon mt-3 d-flex justify-content-center align-items-center'>
                    <i className="border-2 border border-white rounded-circle fa-brands fa-facebook-f"></i>
                    <i className="mx-2 border-2 border border-white rounded-circle fa-brands fa-twitter"></i>
                    <i className="border-2 border border-white rounded-circle fa-brands fa-linkedin-in"></i>
                    <i className="ms-2 border-2 border border-white rounded-circle fa-solid fa-basketball"></i>
                    </div>
                </div>
            </div>

            <div className='col-md-4 my-2'>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h3 className='text-white fw-bolder'>ABOUT FREELANCER</h3>
                    <p className='text-white fs-5 fw-normal text-center mt-2 w-75'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>
            </div>
         </div>
        </div>
       
        </footer>

      
            </>
        
    }
}

export default Footer;
