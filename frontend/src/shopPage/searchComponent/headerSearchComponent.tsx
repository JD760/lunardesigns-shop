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
                optionsToDisplay={[0,1,2]}
                setFilterOptions={props.setFilterOptions}
                header={"Type"}
            />
            <DropdownCheckbox
                filterOptions={props.filterOptions}
                optionsToDisplay={[3,4,5]}
                setFilterOptions={props.setFilterOptions}
                header={"Size"}
            />
            <DropdownCheckbox
                filterOptions={props.filterOptions}
                optionsToDisplay={[6,7,8]}
                setFilterOptions={props.setFilterOptions}
                header={"Style"}
            />
            
        </div>
    );
}