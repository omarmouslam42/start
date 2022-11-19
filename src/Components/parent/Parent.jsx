import React, { Component } from 'react'
import Child from '../child/Child';

export default class Parent extends Component {

  state={
    allProducts : [
      {id:1 ,onsale:true, name:"oppo" ,count:50, price:2000 ,category:"moblie"},
      {id:2 ,onsale:false, name:"toshipa" ,count:10, price:5000 ,category:"TV"},
      {id:3 ,onsale:false, name:"Iphone" ,count:25, price:10000 ,category:"moblie"},
      {id:4 ,onsale:true, name:"samsung" ,count:5, price:10000 ,category:"moblie"}
    ]
  }


    addCount=(product)=>{
      let index =this.state.allProducts.indexOf(product)
      let allProducts =[...this.state.allProducts]
      allProducts[index].count++
      this.setState({allProducts})
    }
    lessCount=(product)=>{
      let index =this.state.allProducts.indexOf(product)
      let allProducts =[...this.state.allProducts]
      allProducts[index].count--
      this.setState({allProducts})
    }


    deleteElement =(id)=>{
    let newState=[...this.state.allProducts]
    let allProducts = newState.filter((product)=>{return product.id != id})
    this.setState({allProducts})
  }

  render() {
    return  <>
        <div className='container py-5'>
          <div className="row">
        {this.state.allProducts.map((product, index)=>{return <Child key={index} less={this.lessCount} add={this.addCount} del={this.deleteElement} product={product}/>})}
          </div>
        </div>
      </>
    
  }
}
