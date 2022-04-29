import './estilos.css'

function Formulario(){
    return(
        <div class='container-formulario'>
            <form className='formulario'>
                <p>Nombre y apellido:</p>
                <input className='field' type="text" required></input>
                <p>Correo electrónico: </p>
                <input className='field' type='text'></input>
                <p>Edad: </p>
                <input className='field'></input>
                <p>Contraseña: </p>
                <input className='field'></input>
                <p className='center-content'> 
                    <input className='btn btn-blue' type='button' value= 'Enviar'></input>
                </p>
            </form>
        </div>
    )
}

export default Formulario;