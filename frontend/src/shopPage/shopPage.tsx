import { redirect } from "react-router-dom";
import ShopItemComponent from "./shopItem";
import SearchComponent from "./searchComponent";

import "./shopPage.css";

export default function ShopPageComponent() {
    return(
        <div className="shop-page-container">
            <div className="shop-navbar">
                <div className="shop-header">
                    <div className="socials">SOCIALS</div>
                    <div className="title"><a href="/">LUNAR DESIGNS</a></div>
                    <div className="basket"><img src="cart.svg"/></div>
                </div>
                <hr className="search-content-separator"/>
                <SearchComponent/>
                <hr className="search-content-separator"/>
            </div>
            <div className="shop-content-container">
                <ShopItemComponent/>
                <ShopItemComponent/>
                <ShopItemComponent/>
                <ShopItemComponent/>
                <ShopItemComponent/>
            </div>
        </div>
    )
}