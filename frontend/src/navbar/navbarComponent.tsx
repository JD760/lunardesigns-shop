import { useEffect, useState } from "react";
import BasketItem from "./basketItem";
import { BasketItemType } from "../types";
import "./navbarComponent.css";

interface NavbarProps {
    basketItems: BasketItemType[]
}

export default function NavbarComponent(props: NavbarProps) {
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [basketItemElements, setBasketItemElements] = useState<JSX.Element[]>([]);

    // generate the list of basket elements
    useEffect(() => {
        if (props.basketItems.length < 1) {return;}
        let elements = props.basketItems.map((item) => {
            return(
                <BasketItem title={item.title} price={item.price} info={item.info} img={item.img}/>
            )
        });
        setBasketItemElements(elements);
    }, [])

    return(
        <div>
            <div className="shop-header">
                <div className="socials">SOCIALS</div>
                <div className="title"><a href="/">WHIPPET WORLD</a></div>
                <div
                    className="basket"
                    onClick={() => setShowOverlay(!showOverlay)}
                >
                    <img src="cart.svg"/>
                </div>
            </div>
            <div
                className="basket-overlay"
                style={{display: (showOverlay ? "block" : "none")}}
            >
                <div className="basket-overlay-title"><u>Your Basket</u></div>
                <div className="basket-items">
                    {basketItemElements}
                </div>
                <div className="checkout">
                    <p id="order-total">Subtotal: £15.00</p>
                    <button id="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
}