import "./TextField.css"

const TextField = ({
    type = "text", 
    label, 
    placeholder, 
    value, 
    onChanging, 
    required=false}) => {

    const onDigiting = (event) => {
        onChanging(event.target.value);
    }

    return (
        <div className={`container container-${type}`}>
            <label>{label}</label>
            <input 
                value={value} 
                onChange={onDigiting} 
                required={required} 
                placeholder={placeholder} 
                type={type} 
            />
        </div>
    )
}

export default TextField;