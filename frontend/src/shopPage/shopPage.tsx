import ShopItemComponent from "./shopItem";
import HeaderSearchComponent from "./searchComponent/headerSearchComponent";
import SidebarSearchComponent from "./searchComponent/SidebarSearchComponent";

import "./shopPage.css";
import { useEffect, useState } from "react";
import { itemData, filterOption, BasketItemType } from "../types";
import NavbarComponent from "../navbar/navbarComponent";

// define a list of all filter options
const allFilterOptions: filterOption[] = [
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

interface shopPageProps {
    basketItems: BasketItemType[]
}

export default function ShopPageComponent(props: shopPageProps) {
    const [filterOptions, setFilterOptions] = useState<filterOption[]>(allFilterOptions)
    const [shopItems, setShopItems] = useState<JSX.Element[]>([]);
    const [shopItemData, setShopItemData] = useState<itemData[]>([]);

    const [itemDataFetched, setItemDataFetched] = useState<boolean>(false);
    const [initialItemsCreated, setInitialItemsCreated] = useState<boolean>(false);

    // fetch item data from the backend
    useEffect(() => {
        // ensures the fetch is only run once
        if (!itemDataFetched) {
            fetch("http://localhost:3000/items/getitems", {
                method: "GET",
                headers: {"Content-Type": "text/json"}
            })
            .then((response) => response.json())
            .then(json => {
                setShopItemData(json);
                if (json[0].title) {
                    setItemDataFetched(true);
                }
            });
        }
        // when the data has been fetched, create the initial items to display
        if (itemDataFetched && !initialItemsCreated) {
            createShopItems(shopItemData);
            setInitialItemsCreated(true);
        }
    });

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
        setShopItems(items);
    }

    // runs each time the filter options change
    useEffect(() => {
        // check to ensure the item data has been loaded from the backend
        if (!itemDataFetched) {
            return;
        }

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
            createShopItems(shopItemData);
        } else {
            // otherwise, filter the item data and construct a new array with matching elements only
            let matchingItemData: any = [];
            let itemData = shopItemData;
            
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
            
            createShopItems(matchingItemData);
        }
    }, [filterOptions])

    return(
        <div className="shop-page-container">
            <div className="shop-navbar">
                <NavbarComponent basketItems={props.basketItems}/>
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
                    filterOptions={filterOptions}
                    setItems={(value: any) => setFilterOptions(value)}
                />
            </div>
            </div>
        </div>
    );
}