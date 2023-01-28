import { redirect } from "react-router-dom";
import ShopItemComponent from "./shopItem";
import SearchComponent from "./searchComponent";

import "./shopPage.css";
import { useState } from "react";

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
                {/* Shown when the screen size is less than 1000px wide */}
                <div className="header-search">
                    <SearchComponent/>
                </div>
            </div>
            <div className="content-wrapper">
            <div className="shop-content-container">
                <ShopItemComponent/>
                <ShopItemComponent/>
                <ShopItemComponent/>
                <ShopItemComponent/>
                <ShopItemComponent/>
            </div>
            {/* Shown when the screen size is more than 1000px wide */}
            <div className="sidebar-search">
                <SearchComponent/>
            </div>
            </div>
        </div>
    )
}