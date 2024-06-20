import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css"

const Form = (props) => {

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const resetForm = () => {
        setName("");
        setImage("");
        setRole("");
        setTeam("");
    }

    const onSave = (event) => {
        event.preventDefault();
        props.onAddedColaborator({
            name,
            role,
            image,
            team
        });
        resetForm();
    }

    return (
        <section className="form">
            <form onSubmit={onSave} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    onChanging={value=> setName(value)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={role}
                    onChanging={value=> setRole(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    onChanging={value=> setImage(value)}
                />
                <DropDown 
                    required={true} 
                    itens={props.teams} 
                    label="Time"
                    value={team}
                    onChanging={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )

}

export default Form;