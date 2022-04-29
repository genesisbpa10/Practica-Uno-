import '../estilos.css'
import {useReducer} from 'react';

const funcionesContador = {
    aumentar: "aumentar valor",
    disminuir: "disminuir valor",
}

function contadorReducir(contador, action) {
    switch (action.type) {
        case funcionesContador.aumentar:
            return contador + 1;
        case funcionesContador.disminuir:
            return contador - 1;
    }
}
const Contador = () =>{
    const [contador, contadorDis] = useReducer(contadorReducir, 0);

    return(
        <div className= 'container-formulario'>
            <h1>Contador</h1>
            <p>Acá se renderiza un contador.</p>
            <form className='formulario'>
            <label className='label'>El valor del contador es: {contador}</label>
                <input className='btn btn-blue' type='button' value='¡Aumentar el valor!' onClick={() => contadorDis({type: funcionesContador.aumentar})}></input>
                <input className='btn btn-blue' type= 'button' value='¡Disminuir el valor!' onClick={() => contadorDis({type: funcionesContador.disminuir})}></input>
            </form>
        </div>
    );
};

export default Contador;