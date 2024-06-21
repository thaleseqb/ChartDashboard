import Colaborator from "../Colaborator"
import "./Team.css"

const Team = ({name, primaryColor, secundaryColor, colaborators, onDelete, changeColor}) => {
    return (
        ( colaborators.length > 0 ) && <section className="team" style={
            {
                backgroundColor: secundaryColor,
            }
        }>
            <input onChange={event => {
                    console.log(name);
                    return changeColor(event.target.value, name)
                }} 
                    value={secundaryColor} 
                    type="color" 
                    className="input-color"
                />
            <h3 style={
                {
                    borderColor: primaryColor
                }
            }>{name}</h3>
            
            <div className="colaborators">
                {colaborators.map(colaborator => <Colaborator
                    onDelete={onDelete}
                    backgroundColor={primaryColor}
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