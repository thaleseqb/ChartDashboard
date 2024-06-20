import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css"

const Form = () => {
    const times = [
        "Programação",
        "Frontend",
        "DAta Science",
        "DevOps",
        "Mobile",
        "Inovação e Gestão",
        "UX e Design"
    ]

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const onSave = (event) => {
        event.preventDefault();
        console.log("Form foi submetido => ", name, role, image, team);
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
                    itens={times} 
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