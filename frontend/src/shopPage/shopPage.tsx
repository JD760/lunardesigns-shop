import { redirect } from "react-router-dom";
import ShopItemComponent from "./shopItem";
import HeaderSearchComponent from "./searchComponent/headerSearchComponent";
import SidebarSearchComponent from "./searchComponent/SidebarSearchComponent";

import "./shopPage.css";
import { useEffect, useState } from "react";

// define a list of all filter options
const allFilterOptions = [
    // ornament types
    {label: "Whippet", checked: false, category: "type"},
    {label: "Labrador", checked: false, category: "type"},
    {label: "Cat", checked: false, category: "type"},
    // sizes
    {label: "7cm", checked: false, category: "size"},
    {label: "9cm", checked: false, category: "size"},
    {label: "11cm", checked: false, category: "size"},
    // style
    {label: "Heart", checked: false, category: "style"},
    {label: "Sparkle", checked: false, category: "style"},
    {label: "Clear", checked: false, category: "style"},
    // colour
    {label: "Black", checked: false, category: "colour"},
    {label: "White", checked: false, category: "colour"},
    {label: "Blue", checked: false, category: "colour"},
];

// TODO: Source this data through the backend
const allItemData = [
    {
        title: "Whippet",
        id: 1,
        price: 15.00,
        searchTags: {type: "whippet", size: "7cm", style: ["heart", "sparkle"], colour: ["black", "white"]},
        img: "whippets.png"
    },
    {
        title: "Labrador",
        id: 2,
        price: 14.00,
        searchTags: {type: "labrador", size: "9cm", style: ["heart", "clear"], colour: ["brown"]},
        img: "labradors.png"
    },
    {
        title: "Cat",
        id: 3,
        price: 12.00,
        searchTags: {type: "cat", size: "7cm", style: ["heart", "clear"], colour: ["purple"]},
        img: "cats.png"
    },
]

export default function ShopPageComponent() {
    const [filterOptions, setFilterOptions] = useState(allFilterOptions)
    const [shopItems, setShopItems] = useState<JSX.Element[]>([]);


    // create the shop Items from an array of item data
    const createShopItems = (data: any) => {
        let items = data.map((item: any) => {
            return <ShopItemComponent
                id={item.id}
                title={item.title}
                key={item.id}
                price={item.price}
                img={item.img}
            />
        });
        setShopItems(items)
    }

    // runs just once when the component is created
    useEffect(() => {
        createShopItems(allItemData);
    }, [])

    // runs each time the filter options change
    useEffect(() => {
        // construct an array of currently selected filters
        const allowedTypes: string[] = [];
        const allowedSizes: string[] = [];
        const allowedStyles: string[] = [];
        const allowedColours: string[] = [];

        // check if any filters are selected
        let selectedFilters: number = 0;
        filterOptions.forEach((option) => {
            if (option.category === "type" && option.checked) {allowedTypes.push(option.label.toLowerCase())}
            else if (option.category === "size" && option.checked) {allowedSizes.push(option.label.toLowerCase())}
            else if (option.category === "style" && option.checked) {allowedStyles.push(option.label.toLowerCase())}
            else if (option.category === "colour" && option.checked) {allowedColours.push(option.label.toLowerCase())}

            if (option.checked) {selectedFilters++}
        });

        // if no filters are selected, match all items
        if (selectedFilters === 0) {
            createShopItems(allItemData);
        } else {
            // otherwise, filter the item data and construct a new array with matching elements only
            let matchingItemData: any = [];
            let itemData = allItemData;
            
            // filtering rules for size and type
            if (allowedTypes.length > 0) {
                matchingItemData = itemData.filter((item) => allowedTypes.includes(item.searchTags.type));
                itemData = matchingItemData;
            }
            if (allowedSizes.length > 0) {
                matchingItemData = itemData.filter((item) => allowedSizes.includes(item.searchTags.size));
                itemData = matchingItemData;
            }
            // filtering rules for colour and style
            if (allowedStyles.length > 0) {
                matchingItemData = itemData.filter((item) => allowedStyles.some(val => item.searchTags.style.includes(val)));
                itemData = matchingItemData;
            }
            if (allowedColours.length > 0) {
                matchingItemData = itemData.filter((item) => allowedColours.some(val => item.searchTags.colour.includes(val)));
                itemData = matchingItemData;
            }
            

            console.log(matchingItemData);
            createShopItems(matchingItemData);
        }
    }, [filterOptions])

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