import { useEffect, useState } from "react";
import Checkbox from "./checkbox";
import "./dropdownCheckbox.css";

interface DropdownProps {
    filterOptions: Array<any>,
    category: string,
    setFilterOptions: Function,
    header: string
}

export default function DropdownCheckbox(props: DropdownProps) {
    const [expanded, setExpanded] = useState(false);
    const [checkboxDisplay, setCheckblockDisplay] = useState("none");
    const [checkboxes, setCheckboxes] = useState<JSX.Element[]>([]);

    useEffect(() => {
        createCheckboxes();
    }, [])

    const showCheckboxes = () => {
        if (!expanded) {
            setCheckblockDisplay("block");
        } else {
            setCheckblockDisplay("none")
        }
        setExpanded(!expanded);
    }

    const toggle = (id: number) => {
        let newOptions = props.filterOptions.slice();
        newOptions[id].checked = !newOptions[id].checked;
        props.setFilterOptions(newOptions);
    }

    const createCheckboxes = () => {
        let checkboxes: JSX.Element[] = [];
        let filterOptions = props.filterOptions;
        let category = props.category;

        filterOptions.forEach((option, index) => {
            if (option.category === category) {
                checkboxes.push(
                    <Checkbox label={option.label} id={index} value={option.checked} toggle={toggle} key={index}/>
                )
            }
        });
        setCheckboxes(checkboxes);
    } 

    return(
        <div className="dropdown-checkbox">
                <div className="dropdown" onClick={showCheckboxes}>
                    <div className="select">{props.header}</div>
                    <div className="overselect"></div>
                </div>
                <div id="checkboxes" style={{display: checkboxDisplay}}>
                    {checkboxes}
                </div>
        </div>
    )
}