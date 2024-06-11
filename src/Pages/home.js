import { useContext } from "react"
import { Logininfo } from "../context/context"
export function Home(){
    const {email,password}=useContext(Logininfo)
    return(
        <div>
        <h2>home</h2>
        <p>emaiil is:{email}</p>
        <p>password is:{password}</p>
        </div>
    )
}