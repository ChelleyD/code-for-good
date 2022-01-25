import FAQ from "../../BootomNav/FAQ";
import Contact from "../../BootomNav/Contact";
import Social from "../../BootomNav/Social";




const Footer = [{
    Bottom_title: "FAQ",
        link: "/",
        component:<FAQ />
},
{
    Bottom_title: "Contact US",
    link: "/",
    component: <Contact/>
},
{
    Bottom_title: "Social",
    link: "/",
    component: <Social />
}
]
export default  Footer;