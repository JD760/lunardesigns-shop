import "./shopItem.css";

interface ShopItemProps {
}

export default function ShopItemComponent(props: ShopItemProps) {
    return(
        <div className="shop-item">
            <div className="item-img-container">
                <img className="listing-img" src="whippets.png"/>
            </div>
            <div className="item-title-container">
                <p className="listing-title">Resin Whippet Ornament</p>
                <p className="listing-price">£15.00</p>
            </div>
        </div>
    )
}