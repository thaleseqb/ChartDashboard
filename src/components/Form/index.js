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
    return (
        
        <section className="form">
            <form >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropDown itens={times} label="Time"/>  
            </form>
        </section>
    )

}

export default Form;