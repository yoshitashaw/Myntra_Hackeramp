import React from 'react';
import banner from './banner.png';
import overlay from './overlay.png'; // Import the overlay image
import product1 from './product1.png'; 
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
                title="Euphoria of Nirvana" 
                price={11.96} rating={5} 
                image={product1} />

        <Product id="123456" 
                        title="Euphoria of Nirvana" 
                        price={11.96} rating={5} 
                        image={product1} />
      </div>

      <div className="home__row">
        <Product id="123456" 
                          title="Euphoria of Nirvana" 
                          price={11.96} rating={5} 
                          image={product1} />

        <Product id="123456" 
                                  title="Euphoria of Nirvana" 
                                  price={11.96} rating={5} 
                                  image={product1} />
      
        <Product id="123456" 
                            title="Euphoria of Nirvana" 
                            price={11.96} rating={5} 
                            image={product1} />
      </div>

      <div className="home__row">
        <Product id="123456" 
                title="Euphoria of Nirvana" 
                price={11.96} rating={5} 
                image={product1} />
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
