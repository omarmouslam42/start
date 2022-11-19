import React, { Component } from 'react'
import cabin from './../../img/cabin.png'
import cake from './../../img/cake.png'
import circus from './../../img/circus.png'
import game from './../../img/game.png'
import safe from './../../img/safe.png'
import submarine from './../../img/submarine.png'

export default class Portfolio extends Component {
  render() {
    return <>
        <section id='portfolio' className='portfolio py-5 w-100 m-auto '>
           <div className=' d-flex justify-content-center align-items-center flex-column'>
           <h2 className=' fw-bolder header'>PORTFOLIO</h2>
            <div className='d-flex justify-content-center align-items-center my-2'>
             <div className='line bg-dark'></div>
            <i class="fa-solid fa-star fa-2x mx-3 "></i>
            <div className='line bg-dark'></div>             
           </div>
           </div>

        <div className="container mt-4">
            <div className='row gy-4'>
                <div className='col-md-4'>
                    <div className='port-content position-relative'data-bs-toggle="modal" data-bs-target="#model1">
                        <img className='w-100 rounded-3' src={cabin} alt="capin" />
                        <div className='img-layer rounded-3 position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus text-white fa-5x"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='port-content position-relative' data-bs-toggle="modal" data-bs-target="#model2">
                        <img className='w-100 rounded-3' src={cake} alt="capin" />
                        <div className='img-layer rounded-3 position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus text-white fa-5x"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='port-content position-relative'data-bs-toggle="modal" data-bs-target="#model3">
                        <img className='w-100 rounded-3' src={circus} alt="capin" />
                        <div className='img-layer rounded-3 position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus text-white fa-5x"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='port-content position-relative'data-bs-toggle="modal" data-bs-target="#model4">
                        <img className='w-100 rounded-3' src={game} alt="capin" />
                        <div className='img-layer rounded-3 position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus text-white fa-5x"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='port-content position-relative'data-bs-toggle="modal" data-bs-target="#model5">
                        <img className='w-100 rounded-3' src={safe} alt="capin" />
                        <div className='img-layer rounded-3 position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus text-white fa-5x"></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='port-content position-relative'data-bs-toggle="modal" data-bs-target="#model6">
                        <img className='w-100 rounded-3' src={submarine} alt="capin" />
                        <div className='img-layer rounded-3 position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-plus text-white fa-5x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div class="modal fade " id="model1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl p-5">
    <div class="modal-content">
    <button type="button" class=" ms-auto m-4 text-success border-0 bg-transparent " data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-3x"></i></button>
    <div className=' d-flex justify-content-center align-items-center flex-column'>
           <h2 className=' fw-bolder header'>LOG CABIN</h2>
            <div className='d-flex justify-content-center align-items-center my-2'>
             <div className='line bg-dark'></div>
            <i class="fa-solid fa-star fa-2x mx-3 "></i>
            <div className='line bg-dark'></div>             
           </div>
           </div>
      <div className="modal-body d-flex justify-content-center align-items-center">
      <img className='w-75  rounded-3' src={cabin} alt="capin" />
      </div>
      <div className="modal-footer m-auto d-flex justify-content-center align-items-center flex-column border-top-0">
        <p className='py-3 w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
         inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        <button type="button" class="btn btn-success p-2 m-auto my-4" data-bs-dismiss="modal">X Close window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade " id="model2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl p-5">
    <div className="modal-content">
    <button type="button" className=" ms-auto m-4 text-success border-0 bg-transparent " data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-3x"></i></button>
    <div className=' d-flex justify-content-center align-items-center flex-column'>
           <h2 className=' fw-bolder header'>TASTY CAKE</h2>
            <div className='d-flex justify-content-center align-items-center my-2'>
             <div className='line bg-dark'></div>
            <i className="fa-solid fa-star fa-2x mx-3 "></i>
            <div className='line bg-dark'></div>             
           </div>
           </div>
      <div className="modal-body d-flex justify-content-center align-items-center">
      <img className='w-75  rounded-3' src={cake} alt="capin" />
      </div>
      <div className="modal-footer m-auto d-flex justify-content-center align-items-center flex-column border-top-0">
        <p className='py-3 w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
         inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        <button type="button" className="btn btn-success p-2 m-auto my-4" data-bs-dismiss="modal">X Close window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade " id="model3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl p-5">
    <div className="modal-content">
    <button type="button" className=" ms-auto m-4 text-success border-0 bg-transparent " data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-3x"></i></button>
    <div className=' d-flex justify-content-center align-items-center flex-column'>
           <h2 className=' fw-bolder header'>CIRCUS TENT</h2>
            <div className='d-flex justify-content-center align-items-center my-2'>
             <div className='line bg-dark'></div>
            <i className="fa-solid fa-star fa-2x mx-3 "></i>
            <div className='line bg-dark'></div>             
           </div>
           </div>
      <div className="modal-body d-flex justify-content-center align-items-center">
      <img className='w-75  rounded-3' src={circus} alt="capin" />
      </div>
      <div className="modal-footer m-auto d-flex justify-content-center align-items-center flex-column border-top-0">
        <p className='py-3 w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
         inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        <button type="button" className="btn btn-success p-2 m-auto my-4" data-bs-dismiss="modal">X Close window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade " id="model4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl p-5">
    <div className="modal-content">
    <button type="button" className=" ms-auto m-4 text-success border-0 bg-transparent " data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-3x"></i></button>
    <div className=' d-flex justify-content-center align-items-center flex-column'>
           <h2 className=' fw-bolder header'>CONTROLLER</h2>
            <div className='d-flex justify-content-center align-items-center my-2'>
             <div className='line bg-dark'></div>
            <i className="fa-solid fa-star fa-2x mx-3 "></i>
            <div className='line bg-dark'></div>             
           </div>
           </div>
      <div className="modal-body d-flex justify-content-center align-items-center">
      <img className='w-75  rounded-3' src={game} alt="capin" />
      </div>
      <div className="modal-footer m-auto d-flex justify-content-center align-items-center flex-column border-top-0">
        <p className='py-3 w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
         inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        <button type="button" class="btn btn-success p-2 m-auto my-4" data-bs-dismiss="modal">X Close window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade " id="model5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl p-5">
    <div className="modal-content">
    <button type="button" className=" ms-auto m-4 text-success border-0 bg-transparent " data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-3x"></i></button>
    <div className=' d-flex justify-content-center align-items-center flex-column'>
           <h2 className=' fw-bolder header'>LOCKED SAFE</h2>
            <div className='d-flex justify-content-center align-items-center my-2'>
             <div className='line bg-dark'></div>
            <i className="fa-solid fa-star fa-2x mx-3 "></i>
            <div className='line bg-dark'></div>             
           </div>
           </div>
      <div className="modal-body d-flex justify-content-center align-items-center">
      <img className='w-75  rounded-3' src={safe} alt="capin" />
      </div>
      <div className="modal-footer m-auto d-flex justify-content-center align-items-center flex-column border-top-0">
        <p className='py-3 w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
         inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        <button type="button" className="btn btn-success p-2 m-auto my-4" data-bs-dismiss="modal">X Close window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade " id="model6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl p-5">
    <div className="modal-content">
    <button type="button" className=" ms-auto m-4 text-success border-0 bg-transparent " data-bs-dismiss="modal"><i class="fa-solid fa-xmark fa-3x"></i></button>
    <div className=' d-flex justify-content-center align-items-center flex-column'>
           <h2 className=' fw-bolder header'>SUBMARINE</h2>
            <div className='d-flex justify-content-center align-items-center my-2'>
             <div className='line bg-dark'></div>
            <i className="fa-solid fa-star fa-2x mx-3 "></i>
            <div className='line bg-dark'></div>             
           </div>
           </div>
      <div className="modal-body d-flex justify-content-center align-items-center">
      <img className='w-75  rounded-3' src={submarine} alt="capin" />
      </div>
      <div className="modal-footer m-auto d-flex justify-content-center align-items-center flex-column border-top-0">
        <p className='py-3 w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis
         inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        <button type="button" className="btn btn-success p-2 m-auto my-4" data-bs-dismiss="modal">X Close window</button>
      </div>
    </div>
  </div>
</div>




        </section>


      </>
    
  }
}
