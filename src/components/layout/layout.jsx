import Nav from "../pages/navbar/navbar"
import { Outlet } from "react-router";
import Footer from "../pages/footer/footer"
const Layout = ()=> {

    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout ;