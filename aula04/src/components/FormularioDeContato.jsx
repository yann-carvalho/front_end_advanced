import React,{useState} from 'react'

const FormularioDeContato = () => {

    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
    
        console.log("Vai enviar o seguinte formulário para o back-end: ");
        console.log(`Nome: ${nome} Email: ${email} Curso: ${curso}`);
      }


    return (
    <div>
        <h1>Cadastro de Aluno</h1>
        <form  onSubmit={handleSubmit}>
            <label>
                Nome:
                <input name = "nome" type = "text" onChange={handleName} />
            </label>
            <br />
            <label>
                Email:
                <input name = "email" type="text" onChange={handleEmail}/>
            </label>
            <br />
            <button>Enviar</button>

        </form>
    </div>
  )
}

export default FormularioDeContato