import { useState } from "react"

export const useForm = (initialForm = {}) => {

    //Hacemos estado para poder gaurdar lo que escribamos recibe el initialForm del component
    const [formState, setFormState] = useState(initialForm)   

    //Creamos la funcion que se encargue de cambiar el valor del formulario cuando lo cambiemos
    /*event Desectructuramos el evento hemos visto que es target con el console.log*/
    const onInputChange = ({target}) => {

        //Desectructuramos name y value
        const {name, value} = target

        //Mandar solo el value da error pq solo estamos mandando uno de los 3. Usamos spread para que guarde los anteriores
        setFormState({ 
            ...formState,
            [name]: value 
            //IMPORTANTE Para que name se modifique es necesario ponerlo entre [], para que cambie a userName,email o password (los name del formulario)
        })

    }

    /**/

    return {
        ...formState, //Usando el spread desectructuramos el state desde aqui y podemos recibir el username email y password por separado
        formState,
        onInputChange
    }
  
}
