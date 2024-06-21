import { SlClose } from "react-icons/sl";
import "./Colaborator.css"

const Colaborator = ( {name, role, image, backgroundColor, onDelete} ) => {
    return (
        <div className="colaborator">
            <SlClose size={25} className="delete" onClick={onDelete}/>
            <div className="header" style={{backgroundColor}}>
                <img src={image} alt="Thales Quadros" />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Colaborator;