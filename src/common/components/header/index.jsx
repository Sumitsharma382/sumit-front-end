import React from "react";
import "./header.css"
import Logo from "../../components/logo/index"
import cartIcon from "../../assests/images/cart.svg"
import userIcon from "../../assests/images/user.svg"

const Header = () => {
    return (
        <div className="container-lg">
            <div className="main-content">
                <div className="left-part">
                    <Logo />
                    <div class="input-group mx-4">
                        <input type="text" class="form-control" placeholder="serch for product,brands and more" aria-label="serch for product,brands and more" aria-describedby="serch for product,brands and more" />

                        <i class="bi bi-search-heart-fill input-group-text" > </i>
                    </div>

                </div>
                <div className="right-part">
                      <div className="header-icon">
                        <img src={cartIcon} alt='cart icon'/>
                        <span className="header-text mx-2">Cart</span>
                      </div>

                      <div className="header-icon margin-left20">
                        <img src={userIcon} alt=' user icon'/>
                        <span className="header-text mx-2">Login/Sign up</span>
                      </div>
                </div>
            </div>
        </div>
    )
}
export default Header;