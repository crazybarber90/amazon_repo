import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {

const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/"><img
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></Link>
            
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <span className="header__SearchIcon" ><i class="fas fa-search"></i></span>
            </div>
            <div className="header__nav">
                <Link to="/login">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello pepy</span>
                    <span className="header__optionLineTwo">Sign in</span>

                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>

                </div>

                <Link to="/checkout"> 
                <div className="header__optionBasket">
                    <span className="header__optionLineTwo      header__basketCount"><i className="fas fa-shopping-basket"></i>{basket?.length}
                    </span>
                </div>
                </Link>
              
            </div>
        </div>
    )
}

export default Header
