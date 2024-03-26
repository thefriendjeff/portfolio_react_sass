import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";

import "../style/components/socialnetworks.sass";       

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/jefferson-alexandre/"},
    { name: "github", icon: <FaGithub />, url: "https://github.com/thefriendjeff"},
    { name: "behance", icon: <FaBehance />, url: "https://www.behance.net/jeffersdesena" },
  ];

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.url} className="social-btn" id={network.name} key={network.name} target="_blank"  rel="noopener noreferrer">
                {network.icon}
            </a>
        ))}
    </section>;
};
export default SocialNetworks;