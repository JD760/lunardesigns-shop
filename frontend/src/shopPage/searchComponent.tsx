import { useEffect, useState } from "react";
import "./headerSearchComponent.css";

interface HeaderSearchProps {

}

export default function HeaderSearchComponent(props: HeaderSearchProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");

    return(
        <div className="search-filter">
            <div className="searchbar-container">
                <input
                    className="searchbar"
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="filter-container">
                <button className="filter">Filter</button>
            </div>
        </div>
    )
}