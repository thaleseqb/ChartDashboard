import Colaborator from "../Colaborator"
import "./Team.css"
import hexToRgba from "hex-to-rgba"

const Team = ({name, color, colaborators, onDelete, changeColor}) => {
    return (
        ( colaborators.length > 0 ) && <section className="team" style={
            {
                backgroundColor: hexToRgba(color, '0.6'),
            }
        }>
            <input 
                    onChange={event => {
                        return changeColor(event.target.value, name);
                        }
                    }
                    value={color} 
                    type="color" 
                    className="input-color"
                />
            <h3 style={
                {
                    borderColor: color
                }
            }>{name}</h3>
            
            <div className="colaborators">
                {colaborators.map(colaborator => <Colaborator
                    onDelete={onDelete}
                    backgroundColor={color}
                    key={colaborator.name}
                    name={colaborator.name}
                    role={colaborator.role}
                    image={colaborator.image}
                />)}
            </div>
        </section>
    )
}

export default Team