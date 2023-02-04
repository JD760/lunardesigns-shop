import "./basketItem.css";

interface BasketItemProps {
    title: string,
    price: number,
    info: string
    img: string
}

export default function BasketItem(props: BasketItemProps) {
    return(
        <div className="basket-item">
            <div className="basket-item-title">{props.title}</div>
            <div className="basket-item-price">£{props.price.toFixed(2)}</div>
            <div className="basket-item-info">{props.info}</div>
            <div className="basket-item-img">{props.img}</div>
        </div>
    )
}