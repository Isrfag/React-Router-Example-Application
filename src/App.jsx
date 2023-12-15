import {Routes, Route,Navigate} from "react-router-dom"
import { NavbarComponent } from "./components/NavbarComponent"
import {HomeScreen} from "./routes/HomeScreen"
import {ContactScreen} from "./routes/ContactScreen"
import {AboutScreen} from "./routes/AboutScreen"
import { UserProvider } from "./context/UserProvider"
import { LoginScreen } from "./routes/LoginScreen"

export const App = () => {
  return (
    <UserProvider> 
        <NavbarComponent></NavbarComponent>

        <Routes>
          <Route path='/' element = {<HomeScreen></HomeScreen>}></Route>
          <Route path='/login' element = {<LoginScreen></LoginScreen>}></Route>
          <Route path='/contact' element = {<ContactScreen></ContactScreen>}></Route>
          <Route path='/about' element = {<AboutScreen></AboutScreen>}></Route>
          <Route path = "/*" element = {<Navigate to = '/'/>}></Route>
        </Routes>
    </UserProvider>
  )
}
