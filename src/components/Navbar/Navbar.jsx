import React, { useState } from 'react'
import KexboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutLinedIcon  from '@mui/icons-material/ShoppingCartCheckoutOutlined'
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import Products from '../../pages/Products/Products';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt=""/>
            <KexboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>USD</span>
            <KexboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">ESHOP</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
          <div className="item">
            <Link to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutLinedIcon/>
              <span>{Products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}

    </div>
  )
}

export default Navbar
