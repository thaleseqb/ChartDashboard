import "./DropDown.css"

const DropDown = (props) => {
    return (
        <div className="DropDownContainer">
            <label>
                {props.label}
            </label>
            <select 
                required={props.required}
                value={props.value}
                onChange={event => props.onChanging(event.target.value)}
            >
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })};
            </select>
        </div>
    )
}

export default DropDown;