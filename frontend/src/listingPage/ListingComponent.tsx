import "./ListingComponent.css";
import { useParams } from "react-router-dom";


interface ListingProps {

}

export default function ListingComponent(props: ListingProps) {
    const { id } = useParams();

    return(
        <div>Item ID: {id} </div>
    )
}