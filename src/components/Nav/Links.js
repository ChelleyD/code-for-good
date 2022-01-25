import Solutions from "../../pages/Solutions";
import Home from "../../pages/Home";
import Donate from "../../pages/Donate";

const Links = [
    {
        title: "Home",
        link: "/",
        component: <Home />
    },
    {
        title: "Solutions",
        link: "/solutions",
        component: <Solutions/>
    },
    {
        title: "Donate",
        link: "/donate",
        component: <Donate />
    }
]


export default Links;