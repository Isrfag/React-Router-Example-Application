import { useContext } from "react"
import { useForm } from "../hooks/useForm"
import { UserContext } from "../context/UserContext"
export const LoginScreen = () => {

    //Usamos nuestro hook de formularios

    const initialForm = {
        name:'',
        tech:'',
        email:'',
        socialmedia:''
    }

    const {name,tech,email,socialmedia, formState, onInputChange} = useForm(initialForm)

    //Usamos el context para traer el setUser
    const {setUser} = useContext(UserContext)

    const onSubmit = (event) => {
        event.preventDefault()
        setUser(formState) //El formstate tiene todos los datos dentro de el formulario por eso lo traemos
    } 
   
  return (
    <>
    <div className="container" onSubmit={onSubmit}>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="name"
                    value={name}
                    onChange={(event) => onInputChange(event)}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="tech" className="form-label">Tecnología:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="tech"
                    value={tech}
                    onChange={onInputChange}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    value={email}
                    onChange={onInputChange}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="socialmedia" className="form-label">Redes Sociales:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="socialmedia"
                    value={socialmedia}
                    onChange={onInputChange}></input>
            </div>
        <button type="submit" className="btn btn-primary">Registrar usuario</button>
        </form>
    </div>
    </>
  )
}
