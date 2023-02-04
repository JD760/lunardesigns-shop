import { useEffect, useState } from "react"
import "./sidebarSearchComponent.css"
import Checkbox from "./checkbox";

interface SidebarSearchProps {
    filterOptions: Array<any>,
    setItems: Function
}

export default function SidebarSearchComponent(props: SidebarSearchProps) {
    const filterOptions = props.filterOptions;
    const setItems = props.setItems;

    const toggle = (id: number) => {
        let newItems = filterOptions.slice();
        newItems[id].checked = !newItems[id].checked;
        setItems(newItems);
    }

    const resetFilters = () => {
        let newItems = filterOptions.slice();
        newItems.forEach(filterOption => {
            filterOption.checked = false;
        });
        setItems(newItems);
    }

    const setFilters = () => {
        let newItems = filterOptions.slice();
        newItems.forEach(filterOption => {
            filterOption.checked = true;
        });
        setItems(newItems);
    }

    return(
        <div className="search-container">
            <div className="filter-category type-category">
                <p className="filter-category-label">Type</p>
                <Checkbox label={filterOptions[0].label} value={filterOptions[0].checked} id={0} toggle={toggle}/>
                <Checkbox label={filterOptions[1].label} value={filterOptions[1].checked} id={1} toggle={toggle}/>
                <Checkbox label={filterOptions[2].label} value={filterOptions[2].checked} id={2} toggle={toggle}/>
            </div>

            <div className="filter-category size-category">
                <p className="filter-category-label">Size </p>
                <Checkbox label={filterOptions[3].label} value={filterOptions[3].checked} id={3} toggle={toggle}/>
                <Checkbox label={filterOptions[4].label} value={filterOptions[4].checked} id={4} toggle={toggle}/>
                <Checkbox label={filterOptions[5].label} value={filterOptions[5].checked} id={5} toggle={toggle}/>
            </div>

            <div className="filter-category style-category">
                <p className="filter-category-label">Style</p>
                <Checkbox label={filterOptions[6].label} value={filterOptions[6].checked} id={6} toggle={toggle}/>
                <Checkbox label={filterOptions[7].label} value={filterOptions[7].checked} id={7} toggle={toggle}/>
                <Checkbox label={filterOptions[8].label} value={filterOptions[8].checked} id={8} toggle={toggle}/>
            </div>

            <div className="filter-category colour-category">
                <p className="filter-category-label">Colour</p>
                <Checkbox label={filterOptions[9].label} value={filterOptions[9].checked} id={9} toggle={toggle}/>
                <Checkbox label={filterOptions[10].label} value={filterOptions[10].checked} id={10} toggle={toggle}/>
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
    );
}