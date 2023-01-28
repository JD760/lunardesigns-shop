import { useEffect, useState } from "react";
import "./searchComponent.css";

interface SearchProps {

}

export default function SearchComponent(props: SearchProps) {
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