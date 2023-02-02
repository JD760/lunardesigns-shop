import "./shopItem.css";

interface ShopItemProps {
    id: number,
    title: string,
    price: number,
    img: string
}

export default function ShopItemComponent(props: ShopItemProps) {
    return(
        <a href={"/item/" + props.id.toString()} className="item-wrapper">
        <div className="shop-item">
            <div className="item-img-container">
                <img className="listing-img" src={props.img}/>
            </div>
            <div className="item-title-container">
                <p className="listing-title">{props.title}</p>
                <p className="listing-price">£{props.price.toFixed(2)}</p>
            </div>
        </div>
        </a>
    )
}