import "./Colaborator.css"

const Colaborator = ( {name, role, image, backgroundColor, onDelete} ) => {
    return (
        <div className="colaborator">
            <div className="deletar" onClick={onDelete}>deletar</div>
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