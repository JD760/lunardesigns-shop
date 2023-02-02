import { useEffect, useState } from "react";
import "./headerSearchComponent.css";
import DropdownCheckbox from "./dropdownCheckbox";

interface HeaderSearchProps {
    filterOptions: Array<any>,
    setFilterOptions: Function
}

export default function HeaderSearchComponent(props: HeaderSearchProps) {
    return(
        <div className="header-search">
            <DropdownCheckbox
                filterOptions={props.filterOptions}
                category={"type"}
                setFilterOptions={props.setFilterOptions}
                header={"Type"}
            />
            <DropdownCheckbox
                filterOptions={props.filterOptions}
                category={"size"}
                setFilterOptions={props.setFilterOptions}
                header={"Size"}
            />
            <DropdownCheckbox
                filterOptions={props.filterOptions}
                category={"style"}
                setFilterOptions={props.setFilterOptions}
                header={"Style"}
            />
        </div>
    );
}