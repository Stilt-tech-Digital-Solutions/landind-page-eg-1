import { Outlet } from "react-router-dom";
import Header from "../components/nav/header.component";
import Footer from "../components/nav/footer.component";

function Root() {
    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>);
}

export default Root;