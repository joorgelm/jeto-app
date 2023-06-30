import {VscGithub} from "react-icons/vsc";
import {SiLinkedin} from "react-icons/si";

const Footer = () => {
    return (
        <>
            <p className="socials">
                <a href="https://github.com/joorgelm/jeto" rel="noreferrer" target="_blank"><VscGithub size={25}/></a>
                <a href="https://www.linkedin.com/in/jlmelgarejo/" rel="noreferrer" target="_blank"><SiLinkedin
                    size={25}/>
                </a>
            </p>
        </>
    );
};

export default Footer;
