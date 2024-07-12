import React from 'react';
import '../App.css';
import {useStateValue} from '../StateProvider';

function CheckoutProduct({id, title, image, rating, price}) {
  const [dispatch] = useStateValue();
  const removeFromBasket =()=>{
    //remove from basket...
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
    });
  };

  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt="" />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title"> {title} </p>
            <p className="checkoutProduct_price">
                <small> $ </small>
                <strong> {price} </strong>
            </p>

            <div className="checkoutProduct_rating">
            {
                Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))
            }
            </div>

            <button onClick={removeFromBasket}> Remove from Basket </button>
        </div>
    </div>
  );
}

export default CheckoutProduct


// import React from 'react';
// import '../App.css';
// import {useStateValue} from '../StateProvider';

// function CheckoutProduct({id, title, image, rating, price}) {
//   const [{basket}, dispatch] = useStateValue();
//   const removeFromBasket =()=>{
//     //remove from basket...
//     dispatch({
//         type: "REMOVE_FROM_BASKET",
//         id: id,
//     });
//   };

//   return (
//     <div className="checkoutProduct">
//         <img className="checkoutProduct_image" src={image} alt="" />
//         <div className="checkoutProduct_info">
//             <p className="checkoutProduct_title"> {title} </p>
//             <p className="checkoutProduct_price">
//                 <small> $ </small>
//                 <strong> {price} </strong>
//             </p>

//             <div className="checkoutProduct_rating">
//             {
//                 Array(rating)
//                 .fill()
//                 .map((_)=>(
//                     <p>⭐</p>
//                 ))
//             }
//             </div>

//             <button onClick={removeFromBasket}> Remove from Basket </button>
//         </div>
//     </div>
//   );
// }

// export default CheckoutProduct
