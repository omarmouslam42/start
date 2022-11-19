import React, { Component } from 'react'

export default class Child extends Component {

  render() {

    let {name ,price,category,count,id,onsale }=this.props.product
    let deleted = this.props.del
    let addCount = this.props.add
    let lessCount =this.props.less

    return  <>
          <div className='col-md-4 g-3'>
            <div  className='bg-info p-2 position-relative'>
                <h3 className='my-2'> {name}</h3>
                <h5>Price: {price}</h5>
                <h5>category: {category}</h5>
                <h5>Count: {count}</h5>
                {onsale == true?<div className=' position-absolute top-0 end-0 p-2 bg-danger text-white m-1'>Sale</div> :""}
                <button onClick={()=> deleted(id)} className='btn btn-outline-danger'>delete</button>
                <button onClick={()=> addCount(this.props.product) } className='btn btn-outline-dark ms-2'>+</button>
                <button onClick={()=> lessCount(this.props.product)} className='btn btn-outline-dark ms-2'>-</button>
            </div>
          </div>
      </>
    
  }
}
