import { redirect } from "react-router-dom";

import "./shopPage.css";

export default function ShopPageComponent() {
    const handleRedirect = (url: string) => {
        console.log("redirect attempt to : ", url);
        redirect(url);
    }

    return(
        <div className="shop-page-container">
            <div className="shop-navbar">
                <div className="socials">SOCIALS</div>
                <div className="title"><a href="/">LUNAR DESIGNS</a></div>
                <div className="basket"><img src="cart.svg"/></div>
            </div>
            <div className="shop-content-container">
                <div className="shop-item">
                    <div className="item-img-container">
                        <img className="listing-img" src="whippets.png"/>
                    </div>
                    <div className="item-title-container">
                    </div>
                </div>

                <div className="shop-item">
                    <div className="item-img-container">
                        <img className="listing-img" src="whippets.png"/>
                    </div>
                    <div className="item-title-container">
                    </div>
                </div>

                <div className="shop-item">
                    <div className="item-img-container">
                        <img className="listing-img" src="whippets.png"/>
                    </div>
                    <div className="item-title-container">
                    </div>
                </div>
            </div>
        </div>
    )
}