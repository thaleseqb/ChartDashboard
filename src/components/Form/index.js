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

    const onSave = (event) => {
        event.preventDefault();
    }

    return (
        <section className="form">
            <form onSubmit={onSave} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropDown required={true} itens={times} label="Time"/>
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )

}

export default Form;