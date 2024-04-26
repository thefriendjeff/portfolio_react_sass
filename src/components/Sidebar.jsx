import SocialNetworks from './SocialNetworks';

import Avatar from '../img/perfil.jpg';

import Ebac from '../img/ebac_certificate.jpg';

import "../style/components/sidebar.sass";

import InformationContainer from './InformationContainer';

import MeuArquivoPDF from '../assets/dev_en.pdf';

import MeuCertificadoEBAC from '../assets/ebac.pdf';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Jeff"/>
           <div>
            <p className="title">Front-end Developer</p>
            <p className="title_2">UX Designer</p>
           </div>
            <SocialNetworks />
            <InformationContainer />
            <a href={MeuArquivoPDF} className="btn"  target="_blank" rel="noopener noreferrer">
                Download Resume
            </a>
            <a href={MeuCertificadoEBAC} target="_blank" rel="noopener noreferrer">
                <img id="ebac" src={Ebac} alt="ebac"/>
            </a>
    </aside>
    );
};

export default Sidebar;