import { redirect } from "react-router-dom";
import ShopItemComponent from "./shopItem";
import HeaderSearchComponent from "./searchComponent/searchComponent";
import SidebarSearchComponent from "./searchComponent/SidebarSearchComponent";

import "./shopPage.css";
import { useState } from "react";

export default function ShopPageComponent() {

    let shopItems: JSX.Element[] = [];

    for (let i=0; i < 100; i++) {
        shopItems.push(<ShopItemComponent id={i} price={15.00} key={i}/>)
    }

    return(
        <div className="shop-page-container">
            <div className="shop-navbar">
                <div className="shop-header">
                    <div className="socials">SOCIALS</div>
                    <div className="title"><a href="/">WHIPPET WORLD</a></div>
                    <div className="basket"><img src="cart.svg"/></div>
                </div>
                <hr className="search-content-separator"/>
                {/* Shown when the screen size is less than 1000px wide */}
                <div className="header-search">
                    <HeaderSearchComponent/>
                </div>
            </div>
            <div className="content-wrapper">
            <div className="shop-content-container">
                {shopItems}
            </div>
            {/* Shown when the screen size is more than 1000px wide */}
            <div className="sidebar-search">
                <SidebarSearchComponent/>
            </div>
            </div>
        </div>
    )
}