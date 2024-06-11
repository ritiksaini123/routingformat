import { Outlet } from "react-router-dom";
import { Header } from "../../../Component/Header/index";
import { useContext } from "react"
import { Logininfo } from "../../../context/context";
    
export function Layout(){
    const {email,password}=useContext(Logininfo)
    return(
        <div>
    
    {email && password?
    <div>
    <Header/>
    <Outlet/></div>:'you can`t access page without login'}
    </div>
    )
}