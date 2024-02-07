
import Card from "../Card/Card";
import React from 'react'
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {

    const data = [
        {
          id:1,
          img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?autocompress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?autocompress&cs=tinysrgb&w=1600",
          title: "Long Sleeve Graphic T-shirt",
          isNew:true,
          oldPrice: 19,
          price: 12,
        },
        
      
      ];
      
      return (
        <div className='FeaturedProducts'>
           <div className="top">
           <h1>{type} products</h1>
            <p>
                testing testing 
            </p>
           </div> 
           <div className="bottom">
           <>
           {data.map(item=>(
                <Card item={item} key={item.id}/>
             ))} 
           </>
             
           </div>
        </div>
      )
}

export default FeaturedProducts
