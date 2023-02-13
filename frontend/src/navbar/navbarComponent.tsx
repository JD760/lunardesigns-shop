import { useEffect, useState } from "react";
import BasketItem from "./basketItem";
import { BasketItemType } from "../types";
import "./navbarComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faEtsy } from "@fortawesome/free-brands-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

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
                <div className="socials">
                    <a className="social-icon" href="https://facebook.com/lunardesignsjewellery">
                        <FontAwesomeIcon icon={faFacebook} size="2x" color="blue"/>
                    </a>
                    <a className="social-icon" href="">
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="black"/>
                    </a>
                    <a className="social-icon" href="https://lunardesigns2021.etsy.com">
                        <FontAwesomeIcon icon={faEtsy} size="2x" color="orange"/>
                    </a>
                </div>
                <div className="title"><a href="/">LUNAR DESIGNS</a></div>
                <div
                    className="basket"
                    onClick={() => setShowOverlay(!showOverlay)}
                >
                    <FontAwesomeIcon icon={faBasketShopping} size="2x" color="black"/>
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