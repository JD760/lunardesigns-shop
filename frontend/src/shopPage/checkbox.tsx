import { useState } from "react";
import "./checkbox.css";

interface CheckboxProps {
    label: string
    checkboxToggle: Function
    value: boolean
}

export default function Checkbox(props: CheckboxProps) {
    return(
        <input 
            name="whippet"
            id="whippet"
            type="checkbox"
            checked={props.value}
            onChange={() => {
                props.checkboxToggle(props.label);
            }}
        />
    )
}