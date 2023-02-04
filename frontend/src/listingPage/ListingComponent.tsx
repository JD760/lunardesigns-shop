import { useParams } from "react-router-dom";
import NavbarComponent from "../navbar/navbarComponent";

import "./ListingComponentDesktop.css";
import "./ListingComponentMobile.css";

interface ListingProps {

}

export default function ListingComponent(props: ListingProps) {
    const { id } = useParams();

    return(
        <NavbarComponent/>
    )
}