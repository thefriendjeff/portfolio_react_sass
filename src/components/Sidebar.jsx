import SocialNetworks from './SocialNetworks';

import Avatar from '../img/perfil.jpg';

import "../style/components/sidebar.sass";

import InformationContainer from './InformationContainer';

import MeuArquivoPDF from '../assets/dev_resume.pdf';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Jeff"/>
           <div>
            <p className="title">Desenvolvedor</p>
            <p className="title_2">UX Designer</p>
           </div>
            <SocialNetworks />
            <InformationContainer />
            <a href={MeuArquivoPDF} className="btn"  target="_blank" rel="noopener noreferrer">
                Download curriculo
            </a>
    </aside>
    );
};

export default Sidebar;