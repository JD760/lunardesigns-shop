import { redirect } from "react-router-dom";
import ShopItemComponent from "./shopItem";
import HeaderSearchComponent from "./searchComponent/headerSearchComponent";
import SidebarSearchComponent from "./searchComponent/SidebarSearchComponent";

import "./shopPage.css";
import { useEffect, useState } from "react";

// define a list of all filter options
const allFilterOptions = [
    // ornament types
    {label: "Whippet", checked: false},
    {label: "Labrador", checked: false},
    {label: "Cat", checked: false},
    // sizes
    {label: "7cm", checked: false},
    {label: "9cm", checked: false},
    {label: "11cm", checked: false},
    // style
    {label: "Hearts", checked: false},
    {label: "Sparkles", checked: false},
    {label: "Clear", checked: false},
    // colour
    {label: "Black", checked: false},
    {label: "White", checked: false},
    {label: "Blue", checked: false},
]

const allItemData = [
    {
        title: "Whippet",
        id: 1,
        price: 15.00,
        searchTags: ["whippet", "heart", "black"]
    },
    {
        title: "Labrador",
        id: 2,
        price: 14.00,
        searchTags: ["labrador", "sparkle", "yellow"]
    },
    {
        title: "Cat",
        id: 3,
        price: 12.00,
        searchTags: ["cat", "heart", "blue"]
    },
]

export default function ShopPageComponent() {
    const [filterOptions, setFilterOptions] = useState(allFilterOptions)
    const [shopItems, setShopItems] = useState<JSX.Element[]>([]);

    // runs just once when the component is created
    useEffect(() => {
        let items = allItemData.map((item) => {
            return <ShopItemComponent id={item.id} key={item.id} price={item.price}/>
        })
        setShopItems(items)
    }, [])

    useEffect(() => {
        console.log(filterOptions);
    })

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
                    <HeaderSearchComponent
                        filterOptions={filterOptions}
                        setFilterOptions={(value: any) => setFilterOptions(value)}
                    />
                </div>
            </div>
            <div className="content-wrapper">
            <div className="shop-content-container">
                {shopItems}
            </div>
            {/* Shown when the screen size is more than 1000px wide */}
            <div className="sidebar-search">
                <SidebarSearchComponent
                    items={filterOptions}
                    setItems={(value: any) => setFilterOptions(value)}
                />
            </div>
            </div>
        </div>
    )
}