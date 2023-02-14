import {Outlet} from "react-router-dom";
import Header from "./components/Header.jsx";

const Root = () => {
return(
    <>
    <Header />
    <div className="main">
        <Outlet />
    </div>
    </>
)
}

export default Root;