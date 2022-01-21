import Solutions from "../../pages/Solutions";
import Home from "../../pages/Home";
import Donate from "../../pages/Donate";

const Links = [
    {
        title: "home",
        link: "/",
        component: <Home />
    },
    {
        title: "solutions",
        link: "/solutions",
        component: <Solutions/>
    },
    {
        title: "donate",
        link: "/donate",
        component: <Donate />
    }
]

export default Links;