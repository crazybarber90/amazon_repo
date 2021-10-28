import React from 'react';
import './Header.css';
// import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <span className="header__SearchIcon" ><i class="fas fa-search"></i></span>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello pepy</span>
                    <span className="header__optionLineTwo">Sign in</span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>

                </div>

                <div className="header__optionBasket">
                    <span className="header__optionLineTwo header__basketCount"><i className="fas fa-shopping-basket"></i>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
