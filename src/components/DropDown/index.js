import "./DropDown.css"

const DropDown = (props) => {
    return (
        <div className="DropDownContainer">
            <label>
                {props.label}
            </label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })};
            </select>
        </div>
    )
}

export default DropDown;