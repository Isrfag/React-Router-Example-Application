import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const HomeScreen = () => {

  const {user} = useContext( UserContext ) //Aqui le indicas cual es el contexto que vas a usar

  return (
    <>
    <div className="container">
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Tech</th>
          <th scope="col">Email</th>
          <th scope="col">SocialMedia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{user.name}</th>
          <td>{user.tech}</td>
          <td>{user.email}</td>
          <td>{user.socialmedia}</td>
        </tr>
      </tbody>
    </table>
    </div>
</>

  )
}
