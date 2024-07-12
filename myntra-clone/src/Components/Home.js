import React from 'react';
import banner from './banner.png';
import overlay from './overlay.png'; // Import the overlay image
import product1 from '../Assets/product1.png';
import product2 from '../Assets/product2.png';
import product3 from '../Assets/product3.png';
import product4 from '../Assets/product4.png';
import product5 from '../Assets/product5.png';
import product6 from '../Assets/product6.png'; 
import product7 from '../Assets/product7.png'; 
import Product from './Product.js';

function Home() {
  return (
    <div className="home">
      <div className="home__imageContainer">
        <img className="home__bannerImage" src={banner} alt="Banner" />
        <img className="home__overlayImage" src={overlay} alt="Overlay" />
      
      {/* Product id, title, price, arting, image */}
      <div className="home__row">
        <Product id="123456" 
                title="Anarkali Pure Cotton Kurta With Trousers & Dupatta" 
                price={1467} rating={4} 
                image={product1} />

        <Product id="123457" 
                        title="Floral Embroidered Thread Work A-Line Kurta With Trousers & Dupatta" 
                        price={1467} rating={4} 
                        image={product2} />
      </div>

      <div className="home__row">
        <Product id="123458" 
                        title="Women Colour blocked V-Neck Viscose Rayon Waistcoat" 
                        price={1375} rating={5} 
                        image={product3} />

        <Product id="123459" 
                        title="Women Pink Sheer Printed Casual Shirt" 
                        price={527} rating={4} 
                        image={product4} />
      
        <Product id="123451" 
                        title="Abstract Printed Flared Sleeves Georgette A-Line Midi Dress" 
                        price={896} rating={3} 
                        image={product6} />    
      </div>

      <div className="home__row">
        <Product id="123450"
                title="Women Straight Fit High-Rise Trousers" 
                price={808} rating={3} 
                image={product5} /> 
        
        <Product id="123440"
                title="Women Blue Flared Mid-Rise Slash Knee Stretchable Jeans" 
                price={779} rating={3} 
                image={product7} /> 
      </div>
      
      {/* Products */}      
      </div>
    </div>
  )
}

export default Home;



// import React from 'react'
// import banner from './banner.png';

// function Home() {
//   return (
//     <div className="home">
//       <img className="home__image" 
//            src={banner} alt="Banner"></img>
//     </div>
//   )
// }

// export default Home
