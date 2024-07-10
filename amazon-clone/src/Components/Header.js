import React from 'react';
import '../App.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from '../StateProvider';

function Header() {
  const [{basket}] = useStateValue();
  console.log(basket);

  return (
    <nav className="header">
      {/* Logo on the NavBar */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo" />
      </Link> 

      {/* Search Bar */}
      <div className="header__search">
        <InputBase
          className="header__searchInput"
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="button"  aria-label="search">
          <SearchIcon className="header__searchIcon"/>
        </IconButton>
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Yoshi</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/posts" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Reels</span>
            <span className="header__optionLineTwo">Review</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Basket icon*/}
            <ShoppingBasketIcon />

            {/*No of items in the basket */}
            <span className="header__basketCount"> {basket?.length} </span>
          </div>
        </Link>
      </div>



    </nav>
  );
}

export default Header;



// import React from 'react';
// import './App.css';
// import logo from './logo.png'; // Adjust the path according to your directory structure
// import { Link } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";

// function Header() {
//   return (
//     <nav className= "header">
//     {/* Logo on the NavBar */}
//       <Link to="/">
//         <img className="header__logo" src={logo} alt="Logo" />
//       </Link> 

//     {/* Search Space on the NavBar */}
//       <input type="text" classNmae="header__searchInput"/>
//       <SearchIcon className="header__searchIcon"/>
//     </nav>
//   );
// }

// export default Header;
