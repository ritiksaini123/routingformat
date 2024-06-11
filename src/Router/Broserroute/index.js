import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Home } from "../../Pages/home"
import { About } from "../../Pages/about"
import { Blog } from "../../Pages/blog"
import { Layout } from "../Router/Layout/layout"
import { Path } from "../Constant/routerPath"
import { Login } from "../../Pages/Loginpgae/loginpage"
import { Logininfo } from "../../context/context"
import { useLocation } from "react-router-dom"
import { useState } from "react"
export function  Router (){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
const router=createBrowserRouter([
  {path:Path.login,
    element:<Login useData={function contexhandel(email,password){
setEmail(email)
setPassword(password)
    }}/>
  },
  
        { path:"/",
    element:<Layout/>,
    
    children:[
     
      {path:Path.home,
      element:<Home/>
    },
    {path:Path.about,
        element:<About/>
      },
      {path:Path.blog,
        element:<Blog/>
      }
]
}
    
])
return (
  <Logininfo.Provider value={{email,password}}>
    <RouterProvider router={router}/>
    </Logininfo.Provider>
)
}