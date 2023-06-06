import './style.css'

function Form() {
    return (
    <form>
        <h3>Cadastro Publicação</h3>
        <div>
            <label for="title">Titulo</label>
            <input type="text" name="title" id="title"></input> <br></br>

            <label>Descrição</label>
            <input type="text" name="description" id="description"></input>

            <input type="submit" value="Enviar"></input>
        </div>   
    </form>
    )
}

export default Form;