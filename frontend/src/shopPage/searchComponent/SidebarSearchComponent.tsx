import { useEffect, useState } from "react"
import "./sidebarSearchComponent.css"
import Checkbox from "../checkbox";

interface SidebarSearchProps {

}

export default function SidebarSearchComponent(props: SidebarSearchProps) {
    const allItems = [
        // ornament types
        {label: "Whippet", checked: false},
        {label: "Labrador", checked: false},
        {label: "Cat", checked: false},
        // sizes
        {label: "7cm", checked: false},
        {label: "9cm", checked: false},
        {label: "11cm", checked: false},
        // style
        {label: "Hearts", checked: false},
        {label: "Sparkles", checked: false},
        {label: "Clear", checked: false},
        // colour
        {label: "Black", checked: false},
        {label: "White", checked: false},
        {label: "Blue", checked: false},
    ]

    const [items, setItems] = useState(allItems)

    const toggle = (id: number) => {
        let newItems = items.slice();
        newItems[id].checked = !newItems[id].checked;
        setItems(newItems);
    }

    const resetFilters = () => {
        let newItems = items.slice();
        newItems.forEach(item => {
            item.checked = false;
        });
        setItems(newItems);
    }

    const setFilters = () => {
        let newItems = items.slice();
        newItems.forEach(item => {
            item.checked = true;
        });
        setItems(newItems);
    }

    return(
        <div className="search-container">
            <div className="filter-category type-category">
                <p className="filter-category-label">Type</p>
                <Checkbox label={items[0].label} value={items[0].checked} id={0} toggle={toggle}/>
                <Checkbox label={items[1].label} value={items[1].checked} id={1} toggle={toggle}/>
                <Checkbox label={items[2].label} value={items[2].checked} id={2} toggle={toggle}/>
            </div>

            <div className="filter-category size-category">
                <p className="filter-category-label">Size </p>
                <Checkbox label={items[3].label} value={items[3].checked} id={3} toggle={toggle}/>
                <Checkbox label={items[4].label} value={items[4].checked} id={4} toggle={toggle}/>
                <Checkbox label={items[5].label} value={items[5].checked} id={5} toggle={toggle}/>
            </div>

            <div className="filter-category style-category">
                <p className="filter-category-label">Style</p>
                <Checkbox label={items[6].label} value={items[6].checked} id={6} toggle={toggle}/>
                <Checkbox label={items[7].label} value={items[7].checked} id={7} toggle={toggle}/>
                <Checkbox label={items[8].label} value={items[8].checked} id={8} toggle={toggle}/>
            </div>

            <div className="filter-category colour-category">
                <p className="filter-category-label">Colour</p>
                <Checkbox label={items[9].label} value={items[9].checked} id={9} toggle={toggle}/>
                <Checkbox label={items[10].label} value={items[10].checked} id={10} toggle={toggle}/>
            </div>

            {/* Reset filter options to default values */}
            <div className="filter-category reset-container">
                <button className="reset-filters" onClick={resetFilters}>
                    Reset
                </button>
                <button className="select-all" onClick={setFilters}>
                    Select All
                </button>
            </div>
        </div>
    )
}