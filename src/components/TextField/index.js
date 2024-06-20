import "./TextField.css"

const TextField = (props) => {

    const onDigiting = (event) => {
        props.onChanging(event.target.value);
    }

    return (
        <div className="container">
            <label>{props.label}</label>
            <input 
                value={props.value} 
                onChange={onDigiting} 
                required={props.required} 
                placeholder={props.placeholder} 
                type="text" 
            />
        </div>
    )
}

export default TextField;