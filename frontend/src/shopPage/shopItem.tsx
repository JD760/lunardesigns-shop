import "./shopItem.css";

interface ShopItemProps {
    id: number,
    price: number
}

export default function ShopItemComponent(props: ShopItemProps) {
    return(
        <a href={"/item/" + props.id.toString()} className="item-wrapper">
        <div className="shop-item">
            <div className="item-img-container">
                <img className="listing-img" src="whippets.png"/>
            </div>
            <div className="item-title-container">
                <p className="listing-title">Resin Whippet Ornament</p>
                <p className="listing-price">£{props.price.toFixed(2)}</p>
            </div>
        </div>
        </a>
    )
}