import "../style/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
    return (
      <section id="information">
        <div className="info-card">
          <AiFillPhone id="phone-icon" />
          <div>
            <h3>Phone</h3>
            <p>(11) 94929-7513</p>
          </div>
        </div>
        <div className="info-card">
          <AiOutlineMail id="email-icon" />
          <div>
            <h3>E-mail</h3>
            <p>jeffersonsena.jw@gmail.com</p>
          </div>
        </div>
        <div className="info-card">
          <AiFillEnvironment id="pin-icon" />
          <div>
            <h3>Location</h3>
            <p>São Paulo / Brazil</p>
          </div>
        </div>
      </section>
    );
  };

export default InformationContainer;