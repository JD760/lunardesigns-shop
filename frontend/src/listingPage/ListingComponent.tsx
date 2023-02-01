import { useParams } from "react-router-dom";

import "./ListingComponentDesktop.css";
import "./ListingComponentMobile.css";

interface ListingProps {

}

export default function ListingComponent(props: ListingProps) {
    const { id } = useParams();

    return(
        <div className="listing-wrapper">
            <div className="navbar">
                <p>SOCIALS</p>
                <p className="title">WHIPPET WORLD</p>
                <p>BASKET</p>
            </div>
            <div className="content"></div>
        </div>
    )
}