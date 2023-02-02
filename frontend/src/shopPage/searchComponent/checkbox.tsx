interface CheckboxProps {
    label: string
    value: boolean
    id: number
    toggle: Function
}

export default function Checkbox(props: CheckboxProps) {
    return(
        <div>
        <input
            name={props.label}
            id={props.label}
            type="checkbox"
            defaultChecked={props.value}
            onChange={() => props.toggle(props.id)}
            // TODO: why does this make the filter work?
            key={Math.random()}
        />
        <label className="checkbox-label" htmlFor={props.label}>{props.label}</label>
        <br/>
        </div>
    )
}