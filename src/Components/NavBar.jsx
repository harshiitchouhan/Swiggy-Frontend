import { Outlet } from "react-router";
import RestHeader from "./RestHeader";

function NavBar(){
    return(
        <>
        <RestHeader></RestHeader>
        <Outlet></Outlet>
        </>
    )
}
export default NavBar;