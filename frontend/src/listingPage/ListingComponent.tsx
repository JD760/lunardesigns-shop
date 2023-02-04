import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarComponent from "../navbar/navbarComponent";
import { BasketItemType } from "../types";

import "./ListingComponentDesktop.css";
import "./ListingComponentMobile.css";

interface ListingProps {
    basketItems: BasketItemType[]
}

export default function ListingComponent(props: ListingProps) {
    const { id } = useParams();

    // fetch an item from the backend by ID
    const fetchItem = () => {

    }

    useEffect(() => {
        fetchItem();
    }, [])

    return(
        <div>
            <NavbarComponent basketItems={props.basketItems}/>
            <div className="separator"/>
            <div className="item-page-container">
                
            </div>
        </div>
    );
}