import {VscGithub} from "react-icons/vsc";
import {SiLinkedin} from "react-icons/si";

const Footer = () => {
    return (
        <>
            <p className="socials">
                <a href="https://github.com/joorgelm/jeto" title="back" rel="noreferrer" target="_blank">
                    <VscGithub size={25}/>
                    <em>back</em>
                </a>
                <a href="https://github.com/joorgelm/jeto-app" rel="noreferrer" target="_blank"><VscGithub size={25}/>
                    <em>front</em>
                </a>
                <a href="https://www.linkedin.com/in/jlmelgarejo/" rel="noreferrer" target="_blank"><SiLinkedin
                    size={25}/>
                </a>
            </p>
        </>
    );
};

export default Footer;
